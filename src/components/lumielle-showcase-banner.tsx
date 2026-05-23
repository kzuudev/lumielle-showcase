import * as React from "react"
import LumielleBanner from "@/assets/lumielle-showcase-banner.jpeg" // Reusing your existing high-quality asset

export function LumielleShowcaseBanner() {
    return (
        <section className="w-full bg-brand-pink py-16 px-4 md:px-12 selection:bg-pink-200">
            <div className="max-w-5xl mx-auto flex flex-col items-center gap-12">

                {/* =========================================================================
            THE HUGE INFOGRAPHIC IMAGE WRAPPER
           ========================================================================= */}
                <div className="w-full overflow-hidden shadow-md bg-white">
                    <img
                        src={LumielleBanner}
                        alt="Lumielle Makeup Notebook Product Details and Inspiration"
                        className="w-full h-auto object-contain"
                        loading="lazy"
                    />
                </div>

                {/* =========================================================================
            THE CALL TO ACTION BUTTON
           ========================================================================= */}
                <a
                    href="#shop"
                    className="px-14 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-sans text-sm font-bold tracking-[0.2em] uppercase transition-transform hover:scale-105 duration-300 rounded-none shadow-md active:scale-95 text-center cursor-pointer"
                >
                    Shop Now
                </a>

            </div>
        </section>
    )
}