import Image from "next/image";
import { EnquiryButton } from "@/components/ui/Enquiry";

// Drips of milk running down from the nav bar into the hero: [x, length, width]
const drips: [number, number, number][] = [
  [1370, 70, 20],
  [1240, 44, 15],
  [1050, 108, 26],
  [880, 52, 16],
  [690, 84, 22],
  [470, 38, 14],
  [310, 96, 24],
  [120, 58, 18],
];

const BASE = 22;

function dripPath() {
  let d = `M0 0 H1440 V${BASE}`;
  for (const [x, len, w] of drips) {
    const r = w / 2;
    const bottom = BASE + len - r;
    d += ` L${x + r + 12} ${BASE}`;
    d += ` C${x + r} ${BASE} ${x + r} ${BASE + 6} ${x + r} ${bottom}`;
    d += ` A${r} ${r} 0 0 1 ${x - r} ${bottom}`;
    d += ` C${x - r} ${BASE + 6} ${x - r} ${BASE} ${x - r - 12} ${BASE}`;
  }
  return `${d} L0 ${BASE} Z`;
}

const facts = ["Baked to order", "No palm oil, no preservatives", "24 hours’ notice"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-espresso pt-16 text-milk md:pt-[72px]">
      <svg
        className="pointer-events-none absolute inset-x-0 top-[63px] h-[80px] w-full text-milk md:top-[71px] md:h-[140px]"
        viewBox="0 0 1440 140"
        preserveAspectRatio="xMidYMin slice"
        aria-hidden="true"
      >
        <path d={dripPath()} fill="currentColor" />
      </svg>

      <div className="shell grid items-end gap-12 pb-14 pt-20 md:pt-40 lg:grid-cols-12 lg:gap-10 lg:pb-24">
        <div className="lg:col-span-7 lg:pb-10">
          <h1 className="rise text-[clamp(2.75rem,7.4vw,6.5rem)] italic leading-[0.98]">
            Soaked in three milks, finished by hand.
          </h1>
          <p
            className="rise mt-6 max-w-[34rem] text-[1.05rem] md:mt-8 md:text-lg leading-relaxed text-milk/75"
            style={{ animationDelay: "150ms" }}
          >
            The Crazy Crumbs is a boutique patisserie with one cake at its
            heart: a light sponge, an overnight three-milk soak and a cloud of
            fresh cream. Every order is baked from scratch, just for you.
          </p>
          <div
            className="rise mt-8 flex flex-wrap md:mt-10 items-center gap-x-8 gap-y-5"
            style={{ animationDelay: "300ms" }}
          >
            <EnquiryButton variant="light">Order a cake</EnquiryButton>
            <a
              href="#menu"
              className="py-2 text-[0.95rem] text-milk underline decoration-cinnamon underline-offset-[6px] transition-colors hover:text-cinnamon-light"
            >
              See the menu
            </a>
          </div>
          <ul
            className="rise mt-10 flex flex-wrap gap-x-8 md:mt-14 gap-y-3 border-t border-milk/15 pt-6 text-sm text-milk/60"
            style={{ animationDelay: "450ms" }}
          >
            {facts.map((fact) => (
              <li key={fact} className="flex items-center gap-2.5">
                <span className="size-1.5 rounded-full bg-cinnamon" aria-hidden="true" />
                {fact}
              </li>
            ))}
          </ul>
        </div>

        <figure className="lg:col-span-5">
          <div className="pour relative mx-auto aspect-[4/5] w-full max-w-[22rem] overflow-hidden sm:max-w-[30rem] rounded-t-full">
            <Image
              src="/media/hero-tres-leches-pour.jpg"
              alt="Milk being poured over a slice of tres leches topped with whipped cream, cinnamon and rose petals"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover object-[55%_50%]"
              fetchPriority="high"
              loading="eager"
            />
          </div>
          <figcaption className="mt-4 text-center font-display text-sm italic text-milk/55">
            The pour: three milks over a warm sponge
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
