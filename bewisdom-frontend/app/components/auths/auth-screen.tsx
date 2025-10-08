"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Divider, Footer, SocialButton } from "./icon-auth";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";
import ThemeToggle from "./theme-buttons";

type AuthScreen = "login" | "register";
interface Props {
  initialTab: AuthScreen;
}

export default function AuthScreen({ initialTab = "login" }: Props) {
  const [tab, setTab] = useState(initialTab);
  const [showPassword, setShowPassword] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <main
      className={
        "relative min-h-screen w-full overflow-hidden transition-colors bg-auth " +
        (!mounted
          ? "bg-white text-slate-900"
          : isDark
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-slate-100"
          : "bg-gradient-to-br from-slate-50 via-slate-100 to-slate-100 text-slate-900")
      }
    >
      <div
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl 
      items-center justify-center px-4 py-12"
      >
        <div className="w-full flex items-center justify-center">
          <section className="card w-full max-w-[960px] mx-auto ">
            <header className="mb-6 flex items-center justify-between">
              <div>
                <h1 className=" text-3xl md:text-4xl font-semibold tracking-tight">
                  Welcome
                </h1>
                <p className="text-sm text-muted">
                  Sign in or create a new account
                </p>
              </div>
              <ThemeToggle />
            </header>

            <div className="mb-6 tabs ">
              <button
                onClick={() => setTab("login")}
                className={` transition px-4 py-2 focus:outline-none rounded-full ${
                  tab === "login"
                    ? " tab--on shadow bg-slate-200 text-slate-900 dark:bg-slate-200 dark:text-slate-900"
                    : " text-slate-800 hover:bg- dark:hover:ring-slate-300/40 focus:ring-slate-300/40 dark:text-slate-200 dark:hover:bg-white/10 "
                }`}
                aria-pressed={tab === "login"}
              >
                Đăng nhập
              </button>
              <button
                onClick={() => setTab("register")}
                className={`tab transition px-4 py-2 focus:outline-none rounded-full ${
                  tab === "register"
                    ? " tab--on shadow bg-slate-700 text-slate-900 dark:bg-slate-200 dark:text-slate-900 "
                    : " text-slate-800 hover:bg-slate-500  dark:hover:ring-slate-500/40 focus:ring-slate-300/40 dark:text-slate-200 dark:hover:bg-white/10 "
                }`}
                aria-pressed={tab === "register"}
              >
                Đăng ký
              </button>
            </div>

            {tab === "login" ? (
              <LoginForm
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
            ) : (
              <RegisterForm
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
            )}

            <Divider label="or continue with" />

            <div className="grid grid-cols-3 gap-3">
              <SocialButton label="Facebook" />
              <SocialButton label="Google" />
              <SocialButton label="Github" />
            </div>

            <p className="mt-6 text-center text-xs text-slate-700 dark:text-slate-300">
              By continuing, you agree to our{" "}
              <a
                className="underline decoration-dotted underline-offset-4
                           text-slate-700 hover:text-slate-900
                           dark:text-slate-100 dark:hover:text-white"
                href="#"
              >
                Terms
              </a>{" "}
              and{" "}
              <a
                className="underline decoration-dotted underline-offset-4
                           text-slate-700 hover:text-slate-900
                           dark:text-slate-100 dark:hover:text-white"
                href="#"
              >
                Policy
              </a>
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
