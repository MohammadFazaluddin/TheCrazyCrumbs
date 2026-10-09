import { EnquiryButton } from "@/components/ui/Enquiry";

const steps = [
  {
    title: "Send an enquiry",
    body: "Tell us the occasion, date, size and any message you’d like on the cake.",
  },
  {
    title: "We confirm",
    body: "We reply to settle the details and your pickup time. We need at least 24 hours’ notice.",
  },
  {
    title: "Collect it fresh",
    body: "Your cake is baked and soaked for your pickup slot, so it’s at its best when you serve it.",
  },
];

export default function Order() {
  return (
    <section id="order" className="bg-sponge py-16 md:py-32">
      <div className="shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-[clamp(2.5rem,5vw,4.25rem)]">How to order</h2>
            <p className="mt-4 max-w-[32rem] text-[1.05rem] md:mt-5 md:text-lg leading-relaxed text-cocoa">
              Planning a celebration, a dinner or a thoughtful gift? Ordering
              takes a couple of minutes.
            </p>
          </div>
          <EnquiryButton className="w-full sm:w-auto sm:self-start md:self-auto">Start your order</EnquiryButton>
        </div>

        <ol className="mt-10 grid gap-8 md:mt-16 md:grid-cols-3">
          {steps.map(({ title, body }, i) => (
            <li key={title} className="grid grid-cols-[2.5rem_1fr] gap-x-3 border-t border-espresso/15 pt-5 md:block md:pt-6">
              <span className="row-span-2 font-display text-4xl leading-none italic text-rose md:text-5xl" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="font-display text-2xl md:mt-4">{title}</h3>
              <p className="mt-2 max-w-[22rem] leading-relaxed text-cocoa">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
