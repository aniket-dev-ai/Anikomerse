"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import styles from "./tilt-card.module.css";

interface TiltCardProps {
  image1: string;
  image2: string; // The image to show on hover
  alt: string;
  className?: string; // For sizing the container
}

export function TiltCard({ image1, image2, alt, className }: TiltCardProps) {
  return (
    <div className={cn(styles.container, "noselect", className)}>
      <div className={styles.canvas}>
        {/* Generate the 25 trackers programmatically */}
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className={cn(styles.tracker, styles[`tr-${i + 1}`])}
          ></div>
        ))}

        {/* The Card being Rotated */}
        <div className={styles.card}>
          {/* Primary Image (Visible by default) */}
          <Image
            src={image1}
            alt={alt}
            fill
            className={styles.primaryImg}
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Secondary Image (Visible on Hover) */}
          <Image
            src={image2}
            alt={`${alt} hover`}
            fill
            className={styles.secondaryImg}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
}
