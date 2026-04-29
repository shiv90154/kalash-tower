// components/BackToTop.jsx
"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function BackToTop() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip first render if you don't want scroll on initial load
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Use requestAnimationFrame for smoother animation
    const scrollToTop = () => {
      const currentPosition = window.scrollY;
      if (currentPosition > 0) {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    };

    // Wait for next frame to ensure content is rendered
    requestAnimationFrame(() => {
      setTimeout(scrollToTop, 50);
    });
  }, [pathname]);

  return null;
}