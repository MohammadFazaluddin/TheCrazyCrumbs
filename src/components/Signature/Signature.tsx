import Image from 'next/image';

export default function SignatureMasterpiece() {
  return (
    <section className="w-full bg-champagne py-24 px-6 md:px-12 flex justify-center items-center">
      {/* 
        THE CO-FOUNDER'S CANVAS: 
        Centering container that locks at 1440px. As the screen expands past 1440px 
        (or when zooming out), this block stays perfectly centered on the screen.
      */}
      <div className="w-full max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* 
          LEFT COLUMN: Asymmetrical Editorial Frame (55% Width)
          - object-left: Forces the image focus to align tightly to the left when scaling/zooming.
        */}
        <div className="lg:col-span-7 relative w-full aspect-[4/2] overflow-hidden border border-gold/30 bg-champagne-deep shadow-[0_20px_50px_rgba(44,36,33,0.04)]">
          <Image
            src="/images/tres-leches-signature-bg.png"
            alt="The World-Class Tres Leches Signature Masterpiece"
            fill
            sizes="(max-width: 1440px) 65vw, 892px"
            className="object-cover object-left transition-transform duration-1000 ease-out "
            priority
          />
          {/* Subtle Image Overlay for Natural Cinematic Warmth */}
        </div>

        {/* RIGHT COLUMN: The Visual Concierge Card (45% Width) */}
        <div className="lg:col-span-5 lg:-ml-16 z-10 bg-[#FAF6EE]/90 backdrop-blur-md border border-gold/20 p-8 md:p-14 shadow-[0_30px_60px_rgba(44,36,33,0.06)]">
          <span className="font-sans text-xs tracking-[0.25em] text-gold uppercase block mb-4">
            The Signature Masterpiece
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-[0.02em] leading-[1.2] text-ink mb-6">
            World-Class <span className="italic text-blush-dark">Tres Leches</span>
          </h2>
          
          {/* Menu Concierge Integration: Pre-empting Flavor Fatigue */}
          <div className="space-y-4 my-6 font-sans text-sm text-ink-muted">
            <p className="leading-relaxed">
              An uncompromising execution of structural moisture. Developed by our Master Chef, this recipe balances a delicate crumb structure with our signature three-milk reduction.
            </p>
            <div className="pt-4 space-y-2 border-t border-gold/10 text-xs tracking-wide">
              <div><strong className="text-ink font-medium">Texture:</strong> Silken, ultra-hydrated, yet structurally cohesive.</div>
              <div><strong className="text-ink font-medium">Profile:</strong> Clean dairy sweetness, zero preservatives, zero palm oil.</div>
            </div>
          </div>

          <div className="border-t border-gold/20 pt-6 mt-8">
            <span className="font-sans text-[11px] text-ink-light tracking-widest uppercase block">
              Private Commissions Only • 24-Hour Notice Required
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
