package wisdom.wisdomdatacenter.bewisdomcloud.entity;


import jakarta.persistence.*;
import lombok.*;
import wisdom.wisdomdatacenter.bewisdomcloud.enums.VpsStatus;

import java.time.Instant;

@Entity
@Table(name = "vps")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder
public class Vps {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;
    @Column(nullable = false, unique = true)
    private String hostname;

    private String provider;
    private String region;
    @Column(name = "ip_public", unique = true)
    private String ipPublic;

    private String ipPrivate;
    private String os;
    private Integer cpuCores;
    private Integer ramGb;
    private Integer storageGb;
    private String purpose;
    private String assignedService;

    private Double monthlyCost;
    private String currency;

    private String status = VpsStatus.Active;

    private Instant updatedAt;
    private Instant archivedAt;
    @PrePersist @PreUpdate
    public void setTimestamps() {
        this.updatedAt = Instant.now();
    }

}
