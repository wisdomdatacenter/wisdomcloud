package wisdom.wisdomdatacenter.bewisdomcloud.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.Instant;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable=false, unique=true, length=191)
    private String email;

    @Column(nullable=false)
    private String password;

    @Column(name="is_active", nullable=false)
    private boolean active;

    private String otpHash;
    private Instant otpExpiry;
}
