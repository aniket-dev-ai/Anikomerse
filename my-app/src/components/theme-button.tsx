"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [isAnimating, setIsAnimating] = React.useState(false);

  const isDark = resolvedTheme === "dark";

  const handleToggle = React.useCallback(() => {
    if (isAnimating) return; // ignore spam clicks while animating

    setIsAnimating(true);
    setTheme(isDark ? "light" : "dark");
  }, [isAnimating, isDark, setTheme]);

  // Stop animation after 0.8s
  React.useEffect(() => {
    if (!isAnimating) return;

    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 700);

    return () => clearTimeout(timer);
  }, [isAnimating]);

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleToggle}
      className=""
      aria-label="Toggle theme"
      disabled={isAnimating} // prevents double toggle during spin
    >
      {/* Sun icon (light mode) */}
      <Sun
        className={[
          "h-[1.2rem] w-[1.2rem] transition-transform duration-300",
          isDark
            ? "rotate-0 scale-0 opacity-0"
            : "rotate-180 scale-100 opacity-100",
          // Spin only when going *to* light mode and animating
          !isDark && isAnimating ? "animate-spin" : "",
        ].join(" ")}
      />

      {/* Moon icon (dark mode) */}
      <Moon
        className={[
          "absolute h-[1.2rem] w-[1.2rem] transition-transform duration-300",
          isDark
            ? "rotate-0 scale-100 opacity-100"
            : "rotate-180 scale-0 opacity-0",
          // Spin only when going *to* dark mode and animating
          isDark && isAnimating ? "animate-spin" : "",
        ].join(" ")}
      />
    </Button>
  );
}
