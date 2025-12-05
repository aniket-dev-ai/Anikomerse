"use client";

import Image from "next/image";
import Link from "next/link";

const CATEGORIES = [
  {
    id: "men",
    title: "Women",
    subtitle: "Warm Parkas",
    href: "#",
    // Dark Blue/Winter vibe to match the left side of your reference
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1470&auto=format&fit=crop",
    overlayColor: "bg-blue-900/20",
  },
  {
    id: "shoes",
    title: "Shoes",
    subtitle: "Fur-Lined Boots",
    href: "#",
    // Red Boots to match the center of your reference
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1374&auto=format&fit=crop",
    overlayColor: "bg-red-900/10",
  },
  {
    id: "women",
    title: "Men",
    subtitle: "Scarves & Hats",
    href: "#",
    // Red/Blue lighting vibe
    image:
      "https://images.unsplash.com/photo-1520591799316-6b30425429aa?q=80&w=1376&auto=format&fit=crop",
    overlayColor: "bg-blue-900/20",
  },
];

export function CategoryGrid() {
  return (
    <section className="w-full h-auto md:h-[99vh] grid grid-cols-1 md:grid-cols-3">
      {CATEGORIES.map((category) => (
        <Link
          key={category.id}
          href={category.href}
          className="group relative w-full h-screen md:h-full overflow-hidden block"
        >
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={category.image}
              alt={category.title}
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
            {/* Color Overlay for Mood (Optional, mimics the reference lighting) */}
            <div
              className={`absolute inset-0 ${category.overlayColor} mix-blend-multiply opacity-60 transition-opacity duration-500 group-hover:opacity-40`}
            />

            {/* Dark Gradient at bottom for text readability */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/60 to-transparent" />
          </div>

          {/* Text Content */}
          <div className="absolute inset-x-0 bottom-16 flex flex-col items-center justify-end text-white z-20 text-center px-4">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-2 drop-shadow-md">
              {category.title}
            </h2>
            <p className="text-sm font-medium tracking-widest uppercase opacity-90 mb-6 drop-shadow-sm">
              {category.subtitle}
            </p>

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-white pb-1 hover:opacity-80 transition-opacity">
              Shop Now
            </span>
          </div>
        </Link>
      ))}
    </section>
  );
}
