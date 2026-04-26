interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "outlined" | "filled";
  className?: string;
  type?: "button" | "submit";
  id?: string;
}

export default function Button({
  children,
  onClick,
  href,
  variant = "outlined",
  className = "",
  type = "button",
  id,
}: ButtonProps) {
  const baseStyles = `
    relative inline-flex items-center justify-center
    font-body text-[var(--text-caption)] uppercase tracking-[0.2em]
    px-10 py-4
    transition-all duration-[var(--duration-base)] ease-[var(--ease-luxury)]
    cursor-pointer
    overflow-hidden
  `;

  const variantStyles = {
    outlined: `
      border border-gold text-gold
      bg-transparent
      hover:bg-gold hover:text-champagne
      active:bg-gold-dark active:border-gold-dark
    `,
    filled: `
      border border-gold bg-gold text-champagne
      hover:bg-gold-dark hover:border-gold-dark
      active:bg-gold-dark
    `,
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a id={id} href={href} className={combinedStyles} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button id={id} type={type} className={combinedStyles} onClick={onClick}>
      {children}
    </button>
  );
}
