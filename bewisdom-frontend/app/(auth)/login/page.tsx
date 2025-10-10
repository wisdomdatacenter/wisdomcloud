"use client";

import AuthScreen from "@/app/components/auths/auth-screen";
import { login } from "@/app/lib/auth";
import { useState } from "react";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await login(email, password);
      setToken(res.accessToken);
      localStorage.setItem("token", res.accessToken);
    } catch {
      alert("Login failed");
    }
  }

  return (
    <div>
      <div className="items-center justify-center ">
        <AuthScreen initialTab="login"></AuthScreen>
      </div>
    </div>
  );
}
