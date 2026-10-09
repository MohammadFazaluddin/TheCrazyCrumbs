"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";

const ENQUIRY_EMAIL = "hello@thecrazycrumbs.com";

const occasions = [
  "Birthday",
  "Anniversary",
  "Wedding or engagement",
  "Dinner party",
  "Gift",
  "Corporate order",
  "Just because",
];

const EnquiryContext = createContext<(() => void) | null>(null);

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [minDate, setMinDate] = useState("");
  const open = useCallback(() => {
    setMinDate(tomorrow());
    dialogRef.current?.showModal();
  }, []);

  return (
    <EnquiryContext.Provider value={open}>
      {children}
      <EnquiryDialog dialogRef={dialogRef} minDate={minDate} />
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const open = useContext(EnquiryContext);
  if (!open) throw new Error("useEnquiry must be used inside EnquiryProvider");
  return open;
}

const buttonVariants = {
  solid: "bg-rose text-milk hover:bg-espresso",
  light: "bg-milk text-espresso hover:bg-cinnamon-light",
  outline:
    "border border-espresso/30 text-espresso hover:border-espresso hover:bg-espresso hover:text-milk",
};

const buttonSizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-7 py-3.5 text-[0.95rem]",
};

export function EnquiryButton({
  children,
  variant = "solid",
  size = "md",
  className = "",
}: {
  children: ReactNode;
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
  /** Layout only (width, alignment). Don't pass display classes here. */
  className?: string;
}) {
  const open = useEnquiry();
  return (
    <button
      type="button"
      onClick={open}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium tracking-wide transition-colors duration-300 cursor-pointer ${buttonSizes[size]} ${buttonVariants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

// Earliest bookable date (24 hours' notice), as a local YYYY-MM-DD string.
function tomorrow() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

const fieldClass =
  "w-full min-h-12 rounded-xl border border-sponge-deep bg-white/70 px-4 py-3 text-espresso placeholder:text-cocoa-light/70 focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/20 transition";

function EnquiryDialog({
  dialogRef,
  minDate,
}: {
  dialogRef: React.RefObject<HTMLDialogElement | null>;
  minDate: string;
}) {
  const close = () => dialogRef.current?.close();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      data.get("email") && `Email: ${data.get("email")}`,
      `Occasion: ${data.get("occasion")}`,
      `Date needed: ${data.get("date")}`,
      data.get("details") && `\n${data.get("details")}`,
    ].filter(Boolean);

    const subject = `Cake enquiry: ${data.get("occasion")} on ${data.get("date")}`;
    window.location.href = `mailto:${ENQUIRY_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
    close();
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="enquiry-title"
      onClick={(e) => {
        // Clicking the backdrop (the dialog element itself) closes it.
        if (e.target === e.currentTarget) close();
      }}
      className="mx-auto mt-auto mb-0 w-full max-w-none max-h-[92dvh] overflow-y-auto overscroll-contain rounded-t-3xl bg-milk p-0 text-espresso shadow-2xl backdrop:bg-espresso/60 backdrop:backdrop-blur-sm open:animate-[sheet_0.45s_var(--ease-soft)] sm:m-auto sm:w-[min(100%-2rem,34rem)] sm:max-h-[calc(100dvh-2rem)] sm:rounded-3xl sm:open:animate-[rise_0.5s_var(--ease-soft)]"
    >
      <div className="px-5 pt-3 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:p-10">
        <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-sponge-deep sm:hidden" aria-hidden="true" />
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="enquiry-title" className="text-[2rem] sm:text-4xl">
              Order a cake
            </h2>
            <p className="mt-2 text-[0.95rem] text-cocoa sm:text-base">
              Tell us about your occasion and we&rsquo;ll reply to confirm.
              Please allow at least 24 hours&rsquo; notice.
            </p>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="-mr-2 -mt-1 grid size-11 shrink-0 place-items-center rounded-full text-cocoa hover:bg-sponge cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <path
                d="M3 3l10 10M13 3L3 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5">
          <label className="grid gap-1.5 sm:col-span-2">
            <span className="text-sm font-medium">Your name</span>
            <input name="name" required autoComplete="name" className={fieldClass} />
          </label>
          <label className="grid gap-1.5">
            <span className="text-sm font-medium">Phone</span>
            <input name="phone" type="tel" required autoComplete="tel" className={fieldClass} />
          </label>
          <label className="grid gap-1.5">
            <span className="text-sm font-medium">
              Email <span className="font-normal text-cocoa-light">(optional)</span>
            </span>
            <input name="email" type="email" autoComplete="email" className={fieldClass} />
          </label>
          <label className="grid gap-1.5">
            <span className="text-sm font-medium">Occasion</span>
            <select
              name="occasion"
              required
              defaultValue=""
              className={`${fieldClass} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1.5l5 5 5-5' stroke='%235c4a41' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")] bg-[length:12px_8px] bg-[position:right_1rem_center] bg-no-repeat pr-10`}
            >
              <option value="" disabled>
                Choose one
              </option>
              {occasions.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-1.5">
            <span className="text-sm font-medium">Date needed</span>
            <input name="date" type="date" required min={minDate} className={fieldClass} />
          </label>
          <label className="grid gap-1.5 sm:col-span-2">
            <span className="text-sm font-medium">
              What would you like?{" "}
              <span className="font-normal text-cocoa-light">(optional)</span>
            </span>
            <textarea
              name="details"
              rows={3}
              placeholder="Cake, size, number of guests, message on the plaque…"
              className={`${fieldClass} resize-none`}
            />
          </label>
          <button
            type="submit"
            className="mt-2 rounded-full bg-rose px-7 py-4 font-medium tracking-wide text-milk transition-colors hover:bg-espresso sm:col-span-2 cursor-pointer"
          >
            Send enquiry
          </button>
          <p className="-mt-2 text-center text-sm text-cocoa-light sm:col-span-2">
            This opens your email app with your details filled in.
          </p>
        </form>
      </div>
    </dialog>
  );
}
