"use client";

import Image from "next/image";
import Link from "next/link";
import { Snowflake, Droplets } from "lucide-react";

export type ProductColorTone =
    | "primary"
    | "secondary"
    | "destructive"
    | "muted"
    | "accent"
    | "foreground"
    | "success"
    | "warning";

export interface ProductColor {
    [x: string]: any;
    name: string;
    hex: string;
    tone: ProductColorTone;
}

export interface ProductBadge {
    type: "warm" | "waterproof";
    level: 1 | 2 | 3;
    label: string;
}

export interface ProductProps {
    id: string;
    title: string;
    price: number;
    originalPrice?: number;
    image: string;
    hoverImage?: string;
    badges?: ProductBadge[];
    colors: ProductColor[];
    reference: string;
    isNew?: boolean;
}

const toneClasses: Record<ProductColorTone, string> = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    destructive: "bg-destructive",
    muted: "bg-muted",
    accent: "bg-accent",
    foreground: "bg-foreground",
    success: "bg-success",
    warning: "bg-warning",
};

export function CollectionCard({ product }: { product: ProductProps }) {
    return (
        <div className="group flex flex-col space-y-3 cursor-pointer">
            <div className="relative aspect-3/4 w-full overflow-hidden bg-muted/40">
                <Link href={`/product/${product.id}`}>
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover object-center transition-opacity duration-500 group-hover:opacity-0"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    {product.hoverImage && (
                        <Image
                            src={product.hoverImage}
                            alt={product.title}
                            fill
                            className="absolute inset-0 object-cover object-center opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                    )}
                </Link>

                {product.isNew && (
                    <span className="absolute top-2 left-2 rounded-full bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground">
                        New
                    </span>
                )}
            </div>

            {product.badges && product.badges.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {product.badges.map((badge, idx) => (
                        <div
                            key={idx}
                            className="flex items-center space-x-1 rounded-full border border-border/70 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground"
                        >
                            <span>{badge.label}</span>
                            <div className="flex space-x-1">
                                {[1, 2, 3].map((i) => {
                                    const Icon = badge.type === "warm" ? Snowflake : Droplets;
                                    return (
                                        <Icon
                                            key={i}
                                            size={10}
                                            className={`${
                                                i <= badge.level
                                                    ? "text-foreground"
                                                    : "text-foreground/40"
                                            }`}
                                            strokeWidth={2.5}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="space-y-1">
                <h3 className="text-sm font-medium leading-tight text-foreground line-clamp-2 min-h-10">
                    <Link href={`/product/${product.id}`}>{product.title}</Link>
                </h3>

                <div className="flex items-baseline space-x-2 text-sm text-foreground">
                    <span className="font-bold">
                        {product.price.toLocaleString("en-IN", {
                            style: "currency",
                            currency: "INR",
                            minimumFractionDigits: 2,
                        })}
                    </span>
                    {product.originalPrice && (
                        <span className="text-xs text-foreground/60 line-through">
                            {product.originalPrice.toLocaleString("en-IN", {
                                style: "currency",
                                currency: "INR",
                                minimumFractionDigits: 2,
                            })}
                        </span>
                    )}
                    <span className="text-[10px] uppercase text-foreground">
                        - {product.reference}
                    </span>
                </div>

                <div className="flex items-center space-x-1 pt-1">
                    {product.colors.slice(0, 4).map((color, idx) => (
                        <span
                            key={idx}
                            className={`h-3 w-3 rounded-full border border-border/40${
                                toneClasses[color.tone] ?? "bg-border"
                            }`}
                            title={color.name}
                        />
                    ))}
                    {product.colors.length > 4 && (
                        <span className="text-[10px] text-foreground/60 pl-1">
                            +{product.colors.length - 4}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
