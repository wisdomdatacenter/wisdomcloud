import api from "./api";

export async function register(email: string, password: string) {
  const res = await api.post("/auth/register", { email, password });
  return res.data;
}

export async function verifyOtp(email: string, otp: string) {
  const res = await api.post("/auth/register/verify-otp", { email, otp });
  return res.data;
}

export async function login(email: string, password: string) {
  const res = await api.post("/auth/login", { email, password });
  return res.data; // chứa JWT token
}
