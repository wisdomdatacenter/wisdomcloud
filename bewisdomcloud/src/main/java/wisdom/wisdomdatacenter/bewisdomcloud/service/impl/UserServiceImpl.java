package wisdom.wisdomdatacenter.bewisdomcloud.service.impl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.dao.DataAccessResourceFailureException;
import org.springframework.data.redis.RedisConnectionFailureException;
import org.springframework.data.redis.RedisSystemException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import wisdom.wisdomdatacenter.bewisdomcloud.dto.request.LoginRequest;
import wisdom.wisdomdatacenter.bewisdomcloud.dto.request.RegisterRequest;
import wisdom.wisdomdatacenter.bewisdomcloud.dto.request.VerifyOtpRequest;
import wisdom.wisdomdatacenter.bewisdomcloud.entity.User;
import wisdom.wisdomdatacenter.bewisdomcloud.generate.JwtUtil;
import wisdom.wisdomdatacenter.bewisdomcloud.repository.UserRepository;
import wisdom.wisdomdatacenter.bewisdomcloud.service.MailService;
import wisdom.wisdomdatacenter.bewisdomcloud.service.UserService;
import wisdom.wisdomdatacenter.bewisdomcloud.service.otp.OtpStore;
import wisdom.wisdomdatacenter.bewisdomcloud.service.otp.impl.RedisOtpStore;

import java.security.SecureRandom;
import java.time.Instant;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepo;
    private final PasswordEncoder encoder;
    private final JwtUtil jwtUtil;
    private final MailService mailService;
    private final RedisOtpStore redis;
    private final OtpStore otpStore;


    @Value("${app.otp.ttl-seconds:300}")
    private long otpTtlSeconds;
    @Value("${app.otp.resend-min-seconds:30}")
    private long resendMinSeconds;
    @Value("${app.otp.max-attempts:5}")
    private int  maxAttempts;
    @Value("${app.otp.block-seconds:300}")
    private long blockSeconds;


    @Override
    public void register(RegisterRequest req) {
        userRepo.findByEmail(req.getEmail()).ifPresent(u -> {
            throw new RuntimeException("Email already registered");
        });
        String toEmail = req.getEmail();
        String otp = generateOtp();

        var user = userRepo.findByEmail(req.getEmail()).orElseGet(() -> {
            var u = User.builder()
                    .email(req.getEmail())
                    .password(encoder.encode(req.getPassword()))
                    .otpHash(otp)
                    .otpExpiry(Instant.now().plusSeconds(otpTtlSeconds))
                    .active(false)
                    .build();
            return userRepo.save(u);
        });
        user.setPassword(encoder.encode(req.getPassword()));
        userRepo.save(user);

        if (!redis.canResend(req.getEmail(), resendMinSeconds))
            throw new RuntimeException("Please wait before requesting another OTP");
        redis.putOtp(toEmail, otp, otpTtlSeconds);
        redis.touchResendCooldown(req.getEmail(), resendMinSeconds);
        mailService.sendOTP(toEmail, otp, otpTtlSeconds);

    }

    @Override
    public boolean verifyOtp(VerifyOtpRequest req) {
        User u = userRepo.findByEmail(req.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (otpStore.isBlocked(req.getEmail()))
            throw new RuntimeException("Too many invalid attempts. Try again later.");
        boolean redisUnavailable = false;
        boolean ok = false;
        try {
            if (otpStore.isBlocked(req.getEmail())) {
                throw new RuntimeException("Too many invalid attempts. Try again later.");
            }
            ok = otpStore.verify(req.getEmail(), req.getOtp(), maxAttempts, blockSeconds);
            log.info("Using redis");
        } catch (Exception e) {
            redisUnavailable = true;
            log.info("Redis is inavailable");
        }
        if (!ok && redisUnavailable){
            if (u.getOtpHash() == null || u.getOtpExpiry() == null) return false;
            if (Instant.now().isAfter(u.getOtpExpiry())) return false;
            log.info("Using database instead");
            return encoder.matches(req.getOtp(), u.getOtpHash());
        }
        if (!ok)
            throw new RuntimeException("Invalid or expired OTP");
        u.setActive(true);
        u.setOtpHash(null);
        u.setOtpExpiry(null);
        userRepo.save(u);

        try {
            otpStore.clear(req.getEmail());
        } catch (Exception ignore) {}
        return true;
    }

    @Override
    public String login(LoginRequest req) {
        User u = userRepo.findByEmail(req.getEmail())
                .orElseThrow(() -> new RuntimeException("Invalid credentials"));

        if (!u.isActive())
            throw new RuntimeException("Account not activated");

        if (!encoder.matches(req.getPassword(), u.getPassword()))
            throw new RuntimeException("Invalid credentials");

        return jwtUtil.generate(u.getEmail());
    }

    private String generateOtp() {
        SecureRandom r = new SecureRandom();
        int n = 100000 + r.nextInt(900000);
        return String.valueOf(n);
    }
}

