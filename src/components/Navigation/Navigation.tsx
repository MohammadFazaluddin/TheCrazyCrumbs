"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = `
    relative
    font-body text-xs uppercase tracking-[0.2em]
    text-ink-muted
    transition-colors duration-[400ms]
    hover:text-gold
    group
  `;

  const navLinks = [
    { href: "#story", label: "Philosophy" },
    { href: "#signature", label: "Collection" },
  ];

  const navLinksRight = [
    { href: "#commission", label: "Commission" },
  ];

  return (
    <nav
      id="main-navigation"
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]
        ${
          scrolled
            ? "bg-[#FAF6EE]/85 backdrop-blur-md shadow-[0_1px_0_rgba(197,160,89,0.15)]"
            : "bg-transparent"
        }
      `}
    >
      <div className="section-shell">
        <div className="section-content flex items-center justify-between py-5 min-[1440px]:py-6">

          {/* ── Left Nav Links ── */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} className={navLinkClass}>
                {label}
                {/* Gold underline */}
                <span className="
                  absolute -bottom-0.5 left-0
                  h-px w-0
                  bg-gold
                  transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                  group-hover:w-full
                " />
              </a>
            ))}
          </div>

          {/* ── Centered Wordmark ── */}
          <Link
            href="/"
            id="brand-wordmark"
            className="
              font-headline
              text-sm md:text-base
              uppercase tracking-[0.28em] font-light
              text-ink
              hover:text-gold
              transition-colors duration-[400ms]
              absolute left-1/2 -translate-x-1/2
            "
          >
            The Crazy Crumbs
          </Link>

          {/* ── Right Nav + Bag ── */}
          <div className="flex items-center gap-8 ml-auto">
            {navLinksRight.map(({ href, label }) => (
              <a key={href} href={href} className={`${navLinkClass} hidden md:relative`}>
                {label}
                <span className="
                  absolute -bottom-0.5 left-0
                  h-px w-0
                  bg-gold
                  transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                  group-hover:w-full
                " />
              </a>
            ))}

            {/* Bag Icon */}
            <button
              id="selection-bag"
              aria-label="View your selections"
              className="
                group relative p-2
                text-gold hover:text-gold-dark
                transition-colors duration-[400ms]
                cursor-pointer
              "
            >
              <svg
                width="20"
                height="22"
                viewBox="0 0 22 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-[400ms] group-hover:scale-105"
              >
                <path d="M3 7h16l-1.5 14H4.5L3 7z" />
                <path d="M7 7V5a4 4 0 0 1 8 0v2" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}
