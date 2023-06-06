// import React from 'react'

// const SlideFromRight = () => {
//   return (
//     <div>SlideFromRight</div>
//   )
// }

// export default SlideFromRight
"use client";
import React, { useEffect, useRef, ReactNode } from "react";

interface Props {
  offset?: string;
  children?: ReactNode;
}

export default function SlideFromRight({ children, offset = "0px" }: Props) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("animate-slideFromRight");
          }
        });
      },
      { rootMargin: offset }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // return () => {
    //   if (ref.current) {
    //     observer.unobserve(ref.current);
    //   }
    // };
  }, [offset, ref]);

  return (
    <div ref={ref} className="relative opacity-0">
      {children}
    </div>
  );
}
