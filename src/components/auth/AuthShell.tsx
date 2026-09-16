import Link from "next/link";
import type { ReactNode } from "react";
import { AuthBrandPanel } from "@/components/auth/AuthBrandPanel";

type AuthMode = "sign-in" | "sign-up";

type AuthShellProps = {
  mode: AuthMode;
  children: ReactNode;
};

export function AuthShell({ mode, children }: AuthShellProps) {
  return (
    <div className="auth-page-split">
      <AuthBrandPanel />

      <div className="auth-wrap">
        <div className="auth-card">
          <Link href="/" className="auth-backlink">
            ← Back
          </Link>

          <div className="auth-tabs" role="tablist" aria-label="Authentication">
            <Link
              href="/sign-in"
              className={`auth-tab${mode === "sign-in" ? " active" : ""}`}
              role="tab"
              aria-selected={mode === "sign-in"}
            >
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className={`auth-tab${mode === "sign-up" ? " active" : ""}`}
              role="tab"
              aria-selected={mode === "sign-up"}
            >
              Create Account
            </Link>
          </div>

          <div className="auth-panel">{children}</div>
        </div>
      </div>
    </div>
  );
}
