import Image from "next/image";
import Button from "@/components/ui/Button";
import GoldDivider from "@/components/ui/GoldDivider";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative min-h-screen
        overflow-hidden
        bg-champagne
      "
    >
      {/* ── Mobile: Stacked Layout | Desktop: Absolute-positioned editorial overlap ── */}
      <div className="relative min-h-screen flex flex-col lg:flex-row items-center">

        {/* ── Editorial Image — left side ── */}
        <RevealOnScroll
          animation="fade-in"
          className="
            relative
            w-full lg:w-[55%]
            h-[50vh] sm:h-[55vh] lg:h-screen
            shrink-0
          "
        >
          {/* Warm overlay for tonal harmony */}
          <div className="absolute inset-0 bg-gradient-to-b from-champagne/20 via-transparent to-champagne/40 z-10 pointer-events-none lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-champagne/60" />

          <Image
            src="/media/hero-editorial.png"
            alt="Artisanal Tres Leches — a moment of craft as three milks cascade over hand-baked sponge"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </RevealOnScroll>

        {/* ── Text Column ── */}
        <div className="
          relative z-20
          w-full lg:w-[50%]
          lg:absolute lg:right-0 lg:top-0 lg:h-full
          flex items-center
        ">
          {/* Glass backing for overlap zone */}
          <div className="
            w-full
            px-8 md:px-14 lg:px-16 xl:px-20
            py-12 lg:py-0
            lg:bg-champagne/75 lg:backdrop-blur-sm
            lg:h-full lg:flex lg:items-center
          ">
            <div className="max-w-[520px] mx-auto lg:mx-0">
              {/* Subtitle / Category */}
              <RevealOnScroll animation="fade-up" delay={200}>
                <span className="
                  font-headline italic font-light
                  text-[var(--text-caption)] text-ink-muted
                  tracking-[0.15em] mb-7 block
                ">
                  Boutique Patisserie · Est. 2024
                </span>
              </RevealOnScroll>

              {/* Headline */}
              <RevealOnScroll animation="fade-up" delay={350}>
                <h1 className="
                  font-headline font-light
                  text-[var(--text-hero)]
                  leading-[0.95] tracking-[-0.02em]
                  text-ink
                  mb-8
                ">
                  Artisanal{" "}
                  <em className="font-light italic text-blush-dark not-italic">Commissions</em>
                  <br />
                  <span className="text-[0.65em] font-light">for the Refined Palate</span>
                </h1>
              </RevealOnScroll>

              {/* Gold Divider */}
              <RevealOnScroll animation="fade-in" delay={500}>
                <GoldDivider width="100px" className="mb-8" />
              </RevealOnScroll>

              {/* Subtext */}
              <RevealOnScroll animation="fade-up" delay={550}>
                <p className="
                  font-body
                  text-[var(--text-body)]
                  text-ink-muted
                  leading-[1.8]
                  max-w-[400px]
                  mb-10
                ">
                  World-Class Tres Leches and Boutique Confections.
                  <br />
                  <span className="font-headline italic text-blush-dark">
                    Hand-crafted from scratch. 100% Natural.
                  </span>
                </p>
              </RevealOnScroll>

              {/* CTA */}
              <RevealOnScroll animation="fade-up" delay={700}>
                <Button href="#signature" id="cta-explore-collection">
                  Explore the Collection
                </Button>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </div>

      {/* ── Decorative scroll indicator ── */}
      <div
        className="
          absolute bottom-8 left-1/2 -translate-x-1/2
          flex-col items-center gap-2
          text-ink-light
          animate-fade-in
          hidden lg:flex
          z-30
        "
        style={{ animationDelay: "900ms" }}
      >
        <span className="font-headline italic text-[var(--text-micro)] tracking-[0.15em]">
          Scroll
        </span>
        <div className="w-px h-8 bg-gold/40 animate-pulse" />
      </div>
    </section>
  );
}
