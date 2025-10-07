"use client";

import { useState } from "react";
import InputField from "@/components/forms/InputField";
import { register } from "@/lib/auth";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await register(email, password);
      setMessage(res || "OTP sent! Check your email.");
    } catch (err: any) {
      setMessage(err.response?.data || "Registration failed");
    }
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded-lg shadow-sm">
      <h1 className="text-xl font-bold mb-4">Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <InputField label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <InputField label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Register
        </button>
      </form>
      {message && <p className="mt-3 text-sm text-gray-700">{message}</p>}
    </div>
  );
}
