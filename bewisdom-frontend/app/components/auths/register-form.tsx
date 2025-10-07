"use client";
import { EyeIcon, EyeOffIcon, Field } from "./icon-auth";
export default function RegisterForm({
  showPassword,
  setShowPassword,
}: {
  showPassword: boolean;
  setShowPassword: (v: boolean) => void;
}) {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    // TODO: replace with your real sign-up logic
    console.log("register", Object.fromEntries(form.entries()));
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Field label="Full name" htmlFor="name">
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Nguyen Van A"
          className="auth-input"
        />
      </Field>

      <Field label="Email" htmlFor="reg-email">
        <input
          id="reg-email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="auth-input"
        />
      </Field>

      <Field label="Password" htmlFor="reg-password">
        <div className="relative">
          <input
            id="reg-password"
            name="password"
            type={showPassword ? "text" : "password"}
            required
            minLength={6}
            placeholder="At least 6 characters"
            className="auth-input pr-12"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 mr-1 inline-flex items-center rounded-md px-3 text-xs text-slate-200 hover:bg-white/10"
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
          className="auth-input"
        />
      </Field>

      <label className="mt-2 inline-flex items-start gap-2 text-xs text-slate-300">
        <input
          type="checkbox"
          required
          className="mt-0.5 h-4 w-4 rounded border-white/20 bg-transparent"
        />
        I agree to the Terms and Privacy Policy
      </label>

      <button type="submit" className="btn-primary w-full">
        Create account
      </button>
    </form>
  );
}
