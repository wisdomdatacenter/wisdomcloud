package wisdom.wisdomdatacenter.bewisdomcloud.service;


public interface MailService {
    void sendOTP(String toEmail, String otp, long ttlSeconds);
    void send(String toEmail, String subject, String htmlBody);

}
