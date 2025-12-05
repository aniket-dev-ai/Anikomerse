"use client";

import Link from "next/link";
import { TiltCard } from "@/components/Homepage/TiltCard/tilt-card";

export function PuffySection() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* LEFT COLUMN: Large Vertical Image */}
        <div className="w-full h-[500px] lg:h-[700px]">
          <TiltCard
            image1="https://images.unsplash.com/photo-1548123378-bde4eca81d43?q=80&w=1470&auto=format&fit=crop"
            image2="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1470&auto=format&fit=crop"
            alt="Puffy Winter Jacket Person"
            className="w-full h-full"
          />
        </div>

        {/* RIGHT COLUMN: Mixed Grid */}
        <div className="flex flex-col h-full justify-between space-y-8">
          {/* Top Row: Two Smaller Tilt Cards */}
          <div className="grid grid-cols-2 gap-4 h-[300px] md:h-[350px]">
            {/* Purple Set Card */}
            <TiltCard
              image1="https://images.unsplash.com/photo-1575383503468-b7c4d5193910?q=80&w=1288&auto=format&fit=crop"
              image2="https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=1335&auto=format&fit=crop"
              alt="Purple Winter Accessories"
              className="w-full h-full"
            />

            {/* Red Bag Card */}
            <TiltCard
              image1="https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1335&auto=format&fit=crop"
              image2="https://images.unsplash.com/photo-1559563458-52c69529d1c9?q=80&w=1287&auto=format&fit=crop"
              alt="Red Quilted Bag"
              className="w-full h-full"
            />
          </div>

          {/* Bottom Row: Text Content */}
          <div className="flex flex-col justify-center items-start pt-4 lg:pt-8 lg:pl-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-2">
              Puffy Christmas
            </h2>
            <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-6">
              Capsule Collection
            </span>

            <p className="text-sm md:text-base text-gray-600 max-w-md mb-8 leading-relaxed">
              Celebrate Christmas with our collection of quilted accessories and
              cable knitwear in colors inspired by the Northern Lights.
            </p>

            <Link
              href="#"
              className="text-xs font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:opacity-70 transition-opacity"
            >
              Discover
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
