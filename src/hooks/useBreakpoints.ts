'use client'
import { useState, useEffect } from "react";

interface Breakpoints {
  isSm: boolean;
  isMd: boolean;
  isLg: boolean;
  isXl: boolean;
  is2xl: boolean;
}

export function useBreakpoints(): Breakpoints {
  const [breakpoints, setBreakpoints] = useState<Breakpoints>({
    isSm: false,
    isMd: false,
    isLg: false,
    isXl: false,
    is2xl: false,
  });

  useEffect(() => {
    function update() {
      const width = window.innerWidth;
      setBreakpoints({
        isSm: width < 640,
        isMd: width < 768,
        isLg: width < 1024,
        isXl: width < 1280,
        is2xl: width >= 1280,
      });
    }

    update();

    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return breakpoints;
}
