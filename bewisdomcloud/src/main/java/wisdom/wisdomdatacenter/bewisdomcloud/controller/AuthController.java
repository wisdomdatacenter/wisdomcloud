package wisdom.wisdomdatacenter.bewisdomcloud.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import wisdom.wisdomdatacenter.bewisdomcloud.dto.request.LoginRequest;
import wisdom.wisdomdatacenter.bewisdomcloud.dto.request.RegisterRequest;
import wisdom.wisdomdatacenter.bewisdomcloud.dto.request.VerifyOtpRequest;
import wisdom.wisdomdatacenter.bewisdomcloud.dto.response.JwtResponse;
import wisdom.wisdomdatacenter.bewisdomcloud.service.UserService;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@Valid @RequestBody RegisterRequest req) {
        userService.register(req);
        return ResponseEntity.ok("OTP sent to email");
    }

    @PostMapping("/register/verify-otp")
    public ResponseEntity<String> verify(@Valid @RequestBody VerifyOtpRequest req) {
        boolean ok = userService.verifyOtp(req);
        return ResponseEntity.ok(ok ? "Account activated" : "Invalid OTP");
    }

    @PostMapping("/login")
    public ResponseEntity<JwtResponse> login(@Valid @RequestBody LoginRequest req) {
        String token = userService.login(req);
        return ResponseEntity.ok(new JwtResponse(token));
    }
}
