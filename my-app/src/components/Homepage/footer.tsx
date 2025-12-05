"use client";

import Link from "next/link";
import {
    Truck,
    RotateCcw,
    ShieldCheck,
    Facebook,
    Instagram,
    Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function Footer() {
    return (
      <footer className="w-full font-sans">
        {/* 1. Service Bar (Background) */}
        <div className="w-full bg-background py-12 border-t">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center space-y-3">
              <Truck className="h-8 w-8 text-foreground" strokeWidth={1.5} />
              <div>
                <h4 className="font-black uppercase tracking-wide text-sm">
                  Great Shipping Rates
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  For all international deliveries
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <RotateCcw
                className="h-8 w-8 text-foreground"
                strokeWidth={1.5}
              />
              <div>
                <h4 className="font-black uppercase tracking-wide text-sm">
                  Returns within 60 days
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  At your own expense
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <ShieldCheck
                className="h-8 w-8 text-foreground"
                strokeWidth={1.5}
              />
              <div>
                <h4 className="font-black uppercase tracking-wide text-sm">
                  100% Secure Payment
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  by credit card or PayPal
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Main Footer Content */}
        <div className="bg-[#404237] text-secondary-foreground pt-16 pb-8">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-4">
                    Help & Information
                  </h3>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    {[
                      "Contact us",
                      "My account",
                      "Follow my order",
                      "Make a return",
                      "Help & FAQ",
                      "Press",
                    ].map((item) => (
                      <li key={item}>
                        <Link
                          href="#"
                          className="hover:text-foreground transition-colors"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-4">
                    Terms & Conditions
                  </h3>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    {[
                      "*Offer terms and conditions",
                      "Legal information",
                      "Terms and conditions of sale",
                      "Secure payment",
                    ].map((item) => (
                      <li key={item}>
                        <Link
                          href="#"
                          className="hover:text-foreground transition-colors"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-4">
                    The Brand : A Purpose-Driven Company
                  </h3>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    {[
                      "Legacy",
                      "Know-how",
                      "Commitments",
                      "Sustainable development",
                    ].map((item) => (
                      <li key={item}>
                        <Link
                          href="#"
                          className="hover:text-foreground transition-colors"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-4">
                    Products
                  </h3>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    {[
                      "Size guide",
                      "Professional boots guide",
                      "Choosing the right boots",
                    ].map((item) => (
                      <li key={item}>
                        <Link
                          href="#"
                          className="hover:text-foreground transition-colors"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest mb-4">
                  Collection
                </h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  {[
                    "Women parkas",
                    "Men parkas",
                    "Kids parkas",
                    "Windproof raincoats",
                    "Women boots",
                    "Men boots",
                    "Kids boots",
                    "Women fleeces",
                    "Men fleeces",
                  ].map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="hover:text-foreground transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-4">
                    We Accept
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Visa", "MC", "PayPal", "ApplePay", "Klarna", "Amex"].map(
                      (pay) => (
                        <div
                          key={pay}
                          className="h-6 px-2 bg-muted border border-border rounded-sm flex items-center justify-center text-[10px] font-medium text-muted-foreground"
                        >
                          {pay}
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-4">
                    Stay Connected
                  </h3>
                  <div className="flex flex-col space-y-2">
                    <Input
                      type="email"
                      placeholder="Your email"
                      className="bg-background text-foreground border-input h-10 rounded-sm focus-visible:ring-0 placeholder:text-muted-foreground"
                    />
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/80 h-10 rounded-sm font-bold uppercase text-xs tracking-widest">
                      Sign Up
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4 text-muted-foreground">
                    {[Twitter, Facebook, Instagram].map((Icon, index) => (
                      <Link
                        key={index}
                        href="#"
                        className="hover:text-foreground transition-colors"
                      >
                        <Icon size={20} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-end justify-between border-b border-border pb-4 mb-4">
              <div className="text-[15vw] md:text-[8rem] leading-none font-black tracking-tighter select-none opacity-95">
                AIGLE{" "}
                <span className="text-lg md:text-3xl align-top font-normal tracking-normal ml-2">
                  1853
                </span>
              </div>

              <div className="text-xs md:text-sm mb-4 md:mb-8 text-muted-foreground">
                Purpose-driven company since 2020
              </div>
            </div>

            <div className="flex justify-between items-center text-[10px] md:text-xs font-medium text-muted-foreground uppercase tracking-wider">
              <div className="flex items-center space-x-2">
                <span className="flex items-center gap-1">
                  <span className="block w-4 h-3 bg-muted border border-border rounded-sm" />
                  INR | EN
                </span>
              </div>
              <div>© 2025 Aigle</div>
            </div>
          </div>
        </div>
      </footer>
    );
}
