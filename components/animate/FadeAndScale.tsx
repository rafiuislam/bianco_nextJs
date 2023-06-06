"use client";
import React, { useEffect, useRef, ReactNode } from "react";

interface Props {
  offset?: string;
  children?: ReactNode;
}

export default function FadeAndScale({ children, offset = "0px" }: Props) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("animate-fadeAndScale");
          }
        });
      },
      { rootMargin: offset }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [offset]);

  return (
    <div ref={ref} className="relative opacity-0">
      {children}
    </div>
  );
}
