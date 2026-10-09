import Image from "next/image";
import { EnquiryButton } from "@/components/ui/Enquiry";

const milks = [
  {
    name: "Evaporated milk",
    note: "Gives the soak its body and a gentle, toasty depth.",
  },
  {
    name: "Condensed milk",
    note: "Brings the soft, caramel-like sweetness the cake is loved for.",
  },
  {
    name: "Fresh cream",
    note: "Keeps it light, so the sponge turns silky and never heavy.",
  },
];

export default function Signature() {
  return (
    <section id="tres-leches" className="bg-milk py-16 md:py-32">
      <div className="shell grid items-center gap-10 md:gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="relative lg:col-span-5">
          <div className="relative mx-auto aspect-square w-full max-w-[20rem] overflow-hidden rounded-full sm:max-w-[26rem] lg:max-w-none">
            <Image
              src="/media/signature-tres-leches-overhead.jpg"
              alt="Our signature tres leches seen from above on a gold-rimmed plate, crowned with swirled cream and cinnamon"
              fill
              sizes="(min-width: 1024px) 38vw, 90vw"
              className="object-cover scale-[1.12]"
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <h2 className="text-[clamp(2.5rem,5vw,4.25rem)]">
            The cake we&rsquo;re known for
          </h2>
          <p className="mt-5 max-w-[38rem] text-[1.05rem] md:mt-6 md:text-lg leading-relaxed text-cocoa">
            Our chef&rsquo;s tres leches starts with a delicate sponge, baked
            to hold its shape. It rests overnight in our three-milk soak until
            every crumb is saturated, then gets a crown of fresh whipped cream.
          </p>

          <dl className="mt-10 grid gap-6 sm:grid-cols-3 md:mt-12 sm:gap-6">
            {milks.map(({ name, note }) => (
              <div key={name} className="border-t-2 border-cinnamon/60 pt-5">
                <dt className="font-display text-xl italic">{name}</dt>
                <dd className="mt-2 text-[0.95rem] leading-relaxed text-cocoa">{note}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-col gap-5 rounded-2xl bg-sponge/60 p-5 md:mt-12 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <p className="max-w-[26rem] text-[0.95rem] leading-relaxed text-cocoa">
              <span className="font-medium text-espresso">Silky, fully soaked, yet slices clean.</span>{" "}
              Clean dairy sweetness with no preservatives and no palm oil.
            </p>
            <EnquiryButton className="w-full shrink-0 sm:w-auto">Order a tres leches</EnquiryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
