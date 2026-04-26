"use client";

import { useEffect, useState } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="main-navigation"
      className={`
        fixed top-0 left-0 right-0 z-50
        flex items-center justify-between
        px-[var(--spacing-luxury)] py-5
        transition-all duration-[var(--duration-base)] ease-[var(--ease-luxury)]
        ${
          scrolled
            ? "bg-[var(--color-cream-overlay)] backdrop-blur-md shadow-[0_1px_0_var(--color-blush-light)]"
            : "bg-transparent"
        }
      `}
    >
      {/* ── Wordmark ── */}
      <a
        href="/"
        id="brand-wordmark"
        className="
          font-headline text-lg md:text-xl
          uppercase tracking-[0.3em] font-light
          text-ink
          hover:text-gold transition-colors duration-[var(--duration-base)]
        "
      >
        The Crazy Crumbs
      </a>

      {/* ── Navigation Links ── */}
      <div className="flex items-center gap-8">
        <a
          href="#signature"
          className="
            hidden md:inline-block
            font-body text-[var(--text-caption)] uppercase tracking-[0.2em]
            text-ink-muted
            hover:text-gold transition-colors duration-[var(--duration-base)]
            link-gold
          "
        >
          The Collection
        </a>
        <a
          href="#commission"
          className="
            hidden md:inline-block
            font-body text-[var(--text-caption)] uppercase tracking-[0.2em]
            text-ink-muted
            hover:text-gold transition-colors duration-[var(--duration-base)]
            link-gold
          "
        >
          Commission
        </a>

        {/* ── Selection Bag Icon (Gold line-art) ── */}
        <button
          id="selection-bag"
          aria-label="View your selections"
          className="
            group relative p-2
            text-gold hover:text-gold-dark
            transition-colors duration-[var(--duration-base)]
            cursor-pointer
          "
        >
          <svg
            width="22"
            height="24"
            viewBox="0 0 22 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-[var(--duration-base)] group-hover:scale-105"
          >
            {/* Bag body */}
            <path d="M3 7h16l-1.5 14H4.5L3 7z" />
            {/* Bag handles */}
            <path d="M7 7V5a4 4 0 0 1 8 0v2" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
