"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  image1: string;
  image2: string;
  title: string;
  price: string;
  className?: string;
}

export function ProductCard({
  image1,
  image2,
  title,
  price,
  className,
}: ProductCardProps) {
  return (
    <div
      className={cn(
        "group relative flex-shrink-0 w-[280px] md:w-[320px] cursor-pointer select-none",
        className
      )}
    >
      <div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm bg-muted mb-3">
        <Image
          src={image1}
          alt={title}
          fill
          className="object-cover object-center transition-opacity duration-500 ease-in-out group-hover:opacity-0"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <Image
          src={image2}
          alt={`${title} alternate`}
          fill
          className="absolute inset-0 object-cover object-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-1 uppercase tracking-widest">
          New
        </div>
      </div>

      <div className="space-y-1">
        <h3 className="text-xs font-bold uppercase tracking-wide text-foreground">
          {title}
        </h3>
        <p className="text-xs text-muted-foreground font-medium">{price}</p>

        <div className="flex gap-1 mt-2">
          <div className="w-3 h-3 bg-black border border-border" />
          <div className="w-3 h-3 bg-blue-900 border border-border" />
          <div className="w-3 h-3 bg-green-800 border border-border" />
        </div>
      </div>
    </div>
  );
}
