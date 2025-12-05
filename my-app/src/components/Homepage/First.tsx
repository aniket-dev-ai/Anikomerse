import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <video
          src="/Luxury_Indian_Dress_Showcase_Video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-65 object-center"
        />
        {/* <div className="absolute inset-0 bg-black/10" /> */}
      </div>

      <div className="absolute bottom-16 left-8 md:bottom-20 md:left-12 z-40 text-foreground max-w-lg">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-3 uppercase">
          The Gift Guide
        </h1>
        <p className="text-xs md:text-sm font-medium tracking-wide mb-6 uppercase opacity-90">
          When the cold whispers, warmth becomes a gift
        </p>

        <Link
          href="#"
          className="text-xs font-bold border-b border-b-foreground pb-1 hover:opacity-80 transition-opacity uppercase tracking-widest"
        >
          Explore
        </Link>
      </div>
    </section>
  );
}
