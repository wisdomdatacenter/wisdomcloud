"use client";

import { useState } from "react";
import InputField from "@/components/forms/InputField";
import { login } from "@/lib/auth";

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
    <div className="max-w-md mx-auto mt-20 p-6 border rounded-lg shadow-sm">
      <h1 className="text-xl font-bold mb-4">Login</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-3">
        <InputField label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <InputField label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Login
        </button>
      </form>
      {token && <p className="mt-3 text-green-700 break-all">Token: {token}</p>}
    </div>
  );
}
