package wisdom.wisdomdatacenter.bewisdomcloud.controller;

import lombok.RequiredArgsConstructor;
import org.springdoc.core.service.GenericResponseService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import wisdom.wisdomdatacenter.bewisdomcloud.dto.request.VpsRequest;
import wisdom.wisdomdatacenter.bewisdomcloud.dto.response.VpsResponse;
import wisdom.wisdomdatacenter.bewisdomcloud.service.VpsService;

import java.util.List;

@RestController
@RequestMapping("/api/vps")
@RequiredArgsConstructor
public class VpsController {
    private final VpsService service;
    private final GenericResponseService responseBuilder;

    @GetMapping
    public ResponseEntity<List<VpsResponse>> getAll(
        @RequestParam(required = false) String provider,
        @RequestParam(required = false) String region,
        @RequestParam(required = false) String status,
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "20") int size
    ) {
        return ResponseEntity.ok(service.getAll(provider, region, status, page, size));
    }
    @PostMapping
    public ResponseEntity<VpsResponse> create(@RequestBody VpsRequest request) {
        return ResponseEntity.ok(service.create(request));
    }
    @PatchMapping("/{id}")
    public ResponseEntity<VpsResponse> update(
            @PathVariable long id,
            @RequestBody VpsRequest request,
            @RequestHeader(value = "If-Match", required = false) String eTag)
    {
        return ResponseEntity.ok(service.update(id, request, eTag));
    }
    @PostMapping("/{id}/archive")
    public ResponseEntity<VpsResponse> archive(
            @PathVariable long id
    ) {
        service.archive(id);
        return ResponseEntity.noContent().build();
    }
    @PostMapping("/{id}/restore")
    public ResponseEntity<VpsResponse> restore(
            @PathVariable long id
    ) {
        service.restore(id);
        return ResponseEntity.noContent().build();
    }
}
