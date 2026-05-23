import * as React from "react"
import { Check } from "lucide-react"

// Use your exact image imports
import caramelLatter from "@/assets/caramel-latte.jpeg"
import mauveMist from "@/assets/mauve-mist.jpeg"
import peachGlow from "@/assets/peach-glow.jpeg"
import rosePetal from "@/assets/rose-petal.jpeg"
import smokeChic from "@/assets/smoke-chic.jpeg"
import sunkissedBeige from "@/assets/sunkissed-beige.jpeg"

// Expanded interface for the dedicated shop page
interface DetailedProductItem {
    id: string
    name: string
    subtitle: string
    description: string
    benefits: string[]
    originalPrice: string
    salePrice: string
    isOnSale: boolean
    image: string
    swatches: { hex: string; name: string }[]
}

// Enriched mock data tailored for deep-dive reading
const detailedProducts: DetailedProductItem[] = [
    {
        id: "prod-1",
        name: "Caramel Latte",
        subtitle: "Rich & Warm tones for a sun-kissed finish",
        description: "Embrace the golden hour all day long. This palette combines buttery mattes with intensely foiled warm shimmers, designed to blend effortlessly into a seamless, sun-kissed gradient.",
        benefits: ["Crease-proof 12-hour wear", "Infused with hydrating squalane", "Vegan & Cruelty-free"],
        originalPrice: "$450.00",
        salePrice: "$400.00",
        isOnSale: true,
        image: caramelLatter,
        swatches: [
            { hex: "#D4A373", name: "Oat" }, { hex: "#A67C52", name: "Mocha" },
            { hex: "#7851A9", name: "Plum" }, { hex: "#4A3728", name: "Espresso" }
        ]
    },
    {
        id: "prod-2",
        name: "Mauve Mist",
        subtitle: "Cool & Elegant mauve palettes for professional styling",
        description: "A sophisticated symphony of cool-toned mauves, dusty roses, and deep berries. Perfect for transitioning from a subtle daytime professional look to a dramatic evening smokey eye.",
        benefits: ["Micro-milled for ultra-smooth application", "Zero fallout formula", "Dermatologist tested"],
        originalPrice: "$450.00",
        salePrice: "$400.00",
        isOnSale: true,
        image: mauveMist,
        swatches: [
            { hex: "#D9A5B3", name: "Blush" }, { hex: "#B57C8A", name: "Dusty" },
            { hex: "#8C5363", name: "Berry" }, { hex: "#5C2E3B", name: "Wine" }
        ]
    },
    {
        id: "prod-3",
        name: "Peach Glow",
        subtitle: "Fresh & Radiant peach formulations for daytime illumination",
        description: "Instantly awaken your complexion with universally flattering peach and coral hues. Formulated with light-reflecting pearls to give your skin a naturally radiant, lit-from-within glow.",
        benefits: ["Buildable, sheer-to-opaque coverage", "Contains Vitamin E", "Paraben-free"],
        originalPrice: "$450.00",
        salePrice: "$400.00",
        isOnSale: true,
        image: peachGlow,
        swatches: [
            { hex: "#F3B19A", name: "Apricot" }, { hex: "#E0896C", name: "Coral" },
            { hex: "#C8654B", name: "Terracotta" }, { hex: "#993E2B", name: "Brick" }
        ]
    },
    // Re-mapped the final three using the provided imports and matching aesthetics
    {
        id: "prod-4",
        name: "Rose Petal",
        subtitle: "Soft romantic pinks infused with shimmering micro-crystals",
        description: "Channel pure romance with delicate petal pinks and illuminating champagne toppers. The micro-crystal infusion ensures high-impact shine without gritty texture.",
        benefits: ["High-impact crystal shimmers", "Buttery soft mattes", "Safe for sensitive eyes"],
        originalPrice: "$450.00",
        salePrice: "$400.00",
        isOnSale: true,
        image: rosePetal,
        swatches: [
            { hex: "#F9D5D5", name: "Petal" }, { hex: "#EEA4A4", name: "Bloom" },
            { hex: "#CE6A6A", name: "Rose" }, { hex: "#9E3D3D", name: "Thorn" }
        ]
    },
    {
        id: "prod-5",
        name: "Smoke Chic",
        subtitle: "Amber and bronze pigments crafted for deep-dimensional depth",
        description: "The ultimate arsenal for a modern smokey eye. Combining rich ambers, deep bronzes, and an ultra-black carbon matte, this palette delivers intense pigmentation in a single swipe.",
        benefits: ["One-swipe full opacity", "Water-resistant wear", "Carbon-black intensity"],
        originalPrice: "$450.00",
        salePrice: "$400.00",
        isOnSale: true,
        image: smokeChic,
        swatches: [
            { hex: "#E5B25D", name: "Gold" }, { hex: "#C28E3A", name: "Bronze" },
            { hex: "#96661C", name: "Amber" }, { hex: "#5C3D0A", name: "Obsidian" }
        ]
    },
    {
        id: "prod-6",
        name: "Sunkissed Beige",
        subtitle: "Velvety neutral matte shades suitable for flawless contouring",
        description: "Your holy grail for everyday sculpting and defining. A masterclass in neutrals, featuring the perfect balance of warm and cool undertones to mimic natural shadows perfectly.",
        benefits: ["True-to-pan color payoff", "Multi-use (Eyes & Face contour)", "Talc-free formulation"],
        originalPrice: "$450.00",
        salePrice: "$400.00",
        isOnSale: true,
        image: sunkissedBeige,
        swatches: [
            { hex: "#CBB49E", name: "Sand" }, { hex: "#9C7C5D", name: "Taupe" },
            { hex: "#6F4E37", name: "Chestnut" }, { hex: "#3B2314", name: "Cocoa" }
        ]
    }
]

