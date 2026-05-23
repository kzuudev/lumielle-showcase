import * as React from "react"
import Hero from "@/assets/hero.jpeg"
interface LumielleHeroProps {
    /** Optional override for the product showcase image asset */
    imageSrc?: string
}

export function LumielleHero() {
    return (
        <section className="w-full bg-[#f9e2e2] overflow-hidden flex items-center min-h-[340px] md:min-h-[440px] lg:min-h-[520px] transition-all duration-300">
            <img
                src={Hero}
                alt="Lumielle makeup signature palette showcase"
                className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                loading="eager"
            />
        </section>
    )
}