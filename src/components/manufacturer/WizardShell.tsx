import type { ReactNode } from "react";
import { BackIcon } from "@/components/manufacturer/icons";

/** Segmented progress bar shared by the Epic 2 and Epic 3 wizards. */
export function WizardProgress({ total, step }: { total: number; step: number }) {
  return (
    <div className="wiz-progress-track">
      {Array.from({ length: total }, (_, index) => {
        const segment = index + 1;
        const className =
          segment < step ? "wiz-seg filled" : segment === step ? "wiz-seg active" : "wiz-seg";
        return <div className={className} key={segment} />;
      })}
    </div>
  );
}

type WizardShellProps = {
  title: string;
  badge?: string;
  stepLabel: string;
  progressPct: string;
  total: number;
  step: number;
  onBack: () => void;
  footer: ReactNode;
  children: ReactNode;
};

export function WizardShell({
  title,
  badge,
  stepLabel,
  progressPct,
  total,
  step,
  onBack,
  footer,
  children,
}: WizardShellProps) {
  return (
    <div className="wiz-overlay">
      <div className="wiz-header">
        <span className="wiz-header-title">{title}</span>
        {badge ? <span className="pct-badge">{badge}</span> : null}
      </div>
      <div className="wiz-main">
        <button
          type="button"
          className="icon-btn"
          title="Back"
          aria-label="Back"
          onClick={onBack}
          style={{ marginBottom: 16 }}
        >
          <BackIcon size={16} />
        </button>
        <p className="wiz-step-label">{stepLabel}</p>
        <div className="wiz-progress-row">
          <WizardProgress total={total} step={step} />
          <span className="wiz-pct">{progressPct}</span>
        </div>
        <div className="wiz-card">{children}</div>
      </div>
      {footer}
    </div>
  );
}
