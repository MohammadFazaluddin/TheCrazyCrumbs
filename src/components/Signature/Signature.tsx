import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import GoldDivider from "@/components/ui/GoldDivider";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const flavorProfile = [
  {
    attribute: "Texture",
    description: "Light, airy sponge that dissolves on contact",
  },
  {
    attribute: "Taste",
    description: "Rich, three-milk infusion with a caramel whisper",
  },
  {
    attribute: "The Secret",
    description: "0% Palm Oil — Pure, uncompromised indulgence",
  },
];

export default function Signature() {
  return (
    <section
      id="signature"
      className="
        relative
        py-24 md:py-32 lg:py-40
        px-[var(--spacing-luxury)]
        overflow-hidden
      "
    >
      {/* ── Section Label ── */}
      <RevealOnScroll animation="fade-up" className="flex justify-center mb-16 md:mb-24">
        <SectionLabel label="The Signature Masterpiece" />
      </RevealOnScroll>

      {/* ── Editorial Layout ── */}
      <div className="relative max-w-[1400px] mx-auto">
        {/* ── Full-width Hero Image ── */}
        <RevealOnScroll animation="fade-in">
          <div className="
            relative
            w-full
            aspect-[16/10] md:aspect-[16/8] lg:aspect-[16/7]
            overflow-hidden
          ">
            {/* Warm editorial overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-champagne/20 via-transparent to-champagne/30 z-10 pointer-events-none" />
            <Image
              src="/media/signature-tres-leches.png"
              alt="The Signature Tres Leches — a masterwork of three-milk infusion on an antique gold-rimmed plate"
              fill
              className="object-cover"
              sizes="(max-width: 1400px) 100vw, 1400px"
            />
          </div>
        </RevealOnScroll>

        {/* ── Flavor Profile Card (overlapping image) ── */}
        <RevealOnScroll animation="fade-up" delay={300}>
          <div className="
            relative
            md:absolute md:bottom-[-40px] md:right-[5%] lg:right-[8%]
            md:w-[420px] lg:w-[480px]
            mt-[-40px] md:mt-0
            mx-auto md:mx-0
            max-w-[520px]
            z-20
          ">
            <div className="
              bg-champagne/90 backdrop-blur-lg
              border border-blush-light/30
              px-10 py-10 md:px-12 md:py-12
              shadow-[0_8px_40px_rgba(44,36,33,0.08)]
            ">
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-8">
                <GoldDivider width="30px" />
                <h3 className="
                  font-headline italic font-light
                  text-[var(--text-subhead)]
                  text-ink
                  tracking-[0.05em]
                ">
                  Flavor Profile
                </h3>
              </div>

              {/* Flavor Attributes */}
              <div className="space-y-6">
                {flavorProfile.map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex items-baseline gap-4">
                      <span className="
                        font-headline font-semibold
                        text-[var(--text-caption)] uppercase tracking-[0.15em]
                        text-gold
                        min-w-[90px]
                        shrink-0
                      ">
                        {item.attribute}
                      </span>

                      {/* Gold connecting line */}
                      <span className="
                        hidden sm:block
                        flex-1 h-px
                        bg-gradient-to-r from-gold/40 to-gold/10
                        translate-y-[-2px]
                      " />

                      <span className="
                        font-body text-[var(--text-caption)]
                        text-ink-muted
                        leading-relaxed
                      ">
                        {item.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Card Footer */}
              <div className="mt-10 pt-6 border-t border-blush-light/30">
                <p className="
                  font-headline italic font-light
                  text-[var(--text-micro)]
                  text-ink-light
                  tracking-[0.1em]
                ">
                  &ldquo;Every slice is a letter of intention, composed entirely from scratch.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* ── "Tres Leches" large decorative text ── */}
      <RevealOnScroll animation="fade-in" delay={600}>
        <div className="
          mt-20 md:mt-32
          text-center
        ">
          <span className="
            font-headline italic font-light
            text-[clamp(2rem,5vw,4rem)]
            text-blush-light/50
            tracking-[0.1em]
            select-none
          ">
            Tres Leches
          </span>
        </div>
      </RevealOnScroll>
    </section>
  );
}
