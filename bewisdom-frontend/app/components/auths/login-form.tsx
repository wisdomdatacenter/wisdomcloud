"use client";

import React from "react";
import { EyeIcon, EyeOffIcon, Field } from "./icon-auth";

export default function LoginForm({
  showPassword,
  setShowPassword,
}: {
  showPassword: boolean;
  setShowPassword: (v: boolean) => void;
}) {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    console.log("login", Object.fromEntries(form.entries()));
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Field label="Login" htmlFor="email">
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full rounded-lg border
           border-white/10 bg-white/5 px-3 py-2 text-sm
            text-slate-100
             placeholder:text-slate-400 outline-none transition
              focus:border-white/20 focus:ring-2
               focus:ring-white/20"
        />
      </Field>
      <Field label="Password" htmlFor="password">
        <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            required
            placeholder="Password"
            className="w-full
          rounded-lg border border-white/10 
          py-2 text-sm
          bg-white/5 text-slate-100
          placeholder:text-slate-400
          outline-none transition
          focus:border-white/20 focus:ring-2
          focus:ring-white/20
          pr-12
          px-3
          "
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 mr-1 inline-flex items-center rounded-md px-3 text-xs text-slate-200 hover:bg-white/10"
          >
            {" "}
            {showPassword ? <EyeIcon /> : <EyeOffIcon />}
          </button>
        </div>
      </Field>
      <div className="flex items-center justify-between">
        <label
          className="inline-flex
         items-center gap-2 text-sm 
         text-slate-200/50"
        >
          <input
            type="checkbox"
            name="remember"
            className="w-4 h-4 
            rounded-white/20
            bg-transparent
          "
          />
          Remember me
          <a
            href="#"
            className="text-sm
            text-indigo-300 
            underline 
            decoration-dotted
            underline-offset-4 hover:text-indigo-200
            "
          >
            Forgot password
          </a>
        </label>
      </div>
      <button
        type="submit"
        className="mt-2 w-full rounded-xl px-5 py-3 text-base font-medium text-white
                   bg-gradient-to-r from-indigo-600 to-fuchsia-600 shadow-lg transition
                   hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-slate-300/40
                   active:scale-[0.99] dark:from-indigo-500 dark:to-fuchsia-500 dark:focus:ring-white/20"
      >
        Đăng nhập
      </button>
    </form>
  );
}
