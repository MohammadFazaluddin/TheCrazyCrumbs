const principles = [
  {
    title: "Small batches",
    body: "Each order is baked fresh in limited quantities to protect texture, aroma and finish.",
  },
  {
    title: "Natural ingredients",
    body: "No palm oil and no shortcuts. Only clean ingredients chosen for depth and balance.",
  },
  {
    title: "Made for your occasion",
    body: "From gift boxes to event cakes, every detail is shaped around the moment you’re planning.",
  },
];

export default function Story() {
  return (
    <section id="story" className="bg-milk py-16 md:py-36">
      <div className="shell">
        <h2 className="max-w-[16ch] text-[clamp(2.75rem,6.5vw,5.75rem)] italic leading-[1]">
          Baked like a love letter, plated like fine art.
        </h2>

        <div className="mt-10 grid gap-10 md:mt-20 md:gap-14 lg:grid-cols-12 lg:gap-16">
          <p className="text-[1.05rem] leading-relaxed text-cocoa md:text-lg lg:col-span-5">
            The Crazy Crumbs is a boutique dessert studio built on one belief:
            memorable desserts come from care, patience and honest
            ingredients. Every tres leches is soaked, rested and finished by
            hand, so it arrives airy, silky and unmistakably ours.
          </p>

          <ul className="grid gap-8 sm:grid-cols-3 lg:col-span-7">
            {principles.map(({ title, body }) => (
              <li key={title}>
                <h3 className="font-display text-2xl">{title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-cocoa">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
