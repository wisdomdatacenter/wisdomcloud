package wisdom.wisdomdatacenter.bewisdomcloud.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import wisdom.wisdomdatacenter.bewisdomcloud.dto.request.LoginRequest;
import wisdom.wisdomdatacenter.bewisdomcloud.dto.request.RegisterRequest;
import wisdom.wisdomdatacenter.bewisdomcloud.dto.request.VerifyOtpRequest;
import wisdom.wisdomdatacenter.bewisdomcloud.entity.User;
import wisdom.wisdomdatacenter.bewisdomcloud.generate.JwtUtil;
import wisdom.wisdomdatacenter.bewisdomcloud.repository.UserRepository;
import wisdom.wisdomdatacenter.bewisdomcloud.service.UserService;

import java.security.SecureRandom;
import java.time.Instant;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepo;
    private final PasswordEncoder encoder;
    private final JwtUtil jwtUtil;

    @Value("${app.otp.ttl-seconds:300}")
    private long otpTtlSeconds;

    @Override
    public void register(RegisterRequest req) {
        userRepo.findByEmail(req.getEmail()).ifPresent(u -> {
            throw new RuntimeException("Email already registered");
        });

        String otp = generateOtp();
        String otpHash = encoder.encode(otp);

        User u = User.builder()
                .email(req.getEmail())
                .password(encoder.encode(req.getPassword()))
                .active(false)
                .otpHash(otpHash)
                .otpExpiry(Instant.now().plusSeconds(otpTtlSeconds))
                .build();
        userRepo.save(u);

        // TODO: gửi email thật. Tạm in log:
        System.out.println("OTP for " + req.getEmail() + " = " + otp);
    }

    @Override
    public boolean verifyOtp(VerifyOtpRequest req) {
        User u = userRepo.findByEmail(req.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (u.getOtpExpiry() == null || Instant.now().isAfter(u.getOtpExpiry()))
            throw new RuntimeException("OTP expired");

        if (!encoder.matches(req.getOtp(), u.getOtpHash()))
            return false;

        u.setActive(true);
        u.setOtpHash(null);
        u.setOtpExpiry(null);
        userRepo.save(u);
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
