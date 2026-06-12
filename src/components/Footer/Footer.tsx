import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="site-footer"
      className="
        relative
        section-shell
        pt-16 pb-12 md:pt-20 md:pb-14 min-[1440px]:pt-24 min-[1440px]:pb-16
        bg-ink
      "
    >
      <div className="section-content flex flex-col items-center text-center gap-8">

        {/* ── Serif Wordmark — soft gold ── */}
        <Link
          href="/"
          className="
            font-headline font-light
            text-xl uppercase tracking-[0.3em]
            text-gold
            hover:text-gold-light
            transition-colors duration-[400ms]
          "
        >
          The Crazy Crumbs
        </Link>

        {/* ── Gold decorative horizontal divider ── */}
        <div className="flex items-center gap-4 w-full max-w-[220px]">
          <span className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/50" />
          <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
            <circle cx="3" cy="3" r="2.5" stroke="#C5A059" strokeWidth="0.8" />
          </svg>
          <span className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/50" />
        </div>

        {/* ── Tagline ── */}
        <p className="
          font-headline italic font-light
          text-[var(--text-caption)]
          text-gold/50
          tracking-[0.12em]
        ">
          Handcrafted with intention
        </p>

        {/* ── Social Links — stroke-only SVGs ── */}
        <div className="flex items-center gap-7 mt-2">

          {/* Instagram */}
          <a
            href="#"
            aria-label="Follow us on Instagram"
            id="footer-instagram"
            className="
              group
              text-gold/60 hover:text-gold
              transition-colors duration-[400ms]
            "
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-[400ms] group-hover:scale-110"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
            </svg>
          </a>

          {/* WhatsApp */}
          <a
            href="#"
            aria-label="Contact us on WhatsApp"
            id="footer-whatsapp"
            className="
              group
              text-gold/60 hover:text-gold
              transition-colors duration-[400ms]
            "
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-[400ms] group-hover:scale-110"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:hello@thecrazycrumbs.com"
            aria-label="Send us an email"
            id="footer-email"
            className="
              group
              text-gold/60 hover:text-gold
              transition-colors duration-[400ms]
            "
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-[400ms] group-hover:scale-110"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>

        </div>

        {/* ── Gold divider rule ── */}
        <div className="w-full max-w-[400px] h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent mt-2" />

        {/* ── Copyright ── */}
        <p className="
          font-body text-[var(--text-micro)]
          text-gold/35
          tracking-[0.1em]
        ">
          © {currentYear} The Crazy Crumbs. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
