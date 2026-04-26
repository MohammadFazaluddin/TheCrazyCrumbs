import GoldDivider from "./GoldDivider";

interface SectionLabelProps {
  label: string;
  className?: string;
}

export default function SectionLabel({
  label,
  className = "",
}: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      <GoldDivider width="60px" />
      <span className="font-headline text-[var(--text-caption)] uppercase tracking-[0.25em] text-ink-muted font-light">
        {label}
      </span>
      <GoldDivider width="60px" />
    </div>
  );
}
