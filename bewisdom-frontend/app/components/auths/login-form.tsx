"use client";

import type { FormEvent } from "react";
import { EyeIcon, EyeOffIcon, Field } from "./icon-auth";

interface Props {
  showPassword: boolean;
  setShowPassword: (value: boolean) => void;
}

const inputClasses =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-500 shadow-sm transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200/60 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-400 dark:focus:border-slate-600 dark:focus:ring-slate-700/40";

export default function LoginForm({ showPassword, setShowPassword }: Props) {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    console.log("login", Object.fromEntries(form.entries()));
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 ">
      <Field label="Email" htmlFor="email">
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className={`${inputClasses} `}
        />
      </Field>

      <Field label="Mật khẩu" htmlFor="password">
        <div className="relative hover:bg-slate-400">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            required
            placeholder="••••••••"
            className={`${inputClasses} pr-12`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 justify-center 
            -translate-y-1/2
            inline-flex items-center 
            rounded-lg  text-xs text-slate-600 
            transition right-3 
             dark:text-slate-200 "
            aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </div>
      </Field>

      <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
        <label className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300">
          <input
            type="checkbox"
            name="remember"
            className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-200 dark:border-slate-600 dark:bg-transparent dark:text-indigo-300 dark:focus:ring-indigo-500/40"
          />
          Ghi nhớ đăng nhập
        </label>

        <a
          href="#"
          className="text-indigo-600 underline decoration-dotted underline-offset-4 hover:text-indigo-500 dark:text-indigo-300 dark:hover:text-indigo-200"
        >
          Quên mật khẩu?
        </a>
      </div>

      <button
        type="submit"
        className="mt-2 w-full bg-indigo-400 rounded-lg
        items-center justify-center font-medium gap-2 transition
        px-4 py-3 shadow-xs hover:bg-indigo-500 disabled:bg-indigo-200
      "
      >
        Đăng nhập
      </button>
    </form>
  );
}
