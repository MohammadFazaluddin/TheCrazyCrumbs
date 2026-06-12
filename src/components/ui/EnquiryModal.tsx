"use client";
import { useState } from 'react';

export default function EnquiryModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Background Dimmer */}
      <div className="absolute inset-0 bg-ink/30 backdrop-blur-[2px]" onClick={onClose} />
      
      {/* The Glass Window */}
      <div className="relative w-full max-w-md bg-[#FAF6EE]/95 backdrop-blur-xl border border-gold/30 p-10 shadow-[0_20px_50px_rgba(44,36,33,0.15)] rounded-[20px]">
        <button onClick={onClose} className="absolute top-6 right-6 text-ink/50 hover:text-ink">✕</button>
        
        <h2 className="font-serif text-2xl text-ink mb-2">Concierge Enquiry</h2>
        <p className="font-sans text-[11px] uppercase tracking-[0.1em] text-gold mb-8">Please detail your request below</p>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-gold/30 py-2 focus:outline-none focus:border-gold placeholder:text-ink/40" required />
          <input type="tel" placeholder="Phone Number" className="w-full bg-transparent border-b border-gold/30 py-2 focus:outline-none focus:border-gold placeholder:text-ink/40" required />
          <input type="email" placeholder="Email Address (Optional)" className="w-full bg-transparent border-b border-gold/30 py-2 focus:outline-none focus:border-gold placeholder:text-ink/40" />

          <button type="submit" className="w-full mt-6 bg-blush-dark text-white py-3.5 font-sans text-[11px] tracking-[0.2em] uppercase border border-gold/40 hover:bg-[#A85A65] transition-all">
            Send Request 
          </button>
        </form>
      </div>
    </div>
  );
}
