import Image from 'next/image';

export default function CinematicHero() {
  return (
    // Parent section keeps everything centered in the viewport
    <section className="w-full bg-champagne flex justify-center items-center py-16 lg:py-24">
      
      {/* THE 1440P ANCHOR:
        - justify-items-center ensures the inner grid stays centered in this block.
        - lg:grid-cols-10 creates a tighter grid to allow better centering of the image.
      */}
      <div className="w-full max-w-[1440px] px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-10 items-center justify-items-center">
        
        {/* 1. THE FRAMED HERO IMAGE:
          - lg:col-span-8: Occupies the bulk of the width.
          - We remove the left-alignment bias to let the grid centering handle it.
        */}
        <div className="lg:col-span-8 relative aspect-[4/3] w-full rounded-sm overflow-hidden shadow-[0_10px_40px_rgba(44,36,33,0.05)]">
          <Image
            src="/media/hero-editorial.png"
            alt="The Crazy Crumbs Kitchen Scene"
            fill
            sizes="(max-width: 1440px) 80vw, 1150px"
            className="object-cover"
            priority
          />
        </div>

          
       <div className="top-20 right-8 w-[420px] z-10 bg-[#FAF6EE]/85 backdrop-blur-md border border-gold/30 p-12 shadow-[0_20px_50px_rgba(44,36,33,0.08)] rounded-[20px] text-center">
       <div>
          
          <h1 className="font-serif text-[2.5rem] font-light leading-[1.2] text-ink mb-6">
            Artisanal <span className="italic text-blush-dark">Commissions</span>
          </h1>
          
          <div className="w-[60px] h-[1px] bg-gold/40 mx-auto mb-8" />

          <p className="font-sans text-[13px] text-ink-muted leading-relaxed mb-10">
            World-Class Tres Leches and Boutique Confections. Hand-crafted from scratch. 100% Natural.
          </p>

          <button className="bg-blush-dark text-white px-8 py-3 font-sans text-[11px] tracking-[0.2em] uppercase border border-gold/40 hover:bg-[#A85A65] transition-all duration-500">
            Explore Collection
          </button>
        </div>
        </div>

      </div>
    </section>
  );
}
