package wisdom.wisdomdatacenter.bewisdomcloud.service.otp;

public interface OtpStore {
    void putOtp(String email, String rawOtp, long ttlSeconds);
    boolean canResend(String email, long cooldownSeconds);
    void touchResendCooldown(String email, long cooldownSeconds);
    boolean isBlocked(String email);
    boolean verify(String email, String rawOtp, int maxAttempts, long blockSeconds);
    void clear(String email);
}
