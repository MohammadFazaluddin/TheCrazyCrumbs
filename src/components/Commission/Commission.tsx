"use client";
import { useState } from 'react';
import GoldDivider from "@/components/ui/GoldDivider";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import EnquiryModal from "@/components/ui/EnquiryModal";

const details = [
  "Custom message plaques and celebration styling",
  "Intimate gifting boxes and premium event sizing",
  "Pickup scheduling with freshness-first preparation",
];

export default function Commission() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        id="commission"
        className="
          relative section-shell section-y
          bg-gradient-to-b from-blush-light/10 via-champagne/80 to-champagne
        "
      >
        {/* Background texture layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blush-light/10 to-transparent pointer-events-none" />

        <div className="relative section-content">

          {/* ── Outer border frame ── */}
          <div className="border border-gold/25 p-[2px]">
            {/* ── Inner border frame (double-line effect) ── */}
            <div className="border border-gold/15">

              {/* ── Console content ── */}
              <div className="
                bg-champagne/80 backdrop-blur-sm
                px-8 py-14 md:px-14 md:py-20 lg:px-24 lg:py-24
              ">

                {/* Header */}
                <RevealOnScroll animation="fade-up" className="text-center mb-10">
                  <p className="
                    font-body text-[10px] uppercase tracking-[0.3em]
                    text-gold mb-5
                  ">
                    Reserve Your Moment
                  </p>
                  <h2 className="
                    font-headline font-light
                    text-[var(--text-display)]
                    uppercase tracking-[0.04em]
                    leading-[1.05]
                    text-ink
                  ">
                    Commission a Signature Creation
                  </h2>
                </RevealOnScroll>

                {/* Gold divider */}
                <RevealOnScroll animation="fade-in" delay={180} className="flex justify-center mb-10">
                  <GoldDivider width="120px" />
                </RevealOnScroll>

                {/* Body copy */}
                <RevealOnScroll animation="fade-up" delay={260}>
                  <p className="
                    mx-auto max-w-[58ch] text-center
                    font-body text-[var(--text-body)] text-ink-muted
                    leading-[1.9] mb-12
                  ">
                    Planning a celebration, private dinner, or thoughtful gift? We craft
                    each order from scratch with timelines built around your occasion.
                  </p>
                </RevealOnScroll>

                {/* Detail lines */}
                <div className="grid gap-3 mb-14 md:max-w-[700px] md:mx-auto">
                  {details.map((detail, index) => (
                    <RevealOnScroll key={detail} animation="fade-up" delay={320 + index * 120}>
                      <p className="
                        text-center font-body text-[var(--text-caption)]
                        uppercase tracking-[0.14em] text-ink-light
                      ">
                        {detail}
                      </p>
                    </RevealOnScroll>
                  ))}
                </div>

                {/* CTA — Updated to trigger EnquiryModal */}
                <RevealOnScroll animation="fade-up" delay={700} className="flex justify-center">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    id="cta-enquiry"
                    className="
                      inline-flex items-center justify-center gap-3
                      font-body text-xs uppercase tracking-[0.2em]
                      px-12 py-4
                      border border-gold text-ink
                      bg-transparent
                      hover:bg-gold hover:text-champagne
                      transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                      cursor-pointer
                      group
                    "
                  >
                    Send an Enquiry
                    {/* Arrow decoration */}
                    <svg
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      className="transition-transform duration-[400ms] group-hover:translate-x-1"
                    >
                      <path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </RevealOnScroll>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Enquiry Concierge Modal */}
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
