"use client";

import type { FormEvent } from "react";
import { EyeIcon, EyeOffIcon, Field } from "./icon-auth";

interface Props {
  showPassword: boolean;
  setShowPassword: (value: boolean) => void;
}

const inputClasses =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-500 shadow-sm transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200/60 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-400 dark:focus:border-slate-600 dark:focus:ring-slate-700/40";

export default function RegisterForm({ showPassword, setShowPassword }: Props) {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    console.log("register", Object.fromEntries(form.entries()));
  }
  const inputCls =
    "w-full rounded-xl border px-4 py-3 text-base outline-none transition " +
    "bg-white border-slate-300 text-slate-800 placeholder:text-slate-500 " +
    "focus:border-slate-400 focus:ring-2 focus:ring-slate-300/40 " +
    "dark:border-white/15 dark:bg-white/10 dark:text-slate-100 " +
    "dark:placeholder:text-slate-400 dark:focus:border-white/20 dark:focus:ring-white/20";
  const iconBtnCls =
    "absolute inset-y-0 right-0 mr-1 inline-flex items-center rounded-md px-3 text-xs " +
    "text-slate-600 transition hover:bg-slate-200/60 " +
    "dark:text-slate-100 dark:hover:bg-white/10";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Field label="Họ và tên" htmlFor="name">
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Nguyễn Văn A"
          className={inputClasses}
        />
      </Field>

      <Field label="Email" htmlFor="reg-email">
        <input
          id="reg-email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className={inputClasses}
        />
      </Field>

      <Field label="Mật khẩu" htmlFor="reg-password">
        <div className="relative">
          <input
            id="reg-password"
            name="password"
            type={showPassword ? "text" : "password"}
            required
            minLength={6}
            placeholder="Ít nhất 6 ký tự"
            className={`${inputClasses} pr-12`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-2 inline-flex items-center rounded-lg px-3 text-xs text-slate-600 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/80"
            aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </div>
      </Field>

      <Field label="Nhập lại mật khẩu" htmlFor="confirm">
        <input
          id="confirm"
          name="confirm"
          type={showPassword ? "text" : "password"}
          required
          placeholder="Nhập lại mật khẩu"
          className={inputClasses}
        />
      </Field>

      <label className="my-2 inline-flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
        <input
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-200 dark:border-slate-600 dark:bg-transparent dark:text-indigo-300 dark:focus:ring-indigo-500/40"
        />
        Tôi đồng ý với Điều khoản dịch vụ và Chính sách bảo mật
      </label>

      <button
        type="submit"
        className="mt-2 w-full bg-indigo-400 rounded-lg
        items-center justify-center font-medium gap-2 transition
        px-4 py-3 shadow-xs hover:bg-indigo-500 disabled:bg-indigo-300
      "
      >
        Tạo tài khoản
      </button>
    </form>
  );
}
