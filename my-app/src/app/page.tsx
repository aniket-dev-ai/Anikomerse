import { HeroSection } from "@/components/Homepage/First";
import { Footer } from "@/components/Homepage/footer";
import { CategoryGrid } from "@/components/Homepage/forth";
import { Navbar } from "@/components/Homepage/NavBar";
import { ProductSlider } from "@/components/Homepage/ProductSlider/Slider";
import { PuffySection } from "@/components/Homepage/third";

 

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <ProductSlider />
      <PuffySection />
      <CategoryGrid />
      <Footer />
    </main>
  );
}
