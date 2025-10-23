package wisdom.wisdomdatacenter.bewisdomcloud.dto.response;

import lombok.Builder;
import lombok.Data;

import java.time.Instant;

@Data
@Builder
public class VpsResponse {
    private Long id;
    private String provider;
    private String region;
    private String hostname;
    private String ipPublic;
    private String assignedService;
    private Integer cpuCores;
    private Integer ramGb;
    private Integer storageGb;
    private String status;
    private Instant updatedAt;
}