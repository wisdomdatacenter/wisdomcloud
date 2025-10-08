"use client";
import type { FormEvent } from "react";
import { EyeIcon, EyeOffIcon, Field } from "./icon-auth";

export default function RegisterForm({
  showPassword,
  setShowPassword,
}: {
  showPassword: boolean;
  setShowPassword: (v: boolean) => void;
}) {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    // TODO: replace with your real sign-up logic
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
      <Field label="Full name" htmlFor="name">
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Nguyen Van A"
          className={inputCls}
        />
      </Field>

      <Field label="Email" htmlFor="reg-email">
        <input
          id="reg-email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className={inputCls}
        />
      </Field>

      <Field label="Password" htmlFor="reg-password">
        <div className="relative text-slate-900 dark:text-slate-100">
          <input
            id="reg-password"
            name="password"
            type={showPassword ? "text" : "password"}
            required
            minLength={6}
            placeholder="At least 6 characters"
            className={`${inputCls} pr-12`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={iconBtnCls}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </div>
      </Field>

      <Field label="Confirm password" htmlFor="confirm">
        <input
          id="confirm"
          name="confirm"
          type={showPassword ? "text" : "password"}
          required
          placeholder="Re-enter password"
          className={inputCls}
        />
      </Field>

      <label className="my-2 inline-flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
        <input
          type="checkbox"
          required
          className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-200 dark:border-white/25 dark:bg-transparent dark:text-indigo-300 dark:focus:ring-white/20"
        />
        I agree to the Terms and Privacy Policy
      </label>

      <button
        type="submit"
        className="mt-2 w-full rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-5 py-3 text-base font-medium text-white shadow-lg transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-slate-300/40 active:scale-[0.99] dark:from-indigo-500 dark:to-fuchsia-500 dark:focus:ring-white/20"
      >
        Create account
      </button>
    </form>
  );
}
