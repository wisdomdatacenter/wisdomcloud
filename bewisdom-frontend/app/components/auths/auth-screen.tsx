"use client";
import { useState } from "react";
import { Divider, Footer, GradientOrbs, SocialButton } from "./icon-auth";
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
  return (
    <main
      className="relative min-h-screen w-full overflow-hidden
                bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50
                dark:from-slate-900 dark:via-slate-800 dark:to-slate-900
                text-slate-800 dark:text-slate-100"
    >
      {" "}
      <GradientOrbs />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 py-12">
        <div className="w-full flex items-center justify-center">
          <section
            className="backdrop-blur w-full max-w-[960px] mx-auto rounded-3xl
                      border border-slate-200/60 dark:border-white/10
                      bg-white/70 dark:bg-white/5
                      p-8 shadow-xl lg:p-10 supports-[backdrop-filter]:bg-white/40"
          >
            <header className="mb-6 flex items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  Welcome
                </h1>
                <p className="text-sm text-slate-300">
                  Sign in or create a new account
                </p>
              </div>
              <ThemeToggle />
            </header>

            <div
              className="mb-6 inline-flex rounded-full border border-slate-200 dark:border-white/10
  bg-slate-100 dark:bg-white/5 p-2 text-sm"
            >
              <button
                onClick={() => setTab("login")}
                className={
                  "rounded-full px-4 py-2 transition " +
                  (tab === "login"
                    ? "bg-white text-white dark:bg-white dark:text-slate-900 shadow"
                    : "text-slate-700 hover:bg-slate-200/60 dark:text-slate-200 dark:hover:bg-white/10")
                }
                aria-pressed={tab === "login"}
              >
                Đăng nhập
              </button>

              <button
                onClick={() => setTab("register")}
                className={
                  "rounded-full px-4 py-2 transition " +
                  (tab === "register"
                    ? "bg-white text-slate-900 shadow dark:bg-white dark:text-slate-900"
                    : "text-slate-700 hover:bg-slate-200/60 dark:text-slate-200 dark:hover:bg-white/10")
                }
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
            <Divider label={"or continue with"} />
            <div className="grid grid-cols-3 gap-3">
              <SocialButton label="Facebook" />
              <SocialButton label="Google" />
              <SocialButton label="Github" />
            </div>
            <p className="mt-6 text-center text-xs text-slate-300">
              By continuing, you agree to our{" "}
              <a
                className="underline text-slate-700 decoration-dotted underline-offset-4 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white"
                href="#"
              >
                Terms
              </a>{" "}
              and{" "}
              <a
                className="underline text-slate-100 decoration-dotted
              underline-offset-4
              "
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
