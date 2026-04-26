interface GoldDividerProps {
  className?: string;
  width?: string;
}

export default function GoldDivider({
  className = "",
  width = "80px",
}: GoldDividerProps) {
  return (
    <div
      className={`h-px bg-gold ${className}`}
      style={{ width }}
      role="separator"
      aria-hidden="true"
    />
  );
}
