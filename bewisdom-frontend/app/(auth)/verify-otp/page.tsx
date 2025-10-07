"use client";

import { useState } from "react";
import InputField from "@/components/forms/InputField";
import { verifyOtp } from "@/lib/auth";

export default function VerifyOtpPage() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");

  async function handleVerify(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await verifyOtp(email, otp);
      setMessage(res || "Account activated!");
    } catch (err: any) {
      setMessage(err.response?.data || "Invalid OTP");
    }
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded-lg shadow-sm">
      <h1 className="text-xl font-bold mb-4">Verify OTP</h1>
      <form onSubmit={handleVerify} className="flex flex-col gap-3">
        <InputField label="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <InputField label="OTP" value={otp} onChange={e => setOtp(e.target.value)} />
        <button type="submit" className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
          Verify
        </button>
      </form>
      {message && <p className="mt-3 text-sm text-gray-700">{message}</p>}
    </div>
  );
}
