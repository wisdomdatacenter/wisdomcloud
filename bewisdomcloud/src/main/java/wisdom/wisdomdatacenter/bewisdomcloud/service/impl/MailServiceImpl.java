package wisdom.wisdomdatacenter.bewisdomcloud.service.impl;

import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import wisdom.wisdomdatacenter.bewisdomcloud.config.MailProps;
import wisdom.wisdomdatacenter.bewisdomcloud.service.MailService;

import java.nio.charset.StandardCharsets;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
public class MailServiceImpl implements MailService {
    private final JavaMailSender mailSender;
    private final MailProps mailProps;

    @Override
    @Async
    public void sendOTP(String toEmail, String otp, long ttlSeconds) {
        String subject = "Your verification code is:" + otp;
        String html = buildOtpHtml(toEmail, otp, ttlSeconds, Map.of(
                "brand", safe(mailProps.getBrand(), "Your App"),
                "support", safe(mailProps.getSupport(), "support@your-domain.com"),
                "verifyUrl", renderVerifyUrl(toEmail, otp)
        ));
        send(toEmail, subject, html);
    }

    @Override
    public void send(String toEmail, String subject, String htmlBody) {
        try {
            MimeMessage msg = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(
                    msg, StandardCharsets.UTF_8.name());

            helper.setFrom(mailProps.getFrom());
            helper.setTo(toEmail);
            helper.setSubject(subject);
            helper.setText(htmlBody, true);
            mailSender.send(msg);
            log.info("Mail sent to {} ", toEmail);
        }
        catch (Exception e) {
            log.error("Fail when sending mail to {}, {}", toEmail, e.getMessage(), e);
        }
    }
    private String renderVerifyUrl(String email, String otp) {
        String tpl = mailProps.getVerifyTemplate();
        if (tpl == null || tpl.isBlank()) return "";
        // Thay {email} và {otp} trong template
        return tpl.replace("{email}", urlEncode(email))
                .replace("{otp}", urlEncode(otp));
    }
    private static String urlEncode(String s) {
        try {
            return java.net.URLEncoder.encode(s, StandardCharsets.UTF_8);
        } catch (Exception e) {
            return s;
        }
    }
    private String buildOtpHtml(String email, String otp, long ttlSeconds, Map<String, String> ctx) {
        long minutes = Math.max(1, ttlSeconds / 60);
        String brand = ctx.getOrDefault("brand", "Your App");
        String support = ctx.getOrDefault("support", "support@your-domain.com");
        String verifyUrl = ctx.getOrDefault("verifyUrl", "");

        String button = verifyUrl.isBlank() ? "" :
                """
                <a href="%s" style="display:inline-block;padding:12px 20px;border-radius:8px;
                background:#4F46E5;color:#fff;text-decoration:none;font-weight:600">Verify Account</a>
                """.formatted(verifyUrl);

        return """
                <!doctype html>
                <html lang="en">
                <head>
                  <meta charset="utf-8" />
                  <meta name="viewport" content="width=device-width, initial-scale=1" />
                  <title>%s - Verification Code</title>
                </head>
                <body style="background:#f6f7fb;margin:0;padding:24px;font-family:system-ui,Arial">
                  <table role="presentation" width="100%%" cellspacing="0" cellpadding="0" style="max-width:600px;margin:auto;background:#ffffff;border-radius:12px;overflow:hidden">
                    <tr>
                      <td style="padding:24px 24px 8px">
                        <h2 style="margin:0 0 8px 0;font-size:20px;color:#111827">%s</h2>
                        <p style="margin:0;color:#6B7280;font-size:14px">Email verification code</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:8px 24px 24px">
                        <p style="margin:0 0 12px 0;color:#111827">Hello <b>%s</b>,</p>
                        <p style="margin:0 0 16px 0;color:#111827">
                          Your verification code is:
                        </p>
                        <div style="font-size:32px;letter-spacing:6px;font-weight:800;color:#111827;margin:8px 0 16px 0">%s</div>
                        <p style="margin:0 0 16px 0;color:#374151">
                          This code will expire in <b>%d minute(s)</b>.
                        </p>
                        %s
                        <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0" />
                        <p style="margin:0;color:#6B7280;font-size:12px">
                          If you didn’t request this, please ignore this email or contact us at %s.
                        </p>
                      </td>
                    </tr>
                  </table>
                </body>
                </html>
                """.formatted(brand, brand, email, otp, minutes, button, support);
    }
    private static String safe(String val, String fallback) {
        return (val == null || val.isBlank()) ? fallback : val;
    }
}

