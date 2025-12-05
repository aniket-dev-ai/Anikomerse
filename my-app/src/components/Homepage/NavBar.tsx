"use client";

import Link from "next/link";
import { Search, User, ShoppingBag } from "lucide-react";
import { ModeToggle } from "../theme-button";

export function Navbar() {
  const navLinks = [
    { name: "GIFTSHOP", href: "/men" },
    { name: "MEN", href: "/men" },
    { name: "WOMEN", href: "/men" },
    { name: "CHILDREN", href: "/men" },
    { name: "BOOTS", href: "/men" },
    { name: "SHOES", href: "/men" },
    { name: "ACCESSORIES", href: "/men" },
    { name: "DOG", href: "/men" },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 text-secondary-foreground bg-transparent">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter uppercase"
        >
          AIGLE <span className="text-xs font-normal align-top ml-1">1853</span>
        </Link>
      </div>

      {/* Center Links (Hidden on small screens, visible on desktop) */}
      <div className="hidden lg:flex items-center space-x-6 text-xs font-bold tracking-wide">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="hover:underline underline-offset-4 decoration-2"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Right Icons */}
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2 cursor-pointer hover:opacity-80">
          <Search size={18} />
          <span className="hidden md:inline text-xs font-bold">SEARCH</span>
        </div>

        <Link href="#" className="hover:opacity-80">
          <User size={20} />
        </Link>

        <ModeToggle />

        <Link href="#" className="relative hover:opacity-80">
          <ShoppingBag size={20} />
          {/* Cart Count Badge */}
          <span className="absolute -top-1 -right-2 text-[10px] font-bold">
            1
          </span>
        </Link>
      </div>
    </nav>
  );
}
