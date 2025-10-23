package wisdom.wisdomdatacenter.bewisdomcloud.service;

import wisdom.wisdomdatacenter.bewisdomcloud.dto.request.VpsRequest;
import wisdom.wisdomdatacenter.bewisdomcloud.dto.response.VpsResponse;

import java.util.List;

public interface VpsService
{
    List<VpsResponse> getAll(String provider, String region, String status, int page, int pageSize);
    VpsResponse create(VpsRequest request);
    VpsResponse update(long id, VpsRequest request, String etag);
    void archive(long id);
    void restore(long id);

}
