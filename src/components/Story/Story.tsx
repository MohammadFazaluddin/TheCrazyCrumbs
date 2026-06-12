import SectionLabel from "@/components/ui/SectionLabel";
import GoldDivider from "@/components/ui/GoldDivider";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const pillars = [
  {
    title: "Small-Batch Craft",
    body: "Each commission is baked fresh in limited quantities to preserve texture, aroma, and finish.",
  },
  {
    title: "Natural Ingredients",
    body: "No palm oil, no shortcuts. Only clean ingredients chosen for depth and balance.",
  },
  {
    title: "Bespoke Finish",
    body: "From gifting boxes to event cakes, every detail is tailored for your occasion.",
  },
];

export default function Story() {
  return (
    <section
      id="story"
      className="section-shell section-y bg-champagne-deep/35"
    >
      <div className="section-content">
        <RevealOnScroll animation="fade-up" className="mb-14 md:mb-20">
          <SectionLabel label="Our Philosophy" />
        </RevealOnScroll>

        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-20 items-start">
          <RevealOnScroll animation="slide-left">
            <div>
              <h2 className="font-headline font-light text-[var(--text-display)] text-ink leading-[1.03] mb-8">
                Baked like a love letter,
                <br />
                plated like fine art.
              </h2>

              <GoldDivider width="120px" className="mb-8" />

              <p className="font-body text-[var(--text-body)] text-ink-muted leading-[1.9] max-w-[52ch]">
                The Crazy Crumbs is a boutique dessert studio built around one
                belief: memorable desserts come from care, patience, and
                ingredient integrity. Every tres leches is soaked, rested, and
                finished by hand to deliver a texture that is airy, silky, and
                unmistakably refined.
              </p>
            </div>
          </RevealOnScroll>

          <div className="space-y-6">
            {pillars.map((pillar, index) => (
              <RevealOnScroll key={pillar.title} animation="fade-up" delay={180 * (index + 1)}>
                <article className="border border-blush-light/30 bg-champagne/75 backdrop-blur-sm px-8 py-8">
                  <h3 className="font-headline text-[var(--text-subhead)] italic font-light text-ink mb-3">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-[var(--text-caption)] leading-[1.9] tracking-[0.03em] text-ink-muted">
                    {pillar.body}
                  </p>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