export function LumielleShopGrid() {
    return (
        <section className="w-full bg-brand-pink py-20 px-4 md:px-12 selection:bg-pink-200">
            <div className="max-w-6xl mx-auto space-y-24">

                {/* Shop Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <h1 className="font-serif text-4xl md:text-5xl font-light text-zinc-900 tracking-wide">
                        The Complete Collection
                    </h1>
                    <p className="text-sm font-light text-zinc-600 leading-relaxed tracking-wide">
                        Explore our meticulously crafted palettes. Every shade is designed to empower your daily routine with uncompromising quality and luxurious wearability.
                    </p>
                </div>

                {/* Detailed Product List */}
                <div className="space-y-24 md:space-y-32">
                    {detailedProducts.map((product, index) => {
                        // Alternate layout: Even index = Image Left, Odd index = Image Right
                        const isImageRight = index % 2 !== 0

                        return (
                            <div key={product.id} className={`flex flex-col ${isImageRight ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 lg:gap-16 items-center`}>

                                {/* 1. Large Image Canvas */}
                                <div className="w-full lg:w-1/2 relative group">
                                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-100 rounded-sm shadow-sm">
                                        {product.isOnSale && (
                                            <div className="absolute top-4 left-4 bg-zinc-950 text-white font-sans font-medium tracking-widest text-[10px] px-3 py-1.5 uppercase z-20 shadow-md">
                                                SALE!
                                            </div>
                                        )}
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover object-center transform transition-transform duration-1000 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>

                                {/* 2. Deep Dive Details Container */}
                                <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">

                                    {/* Headers */}
                                    <div className="space-y-2">
                                        <h2 className="font-serif text-3xl md:text-4xl font-normal text-zinc-900 tracking-wide">
                                            {product.name}
                                        </h2>
                                        <p className="text-sm font-medium tracking-widest text-[#b37066] uppercase">
                                            {product.subtitle}
                                        </p>
                                    </div>

                                    {/* Pricing */}
                                    <div className="flex items-center gap-4 text-lg">
                    <span className="text-zinc-400 line-through font-light">
                      {product.originalPrice}
                    </span>
                                        <span className="text-zinc-900 font-semibold tracking-wide text-xl">
                      {product.salePrice}
                    </span>
                                    </div>

                                    {/* Long Form Description */}
                                    <p className="text-sm md:text-base font-light text-zinc-600 leading-relaxed tracking-wide">
                                        {product.description}
                                    </p>

                                    {/* Bulleted Benefits List */}
                                    <ul className="space-y-2 py-2">
                                        {product.benefits.map((benefit, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-xs md:text-sm font-light text-zinc-700 tracking-wide">
                        <span className="flex items-center justify-center size-4 rounded-full bg-[#f2d8d8] text-[#b37066]">
                          <Check className="size-2.5 stroke-[3]" />
                        </span>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Swatches with Tooltips/Names */}
                                    <div className="space-y-3 pt-2">
                                        <p className="text-xs font-semibold tracking-widest text-zinc-900 uppercase">Available Shades</p>
                                        <div className="flex items-center gap-3">
                                            {product.swatches.map((color, idx) => (
                                                <div key={idx} className="flex flex-col items-center gap-1.5 group/swatch cursor-pointer">
                          <span
                              className="size-6 rounded-full border border-black/10 shadow-inner block transition-transform group-hover/swatch:scale-110"
                              style={{ backgroundColor: color.hex }}
                          />
                                                    <span className="text-[9px] font-light tracking-wider text-zinc-400 uppercase opacity-0 group-hover/swatch:opacity-100 transition-opacity">
                            {color.name}
                          </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Call to Action */}
                                    <div className="pt-6 w-full max-w-sm">
                                        <button
                                            className="w-full py-4 bg-[#DC84C3] hover:bg-[#c972b0] active:bg-[#b5619e] text-white font-sans text-xs font-bold tracking-widest uppercase transition-colors duration-200 rounded-none shadow-md cursor-pointer"
                                        >
                                            ADD TO CART
                                        </button>
                                    </div>

                                </div>

                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}