package wisdom.wisdomdatacenter.bewisdomcloud.service;

import wisdom.wisdomdatacenter.bewisdomcloud.dto.request.LoginRequest;
import wisdom.wisdomdatacenter.bewisdomcloud.dto.request.RegisterRequest;
import wisdom.wisdomdatacenter.bewisdomcloud.dto.request.VerifyOtpRequest;

public interface UserService {
    void register(RegisterRequest request);
    boolean verifyOtp(VerifyOtpRequest request);
    String login(LoginRequest request);
}
