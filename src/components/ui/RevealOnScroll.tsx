"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right";
  delay?: number;
  threshold?: number;
}

export default function RevealOnScroll({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  threshold = 0.15,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const current = ref.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [threshold]);

  const animationMap = {
    "fade-up": "animate-fade-up",
    "fade-in": "animate-fade-in",
    "slide-left": "animate-slide-left",
    "slide-right": "animate-slide-right",
  };

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animationMap[animation] : "opacity-0"}`}
      style={{ animationDelay: isVisible ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}
