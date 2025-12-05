"use client";

import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { CollectionCard, ProductProps } from "@/components/Collections/Card";
import { Button } from "@/components/ui/button";

// --- DUMMY DATA ---
const PRODUCTS: ProductProps[] = [
    {
        id: "1",
        title: "Long hooded GORE-TEX parka with lots of pockets",
        price: 78400,
        reference: "AIW25MOU1003",
        image:
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1336&auto=format&fit=crop",
        hoverImage:
            "https://images.unsplash.com/photo-1545959734-734796245345?q=80&w=1287&auto=format&fit=crop",
        badges: [
            { type: "warm", level: 3, label: "WARM" },
            { type: "waterproof", level: 3, label: "WATERPROOF" },
        ],
        colors: [
            {
                name: "Black", hex: "#1a1a1a",
                tone: "primary"
            },
            {
                name: "Navy", hex: "#1e293b",
                tone: "primary"
            },
            {
                name: "Green", hex: "#3f4a3c",
                tone: "primary"
            },
            {
                name: "Mustard", hex: "#ca8a04",
                tone: "primary"
            },
        ],
    },
    {
        id: "2",
        title: "PARCOURS boot heavy duty use",
        price: 19000,
        reference: "PARCOURS2",
        image:
            "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?q=80&w=1490&auto=format&fit=crop",
        badges: [{ type: "waterproof", level: 3, label: "WATERPROOF" }],
        colors: [
            {
                name: "Brown", hex: "#594a3a",
                tone: "primary"
            },
            {
                name: "Green", hex: "#2f3a25",
                tone: "primary"
            },
        ],
    },
    {
        id: "3",
        title: "Long winter MTD parka with multiple pockets",
        price: 57500,
        reference: "AIW25MOU1006",
        image:
            "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1287&auto=format&fit=crop",
        hoverImage:
            "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1395&auto=format&fit=crop",
        badges: [
            { type: "warm", level: 2, label: "WARM" },
            { type: "waterproof", level: 3, label: "WATERPROOF" },
        ],
        colors: [
            {
                name: "Navy", hex: "#172554",
                tone: "primary"
            },
            {
                name: "Black", hex: "#000000",
                tone: "primary"
            },
        ],
    },
    {
        id: "4",
        title: "RAINPACK WARM SHERPA 90+: Short Padded Jacket",
        price: 36600,
        reference: "AIW25UOU1003",
        image:
            "https://images.unsplash.com/photo-1551488852-081bd4c9a543?q=80&w=1471&auto=format&fit=crop",
        badges: [
            { type: "warm", level: 3, label: "WARM" },
            { type: "waterproof", level: 3, label: "WATERPROOF" },
        ],
        colors: [
            {
                name: "Khaki", hex: "#57534e",
                tone: "primary"
            },
            {
                name: "Brown", hex: "#78350f",
                tone: "primary"
            },
            {
                name: "Beige", hex: "#d6d3d1",
                tone: "primary"
            },
        ],
    },
    // Adding more dummy items to fill the grid
    {
        id: "5",
        title: "Waterproof Hiking Boots",
        price: 24500,
        reference: "HIKE2025",
        image:
            "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?q=80&w=1364&auto=format&fit=crop",
        badges: [{ type: "waterproof", level: 3, label: "WATERPROOF" }],
        colors: [{
            name: "Tan", hex: "#a16207",
            tone: "primary"
        }],
    },
    {
        id: "6",
        title: "Quilted Down Jacket with Hood",
        price: 45200,
        reference: "DOWN25",
        image:
            "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=1287&auto=format&fit=crop",
        badges: [{ type: "warm", level: 3, label: "WARM" }],
        colors: [
            {
                name: "Red", hex: "#dc2626",
                tone: "primary"
            },
            {
                name: "Black", hex: "#000000",
                tone: "primary"
            },
        ],
    },
    {
        id: "7",
        title: "Classic Fisherman Beanie",
        price: 4500,
        reference: "HAT001",
        image:
            "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=1287&auto=format&fit=crop",
        badges: [{ type: "warm", level: 1, label: "WARM" }],
        colors: [
            {
                name: "Green", hex: "#14532d",
                tone: "primary"
            },
            {
                name: "Yellow", hex: "#eab308",
                tone: "primary"
            },
            {
                name: "Grey", hex: "#4b5563",
                tone: "primary"
            },
        ],
    },
    {
        id: "8",
        title: "Heavy Duty Work Parka",
        price: 62000,
        reference: "WORK25",
        image:
            "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=1373&auto=format&fit=crop",
        badges: [
            { type: "warm", level: 3, label: "WARM" },
            { type: "waterproof", level: 3, label: "WATERPROOF" },
        ],
        colors: [
            {
                name: "Orange", hex: "#ea580c",
                tone: "primary"
            },
            {
                name: "Black", hex: "#000000",
                tone: "primary"
            },
        ],
    },
];

