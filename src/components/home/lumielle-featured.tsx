import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import caramelLatter from "@/assets/caramel-latte.jpeg";
import mauveMist from "@/assets/mauve-mist.jpeg";
import peachGlow from "@/assets/peach-glow.jpeg";
import rosePetal from "@/assets/rose-petal.jpeg";
import smokeChic from "@/assets/smoke-chic.jpeg";
import sunkissedBeige from "@/assets/sunkissed-beige.jpeg";

// Interface defining the type structure for our premium cosmetics data
interface ProductItem {
    id: string
    name: string
    subtitle: string
    originalPrice: string
    salePrice: string
    isOnSale: boolean
    image: string
    swatches: string[] // Hex color codes for the preview circles
}

// Highly detailed mock data simulating 6 distinct Lumielle collections
const products: ProductItem[] = [
    {
        id: "prod-1",
        name: "Caramel Latte",
        subtitle: "Rich & Warm tones for a sun-kissed finish",
        originalPrice: "$450.00",
        salePrice: "$400.00",
        isOnSale: true,
        image: caramelLatter,
        swatches: ["#D4A373", "#A67C52", "#7851A9", "#4A3728"]
    },
    {
        id: "prod-2",
        name: "Mauve Mist",
        subtitle: "Cool & Elegant mauve palettes for professional styling",
        originalPrice: "$450.00",
        salePrice: "$400.00",
        isOnSale: true,
        image: mauveMist,
        swatches: ["#D9A5B3", "#B57C8A", "#8C5363", "#5C2E3B"]
    },
    {
        id: "prod-3",
        name: "Peach Glow",
        subtitle: "Fresh & Radiant peach formulations for daytime illumination",
        originalPrice: "$450.00",
        salePrice: "$400.00",
        isOnSale: true,
        image: peachGlow,
        swatches: ["#F3B19A", "#E0896C", "#C8654B", "#993E2B"]
    },
    {
        id: "prod-4",
        name: "Rose Petal",
        subtitle: "Soft romantic pinks infused with shimmering micro-crystals",
        originalPrice: "$450.00",
        salePrice: "$400.00",
        isOnSale: true,
        image: rosePetal,
        swatches: ["#F9D5D5", "#EEA4A4", "#CE6A6A", "#9E3D3D"]
    },
    {
        id: "prod-5",
        name: "Golden Honey",
        subtitle: "Amber and bronze pigments crafted for deep-dimensional depth",
        originalPrice: "$450.00",
        salePrice: "$400.00",
        isOnSale: true,
        image: smokeChic,
        swatches: ["#E5B25D", "#C28E3A", "#96661C", "#5C3D0A"]
    },
    {
        id: "prod-6",
        name: "Cocoa Cream",
        subtitle: "Velvety neutral matte shades suitable for flawless contouring",
        originalPrice: "$450.00",
        salePrice: "$400.00",
        isOnSale: true,
        image: sunkissedBeige,
        swatches: ["#CBB49E", "#9C7C5D", "#6F4E37", "#3B2314"]
    }
]

