package wisdom.wisdomdatacenter.bewisdomcloud.config;

import lombok.*;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Configuration
@ConfigurationProperties(prefix = "app.mail")
public class MailProps {
    private String from;
    private String support;
    private String brand;

    private String verifyTemplate;
}
