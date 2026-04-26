import GoldDivider from "@/components/ui/GoldDivider";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="site-footer"
      className="
        relative
        px-[var(--spacing-luxury)] py-16 md:py-20
        bg-champagne-deep
        border-t border-blush-light/20
      "
    >
      <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center gap-8">
        {/* Wordmark */}
        <a
          href="/"
          className="
            font-headline text-lg
            uppercase tracking-[0.3em] font-light
            text-ink
            hover:text-gold transition-colors duration-[var(--duration-base)]
          "
        >
          The Crazy Crumbs
        </a>

        <GoldDivider width="40px" />

        {/* Tagline */}
        <p className="
          font-headline italic font-light
          text-[var(--text-caption)]
          text-ink-muted
          tracking-[0.1em]
        ">
          Handcrafted with intention
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          {/* Instagram */}
          <a
            href="#"
            aria-label="Follow us on Instagram"
            className="text-gold hover:text-gold-dark transition-colors duration-[var(--duration-base)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>

          {/* WhatsApp */}
          <a
            href="#"
            aria-label="Contact us on WhatsApp"
            className="text-gold hover:text-gold-dark transition-colors duration-[var(--duration-base)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:hello@thecrazycrumbs.com"
            aria-label="Send us an email"
            className="text-gold hover:text-gold-dark transition-colors duration-[var(--duration-base)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="
          font-body text-[var(--text-micro)]
          text-ink-light
          tracking-[0.08em]
        ">
          © {currentYear} The Crazy Crumbs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
