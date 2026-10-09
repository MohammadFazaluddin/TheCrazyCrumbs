import Image from "next/image";
import { EnquiryButton } from "@/components/ui/Enquiry";

const items = [
  {
    name: "Signature Tres Leches",
    description:
      "The classic: vanilla sponge, our three-milk soak, fresh cream and a dusting of cinnamon.",
    note: "Our speciality",
  },
  {
    name: "Celebration Cakes",
    description:
      "Layered cakes for birthdays, anniversaries and big days, finished with custom message plaques and styling.",
  },
  {
    name: "Gifting Boxes",
    description:
      "Individual portions in our gift boxes, for thank-yous, festivals and corporate gestures.",
  },
  {
    name: "Event Orders",
    description:
      "Larger sizes for private dinners and gatherings, planned around your date and guest count.",
  },
  {
    name: "Boutique Confections",
    description:
      "Small treats from our seasonal kitchen. Ask us what we’re baking this week.",
  },
];

export default function Menu() {
  return (
    <section id="menu" className="bg-sponge py-16 md:py-32">
      <div className="shell grid gap-10 md:gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <h2 className="text-[clamp(2.5rem,5vw,4.25rem)]">From our kitchen</h2>
            <p className="mt-5 max-w-[30rem] text-[1.05rem] md:mt-6 md:text-lg leading-relaxed text-cocoa">
              Tres leches is where we started, but our ovens are rarely quiet.
              Everything is made to order in small batches.
            </p>
            <div className="relative mt-8 aspect-[4/3] md:mt-10 overflow-hidden rounded-2xl">
              <Image
                src="/media/menu-celebration-counter.jpg"
                alt="A two-tier celebration cake beside a gift box of individual cakes on a marble counter"
                fill
                sizes="(min-width: 1024px) 36vw, 90vw"
                className="object-cover object-[50%_70%]"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ul className="divide-y divide-espresso/10 border-y border-espresso/10">
            {items.map(({ name, description, note }) => (
              <li key={name} className="py-6 md:py-10">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <h3 className="text-[clamp(1.75rem,3vw,2.5rem)]">{name}</h3>
                  {note && (
                    <span className="rounded-full bg-rose px-3 py-1 text-xs font-medium tracking-wide text-milk">
                      {note}
                    </span>
                  )}
                </div>
                <p className="mt-3 max-w-[36rem] leading-relaxed text-cocoa">{description}</p>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display text-xl italic text-espresso">
              Not sure what to choose? Tell us about your occasion.
            </p>
            <EnquiryButton variant="outline" className="w-full shrink-0 sm:w-auto">
              Ask us
            </EnquiryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
