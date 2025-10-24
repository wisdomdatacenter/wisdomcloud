package wisdom.wisdomdatacenter.bewisdomcloud.service.impl;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import wisdom.wisdomdatacenter.bewisdomcloud.dto.request.VpsRequest;
import wisdom.wisdomdatacenter.bewisdomcloud.dto.response.VpsResponse;
import wisdom.wisdomdatacenter.bewisdomcloud.entity.Vps;
import wisdom.wisdomdatacenter.bewisdomcloud.enums.VpsStatus;
import wisdom.wisdomdatacenter.bewisdomcloud.repository.VpsRepository;
import wisdom.wisdomdatacenter.bewisdomcloud.service.VpsService;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class VpsServiceImpl  implements VpsService {
    private final VpsRepository repository;
    @Override
    public List<VpsResponse> getAll(String provider, String region, String status, int page, int pageSize) {
        var list = repository.findAll();
        return list.stream().map(this::toResponse).collect(Collectors.toList());
    }

    @Override
    public VpsResponse create(VpsRequest request) {
        if (repository.existsByHostname(request.getHostname()))
            throw new IllegalArgumentException("Hostname already existed");
        if (repository.existsByIpPublic(request.getIpPublic()))
            throw new IllegalArgumentException("Hostname already existed");
        var entity = Vps.builder()
                .hostname(request.getHostname())
                .provider(request.getProvider())
                .region(request.getRegion())
                .ipPublic(request.getIpPublic())
                .ipPrivate(request.getIpPrivate())
                .os(request.getOs())
                .cpuCores(request.getCpuCores())
                .ramGb(request.getRamGb())
                .storageGb(request.getStorageGb())
                .purpose(request.getPurpose())
                .assignedService(request.getAssignedService())
                .monthlyCost(request.getMonthlyCost())
                .currency(request.getCurrency())
                .status(VpsStatus.Active)
                .build();
        return toResponse(repository.save(entity));
    }

    @Override
    public VpsResponse update(long id, VpsRequest request, String etag) {
        var entity = repository.findById(id).orElseThrow(() -> new RuntimeException("vps not found"));
        entity.setRegion(request.getRegion());
        entity.setOs(request.getOs());
        entity.setRamGb(request.getRamGb());
        entity.setCpuCores(request.getCpuCores());
        entity.setStorageGb(request.getStorageGb());
        entity.setPurpose(request.getPurpose());
        return toResponse(repository.save(entity));
    }

    @Override
    public void archive(long id) {
        var vps = repository.findById(id).orElseThrow(() -> new RuntimeException("Vps not found"));
        vps.setStatus(VpsStatus.Archived);
        vps.setArchivedAt(Instant.now());
        repository.save(vps);
    }

    @Override
    public void restore(long id) {
        var vps = repository.findById(id).orElseThrow(() -> new RuntimeException("Vps not found"));
        vps.setStatus(VpsStatus.Active);
        vps.setArchivedAt(null);
        repository.save(vps);
    }

    private VpsResponse toResponse(Vps vps) {
        return VpsResponse.builder()
                .id(vps.getId())
                .provider(vps.getProvider())
                .region(vps.getRegion())
                .hostname(vps.getHostname())
                .ipPublic(vps.getIpPublic())
                .assignedService(vps.getAssignedService())
                .cpuCores(vps.getCpuCores())
                .ramGb(vps.getRamGb())
                .storageGb(vps.getStorageGb())
                .status(vps.getStatus())
                .updatedAt(vps.getUpdatedAt())
                .build();
    }
}
