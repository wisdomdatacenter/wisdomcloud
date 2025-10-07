export function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1 block text-sm font-medium text-slate-200"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export function Divider({ label }: { label: string }) {
  return (
    <div className="my-6 flex items-center gap-3 text-xs text-slate-300">
      <div className="h-px flex-1 bg-white/10" />
      <span>{label}</span>
      <div className="h-px flex-1 bg-white/10" />
    </div>
  );
}

export function EyeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-5 w-5"
    >
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function EyeOffIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-5 w-5"
    >
      <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a20.3 20.3 0 0 1 5.06-5.94" />
      <path d="M1 1l22 22" />
      <path d="M22.94 12.94A20.3 20.3 0 0 0 17 7" />
      <path d="M9.88 9.88A3 3 0 0 0 12 15c1.66 0 3-1.34 3-3 0-.53-.14-1.03-.38-1.46" />
    </svg>
  );
}

export function SocialButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
    >
      <span className="sr-only">Continue with</span>
      <SocialIcon />
      {label}
    </button>
  );
}

export function ThemeBadge() {
  return (
    <div className="select-none rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
      Theme
    </div>
  );
}

export function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-5 w-5 text-emerald-300"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export function SocialIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 opacity-80">
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

export function Logo() {
  return (
    <div className="inline-flex items-center gap-2">
      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 shadow-lg" />
      <span className="text-xl font-semibold tracking-tight">WisdomCloud</span>
    </div>
  );
}

export function GradientOrbs() {
  return (
    <>
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
    </>
  );
}

export function Footer() {
  return (
    <footer className="pointer-events-none absolute inset-x-0 bottom-0 z-0 mx-auto w-full max-w-7xl px-4 pb-6 text-center text-xs text-slate-400">
      © {new Date().getFullYear()} Wisdom Engineering. All rights reserved.
    </footer>
  );
}
