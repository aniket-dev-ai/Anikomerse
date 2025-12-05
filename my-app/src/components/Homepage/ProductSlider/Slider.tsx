"use client";

import { useRef, useState, useEffect, MouseEvent } from "react";
import { ProductCard } from "@/components/Homepage/ProductSlider/Card";

const PRODUCTS = [
  {
    id: 1,
    title: "Mid-Length Parka MTD",
    price: "49,700.00₹",
    img1: "https://images.unsplash.com/photo-1590233357551-265f689a51ea?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img2: "https://images.unsplash.com/photo-1614007667569-e64ffec64d7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 2,
    title: "Long Hooded Gore-Tex Parka",
    price: "78,400.00₹",
    img1: "/images/product2-a.jpg",
    img2: "/images/product2-b.jpg",
  },
  {
    id: 3,
    title: "Rainpack Warm Sherpa",
    price: "35,500.00₹",
    img1: "/images/product3-a.jpg",
    img2: "/images/product3-b.jpg",
  },
  {
    id: 4,
    title: "Ultra-Light Walking Shoe",
    price: "12,900.00₹",
    img1: "/images/product4-a.jpg",
    img2: "/images/product4-b.jpg",
  },
  {
    id: 5,
    title: "Waterproof Hiking Boots",
    price: "18,200.00₹",
    img1: "/images/product1-a.jpg",
    img2: "/images/product1-b.jpg",
  },
];

export function ProductSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      if (isDown) return;

      slider.scrollLeft += 100;

      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
        slider.scrollLeft = 0;
      }
    }, 1300);

    return () => clearInterval(interval);
  }, [isDown]);

  const handleMouseDown = (e: MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDown(true);
    sliderRef.current.classList.add("cursor-grabbing");
    sliderRef.current.classList.remove("cursor-grab");
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    if (sliderRef.current) {
      sliderRef.current.classList.remove("cursor-grabbing");
      sliderRef.current.classList.add("cursor-grab");
    }
  };

  const handleMouseUp = () => {
    setIsDown(false);
    if (sliderRef.current) {
      sliderRef.current.classList.remove("cursor-grabbing");
      sliderRef.current.classList.add("cursor-grab");
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="w-full py-10 bg-background text-foreground">
      <div className="px-8 mb-6">
        <h2 className="text-2xl font-black uppercase tracking-tighter">
          New Arrivals
        </h2>
      </div>

      <div
        ref={sliderRef}
        className="flex overflow-x-auto cursor-grab px-0 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ scrollBehavior: isDown ? "auto" : "smooth" }}
      >
        {[...PRODUCTS, ...PRODUCTS, ...PRODUCTS].map((product, index) => (
          <ProductCard
            key={`${product.id}-${index}`}
            // Mobile: 100% width (1 card). Desktop (md): 20% width (5 cards).
            className="!w-full !min-w-full md:!w-[20%] md:!min-w-[20%]"
            title={product.title}
            price={product.price}
            image1={product.img1}
            image2={product.img2}
          />
        ))}
      </div>
    </div>
  );
}
