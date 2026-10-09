"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { EnquiryButton } from "@/components/ui/Enquiry";

const links = [
  { href: "#tres-leches", label: "Tres leches" },
  { href: "#menu", label: "Menu" },
  { href: "#story", label: "Our story" },
  { href: "#order", label: "How to order" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 bg-milk transition-shadow duration-300 ${
        scrolled || menuOpen ? "shadow-[0_1px_0_rgba(35,25,21,0.08)]" : ""
      }`}
    >
      <nav className="shell flex h-16 items-center justify-between gap-4 md:h-[72px]" aria-label="Main">
        <Link
          href="/"
          className="whitespace-nowrap font-display text-xl italic tracking-tight text-espresso sm:text-2xl"
          onClick={() => setMenuOpen(false)}
        >
          The Crazy Crumbs
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-[0.95rem] text-cocoa transition-colors hover:text-rose"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1 sm:gap-2">
          <EnquiryButton size="sm">
            <span className="sm:hidden">Order</span>
            <span className="hidden sm:inline">Order a cake</span>
          </EnquiryButton>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="-mr-2.5 grid size-11 place-items-center rounded-full text-espresso hover:bg-sponge lg:hidden cursor-pointer"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
              <path
                d={menuOpen ? "M5 5l12 12M17 5L5 17" : "M3 7h16M3 15h16"}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-espresso/10 bg-milk lg:hidden">
          <ul className="shell flex flex-col py-4">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 font-display text-[1.75rem] text-espresso"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
