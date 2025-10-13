package wisdom.wisdomdatacenter.bewisdomcloud.service.otp.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.session.ChangeSessionIdAuthenticationStrategy;
import org.springframework.stereotype.Service;
import wisdom.wisdomdatacenter.bewisdomcloud.service.otp.OtpStore;

import java.util.concurrent.TimeUnit;

@Service
@RequiredArgsConstructor
public class RedisOtpStore implements OtpStore {
    private final StringRedisTemplate redisTemplate;
    private final PasswordEncoder encoder;
    private static String keyOtp(String email)   { return "otp:" + email; }
    private static String keyTry(String email)   { return "otp:tries:" + email; }
    private static String keyBlock(String email)   { return "otp:block:" + email; }
    private static String keyCool(String email)  { return "otp:cool:" + email; }

    @Override
    public void putOtp(String email, String rawOtp, long ttlSeconds) {
        var key = keyOtp(email);
        var hash = encoder.encode(rawOtp);
        redisTemplate.opsForValue().set(key, hash, ttlSeconds, TimeUnit.SECONDS);
        redisTemplate.delete(keyTry(email));
    }

    @Override
    public boolean canResend(String email, long cooldownSeconds) {
        Boolean existed = redisTemplate.hasKey(keyCool(email));
        return !existed;
    }

    @Override
    public void touchResendCooldown(String email, long cooldownSeconds) {
        redisTemplate.opsForValue().set(keyCool(email), "1", cooldownSeconds, TimeUnit.SECONDS);
    }

    @Override
    public boolean isBlocked(String email) {
        Boolean existed = redisTemplate.hasKey(keyBlock(email));
        return existed != null && existed;
    }

    @Override
    public boolean verify(String email, String rawOtp, int maxAttempts, long blockSeconds) {
        if (isBlocked(keyBlock(email))) return false;
        var key = keyOtp(email);
        String hash = redisTemplate.opsForValue().get(key);
        if (hash == null) return false;
        boolean ok = encoder.matches(rawOtp, hash);
        if (ok) {
            clear(email);
            return true;
        }
        Long tries = redisTemplate.opsForValue().increment(keyTry(email));
        if (tries != null && tries == 1) {
            Long remain = redisTemplate.getExpire(key, TimeUnit.SECONDS);
            if (remain == null || remain <= 0) remain = 60L;
            redisTemplate.expire(keyTry(email), remain, TimeUnit.SECONDS);
        }
        if (tries != null && tries >= maxAttempts) {
            redisTemplate.opsForValue().set(keyBlock(email), "1", blockSeconds, TimeUnit.SECONDS);
        }
        return false;
    }

    @Override
    public void clear(String email) {
        redisTemplate.delete(keyOtp(email));
        redisTemplate.delete(keyBlock(email));
        redisTemplate.delete(keyTry(email));
    }
}
