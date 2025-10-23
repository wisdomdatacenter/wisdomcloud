package wisdom.wisdomdatacenter.bewisdomcloud.dto.request;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class VpsRequest {
    private String provider;
    private String region;
    private String hostname;
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
}