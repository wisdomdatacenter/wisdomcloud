"use client";
import type { FormEvent } from "react";
import { EyeIcon, EyeOffIcon, Field } from "./icon-auth";

export default function LoginFormz({
  showPassword,
  setShowPassword,
}: {
  showPassword: boolean;
  setShowPassword: (v: boolean) => void;
}) {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    console.log("login", Object.fromEntries(form.entries()));
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Field label="Email" htmlFor="email">
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full px-4 py-3 rounded-xl outline-none transition 
          border-slate-300 shadow text-slate-600 hover:border-slate-400 
          text-base font-middle placeholer:text-slate-500
          dark:text-slate-300 dark:shadow dark:border-white/15
          dark:bg-white/5 dark:placeholder:text-slate-500
          
          "
        />
      </Field>

      <Field label="Password" htmlFor="password">
        <div className="relative text-slate-900 dark:text-slate-100">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            required
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl outline-none transition 
          border-slate-300 shadow text-slate-600 hover:border-slate-400 
          text-base font-middle placeholer:text-slate-500
          dark:text-slate-300 dark:shadow dark:border-white/15
          dark:bg-white/5 dark:placeholder:text-slate-500
          "
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 mr-1 inline-flex items-center
             rounded-md px-3 text-xs
            text-slate-700 transition hover:bg-black
             dark:text-slate-100 dark:hover:bg-white/10"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </div>
      </Field>

      <div className="flex items-center justify-between">
        <label className="inline-flex items-center gap-2 text-sm dark:text-slate-300">
          <input
            type="checkbox"
            name="remember"
            className="h-4 w-4 rounded border-slate-300 text-slate-700
             focus:ring-indigo-200 dark:border-white/25 dark:bg-transparent
              dark:text-indigo-200 dark:focus:ring-white/20"
          />
          Remember me
        </label>

        <a
          href="#"
          className="text-sm
           text-indigo-900 underline decoration-dotted 
           underline-offset-4 hover:text-indigo-800
 dark:hover:text-indigo-300"
        >
          Forgot password
        </a>
      </div>

      <button
        type="submit"
        className="mt-2 w-full rounded-xl bg-gradient-to-r
         from-indigo-600 to-fuchsia-600 px-5 py-3 
         text-base font-medium text-white shadow-lg
          transition hover:brightness-105 focus:outline-none 
          focus:ring-2 focus:ring-slate-300/40 active:scale-[0.99]
           dark:from-indigo-500 dark:to-fuchsia-500 dark:focus:ring-white/20"
      >
        Đăng nhập
      </button>
    </form>
  );
}