export function LumielleFeatured() {
    const [currentIndex, setCurrentIndex] = React.useState(0)

    // Track how many items to display based on dynamic breakpoints
    const [visibleCards, setVisibleCards] = React.useState(3)

    // Explicitly monitoring system screen sizes natively for standard carousel sliding calculations
    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setVisibleCards(1) // Mobile viewport focus
            } else if (window.innerWidth < 1024) {
                setVisibleCards(2) // Tablet layout balance
            } else {
                setVisibleCards(3) // High-end Desktop composition from reference image
            }
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const maxIndex = products.length - visibleCards

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1))
    }

    return (
        <section className="w-full bg-brand-pink py-16 px-4 md:px-12 selection:bg-pink-200">
            <div className="max-w-7xl mx-auto">

                {/* ==========================================
            SECTION LOGO / TYPOGRAPHY BLOCK
           ========================================== */}
                <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
                    <h2 className="font-serif text-3xl md:text-4xl font-light text-zinc-900 tracking-wide">
                        Featured Collection
                    </h2>
                    <p className="text-xs md:text-sm font-light text-zinc-600 leading-relaxed tracking-wide">
                        Meet the Palette Collection: Get ready for an easy, beautiful look with our new makeup palette. It features gorgeous shades that look great on everyone and work perfectly for both your face and eyes.
                    </p>
                </div>

                {/* ==========================================
            SLIDER CONTROLLER HOUSING
           ========================================== */}
                <div className="relative group">

                    {/* Viewport Window Container */}
                    <div className="w-full overflow-hidden rounded-xs">
                        <div
                            className="flex transition-transform duration-500 ease-out will-change-transform"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`
                            }}
                        >
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="w-full shrink-0 px-2 sm:px-3 md:px-4"
                                    style={{ width: `${100 / visibleCards}%` }}
                                >
                                    {/* Cosmetic Product Grid Card Container */}
                                    <div className="bg-white/40 backdrop-blur-md rounded-xs border border-white/40 overflow-hidden flex flex-col h-full p-4 hover:shadow-md transition-shadow duration-300">

                                        {/* Visual Media Engine Container */}
                                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100 rounded-2xs">
                                            {product.isOnSale && (
                                                <div className="absolute top-3 left-3 bg-zinc-950 text-white font-sans font-medium tracking-widest text-[9px] px-2.5 py-1 uppercase z-20 shadow-xs">
                                                    SALE!
                                                </div>
                                            )}
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                                                loading="lazy"
                                            />
                                        </div>

                                        {/* Metadata Content Mapping */}
                                        <div className="flex flex-col items-center text-center mt-5 flex-1 space-y-2">
                                            <h4 className="font-serif text-xl font-normal text-zinc-900 tracking-wide">
                                                {product.name}
                                            </h4>
                                            <p className="text-[11px] font-light text-zinc-500 max-w-[240px] leading-normal h-8 overflow-hidden">
                                                {product.subtitle}
                                            </p>

                                            {/* Render Dynamic Color Swatches matching your composition */}
                                            <div className="flex items-center gap-1.5 pt-1">
                                                {product.swatches.map((color, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="size-3.5 rounded-full border border-black/10 shadow-inner block transition-transform hover:scale-110"
                                                        style={{ backgroundColor: color }}
                                                        title={`Shade swatch preview ${idx + 1}`}
                                                    />
                                                ))}
                                            </div>

                                            {/* Pricing block featuring clear original vs discount layout mappings */}
                                            <div className="flex items-center gap-3 pt-2 text-sm">
                        <span className="text-zinc-400 line-through font-light">
                          {product.originalPrice}
                        </span>
                                                <span className="text-zinc-900 font-semibold tracking-wide">
                          {product.salePrice}
                        </span>
                                            </div>

                                            {/* Absolute Request Violet Add To Cart Implementation */}
                                            <div className="w-full pt-4 mt-auto">
                                                <button
                                                    className="w-full py-2.5 bg-[#DC84C3] hover:bg-[#c972b0] active:bg-[#b5619e] text-white font-sans text-xs font-bold tracking-widest uppercase transition-colors duration-200 rounded-none shadow-xs cursor-pointer"
                                                >
                                                    ADD TO CART
                                                </button>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ==========================================
              PREMIUM DESKTOP CONTROL TRIGGERS
             ========================================== */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 size-11 bg-white hover:bg-zinc-50 border border-zinc-100 rounded-full flex items-center justify-center text-zinc-700 hover:text-black shadow-md transition-all z-30 cursor-pointer active:scale-95 opacity-0 group-hover:opacity-100 hidden sm:flex"
                        aria-label="Previous Products"
                    >
                        <ChevronLeft className="size-5 stroke-[1.5]" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 size-11 bg-white hover:bg-zinc-50 border border-zinc-100 rounded-full flex items-center justify-center text-zinc-700 hover:text-black shadow-md transition-all z-30 cursor-pointer active:scale-95 opacity-0 group-hover:opacity-100 hidden sm:flex"
                        aria-label="Next Products"
                    >
                        <ChevronRight className="size-5 stroke-[1.5]" />
                    </button>

                    {/* ==========================================
              MOBILE PAGINATION TRACKER DOTS
             ========================================== */}
                    <div className="flex justify-center items-center gap-2 mt-8 sm:hidden">
                        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`transition-all duration-300 rounded-full ${
                                    currentIndex === idx ? "w-6 h-1.5 bg-[#DC84C3]" : "size-1.5 bg-zinc-300"
                                }`}
                                aria-label={`Go to slide column split index ${idx + 1}`}
                            />
                        ))}
                    </div>

                </div>

            </div>
        </section>
    )
}