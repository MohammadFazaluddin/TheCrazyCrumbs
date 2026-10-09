const contacts = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/thecrazycrumbs/",
    target: "_blank",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.3" cy="6.7" r="0.8" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/+919172607982",
    target: "_blank",
    icon: (
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    ),
  },
  {
    label: "hello@thecrazycrumbs.com",
    href: "mailto:hello@thecrazycrumbs.com",
    target: "_blank",
    icon: (
      <>
        <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
        <path d="M3 6.5l9 6.5 9-6.5" />
      </>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-espresso py-14 text-milk md:py-20">
      <div className="shell">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-[clamp(2.5rem,6vw,4.5rem)] italic leading-none">
              The Crazy Crumbs
            </p>
            <p className="mt-4 text-milk/60">
              Boutique patisserie. Handcrafted with intention.
            </p>
          </div>

          <ul className="flex flex-col gap-4">
            {contacts.map(({ label, href, target, icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={target}
                  className="flex min-h-11 items-center gap-3 [overflow-wrap:anywhere] text-milk/80 transition-colors hover:text-cinnamon-light"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {icon}
                  </svg>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-12 border-t border-milk/10 md:mt-16 pt-6 text-sm text-milk/45">
          © {new Date().getFullYear()} The Crazy Crumbs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