const SUB_NAV_LINKS = [
    "See all",
    "Best-sellers",
    "Parkas & Jackets",
    "Ready to wear",
    "Boots",
    "Shoes",
    "Accessories",
];

export default function MenCollectionPage() {
    return (
        <div className="min-h-screen mt-10 bg-background font-sans text-foreground pb-20">
            {/* 1. Header Section */}
            <div className="container mx-auto px-4 pt-12 pb-8 text-center">
                <h1 className="text-3xl font-black uppercase tracking-tight mb-8">
                    Men's Collection
                </h1>

                {/* Sub Navigation */}
                <div className="hidden md:flex justify-center space-x-8 border-b border-border pb-4 mb-4">
                    {SUB_NAV_LINKS.map((link, idx) => (
                        <button
                            key={idx}
                            className={`text-xs uppercase tracking-widest hover:text-foreground transition-colors ${
                                idx === 0
                                    ? "text-foreground font-bold border-b-2 border-foreground -mb-[18px] pb-4"
                                    : "text-muted-foreground"
                            }`}
                        >
                            {link}
                        </button>
                    ))}
                </div>
            </div>

            {/* 2. Filter & Sort Bar */}
            <div className="sticky top-0 z-30 bg-background border-b border-border shadow-sm">
                <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
                    <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        {PRODUCTS.length} Products
                    </div>

                    <div className="flex items-center space-x-4 md:space-x-6">
                        {/* Desktop Filters */}
                        <div className="hidden md:flex items-center space-x-6">
                            <button className="flex items-center space-x-1 text-xs font-bold uppercase tracking-widest hover:opacity-70 text-muted-foreground">
                                <span>Color</span>
                                <ChevronDown size={14} />
                            </button>
                            <button className="flex items-center space-x-1 text-xs font-bold uppercase tracking-widest hover:opacity-70 text-muted-foreground">
                                <span>Size</span>
                                <ChevronDown size={14} />
                            </button>
                        </div>

                        {/* Main Action Buttons */}
                        <div className="flex items-center space-x-2">
                            <Button
                                variant="outline"
                                size="sm"
                                className="h-9 px-4 rounded-none border-border text-xs font-bold uppercase tracking-widest hover:bg-foreground hover:text-background"
                            >
                                Filters
                                <SlidersHorizontal size={14} className="ml-2" />
                            </Button>

                            <Button
                                variant="outline"
                                size="sm"
                                className="h-9 px-4 rounded-none border-border text-xs font-bold uppercase tracking-widest hover:bg-foreground hover:text-background flex items-center"
                            >
                                Sort By
                                <ChevronDown size={14} className="ml-2" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Product Grid */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                    {PRODUCTS.map((product) => (
                        <CollectionCard key={product.id} product={product} />
                    ))}
                </div>
            </div>

            {/* 4. Pagination / Load More (Visual only) */}
            <div className="flex flex-col items-center justify-center pt-12 space-y-4">
                <p className="text-xs text-muted-foreground">
                    You have seen 8 products out of 480
                </p>
                <div className="w-48 h-1 bg-border rounded-full overflow-hidden">
                    <div className="w-1/4 h-full bg-foreground"></div>
                </div>
                <div className="flex space-x-2">
                    <div className="h-2 w-2 rounded-full bg-foreground"></div>
                    <div className="h-2 w-2 rounded-full bg-muted"></div>
                    <div className="h-2 w-2 rounded-full bg-muted"></div>
                </div>
            </div>
        </div>
    );
}
