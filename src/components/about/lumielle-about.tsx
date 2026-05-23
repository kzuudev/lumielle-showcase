
import { LumielleHeader } from "@/components/layout/lumielle-header"
import { LumielleFooter } from "@/components/layout/lumielle-footer"
import { Sparkles, Eye, Compass } from "lucide-react"

export default function LumielleAbout() {
    return (
        <div id="about" className="min-h-screen w-full bg-brand-pink flex flex-col scroll-smooth selection:bg-pink-200">
            <LumielleHeader />

            <main className="flex-1 w-full">
                {/* =========================================================================
            SECTION 1: THE TEMPTING HERO HOOK
           ========================================================================= */}
                <section className="w-full py-24 md:py-32 px-4 md:px-12 bg-white/20 relative overflow-hidden">
                    <div className="absolute -right-24 -top-24 size-96 bg-white/30 rounded-full blur-3xl pointer-events-none" />

                    <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
            <span className="font-sans text-xs font-semibold tracking-[0.3em] text-[#b37066] uppercase block animate-fade-in">
              The Luxury of Simplicity
            </span>
                        <h1 className="font-serif text-4xl md:text-6xl font-light text-zinc-900 tracking-wide leading-tight">
                            Beauty Unbound. <br />
                            <span className="italic font-normal text-zinc-800">Anytime, Anywhere.</span>
                        </h1>
                        <div className="w-16 h-[1px] bg-zinc-400 mx-auto mt-8" />
                    </div>
                </section>

                {/* =========================================================================
            SECTION 2: EDITORIAL NARRATIVE (Your Text Redefined)
           ========================================================================= */}
                <section className="w-full py-20 px-4 md:px-12 bg-white">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                        {/* Left Side: Tempting Statement */}
                        <div className="lg:col-span-5 space-y-4">
                            <h2 className="font-serif text-3xl font-light text-zinc-900 leading-snug tracking-wide">
                                Reimagining the daily ritual for the modern lifestyle.
                            </h2>
                            <p className="font-sans text-xs tracking-widest text-zinc-400 font-medium uppercase">
                                — Form, Function, & Creative Freedom
                            </p>
                        </div>

                        {/* Right Side: Seamless Narrative Framework */}
                        <div className="lg:col-span-7 space-y-6 text-zinc-600 font-light text-sm md:text-base leading-relaxed tracking-wide">
                            <p>
                                At Lumielle, we believe that beauty shouldn't demand a cluttered vanity table or a suitcase full of compromise. It should be simple, convenient, and effortlessly accessible—breathing grace into your busiest days.
                            </p>
                            <p>
                                Our signature creation is an absolute obsession with portable luxury: an all-in-one <span className="text-zinc-900 font-normal">Makeup Notebook</span>. By seamlessly integrating professional-grade essentials into one sleek, highly organized, and travel-ready portfolio, Lumielle transforms makeup application into a tactile poetic experience.
                            </p>
                            <p>
                                Whether you are stepping into a lecture hall, commanding a boardroom, boarding a cross-continental flight, or raising a glass at an unexpected celebration—Lumielle ensures you remain deeply radiant, meticulously prepared, and completely unapologetic in your self-expression.
                            </p>
                        </div>

                    </div>
                </section>

                {/* =========================================================================
            SECTION 3: THE BRAND CORE PILLARS
           ========================================================================= */}
                <section className="w-full py-20 px-4 md:px-12 bg-brand-pink/40 border-t border-b border-white/60">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

                            {/* Pillar 1 */}
                            <div className="flex flex-col items-center space-y-4 p-6 bg-white/30 backdrop-blur-xs border border-white/40 shadow-xs">
                                <div className="size-12 rounded-full bg-[#f2d8d8] text-[#b37066] flex items-center justify-center mb-2">
                                    <Sparkles className="size-5 stroke-[1.25]" />
                                </div>
                                <h3 className="font-serif text-xl font-normal text-zinc-900 tracking-wide">Instant Confidence</h3>
                                <p className="text-xs font-light text-zinc-600 leading-relaxed">
                                    Curated shade combinations built with micro-milled intensity to keep you feeling stunningly polished instantly.
                                </p>
                            </div>

                            {/* Pillar 2 */}
                            <div className="flex flex-col items-center space-y-4 p-6 bg-white/30 backdrop-blur-xs border border-white/40 shadow-xs">
                                <div className="size-12 rounded-full bg-[#f2d8d8] text-[#b37066] flex items-center justify-center mb-2">
                                    <Compass className="size-5 stroke-[1.25]" />
                                </div>
                                <h3 className="font-serif text-xl font-normal text-zinc-900 tracking-wide">Intelligent Geometry</h3>
                                <p className="text-xs font-light text-zinc-600 leading-relaxed">
                                    A structural marvel mimicking a luxury hardbound journal. Flat layouts protect textures while saving premium handbag space.
                                </p>
                            </div>

                            {/* Pillar 3 */}
                            <div className="flex flex-col items-center space-y-4 p-6 bg-white/30 backdrop-blur-xs border border-white/40 shadow-xs">
                                <div className="size-12 rounded-full bg-[#f2d8d8] text-[#b37066] flex items-center justify-center mb-2">
                                    <Eye className="size-5 stroke-[1.25]" />
                                </div>
                                <h3 className="font-serif text-xl font-normal text-zinc-900 tracking-wide">Ethical Radiance</h3>
                                <p className="text-xs font-light text-zinc-600 leading-relaxed">
                                    100% vegan, cruelty-free formulations fused with botanical barriers that treat your skin like fine porcelain.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* =========================================================================
            SECTION 4: CALL TO EXPERIENCE (Temptation Trigger)
           ========================================================================= */}
                <section className="w-full py-24 px-4 text-center space-y-8 bg-white">
                    <div className="max-w-xl mx-auto space-y-4">
                        <h2 className="font-serif text-3xl font-light text-zinc-900 tracking-wide">
                            Are you ready to flip the page?
                        </h2>
                        <p className="text-xs md:text-sm font-light text-zinc-500 tracking-wide leading-relaxed">
                            Ditch the chaos of bulky bags. Secure your custom-bound beauty sanctuary today and redefine how you see makeup forever.
                        </p>
                    </div>
                    <div className="pt-4">
                        <a
                            href="/shop"
                            className="inline-block px-12 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-sans text-xs font-bold tracking-[0.2em] uppercase transition-transform hover:scale-105 duration-300 rounded-none shadow-md active:scale-95"
                        >
                            Discover The Notebook Collection
                        </a>
                    </div>
                </section>
            </main>

            <LumielleFooter />
        </div>
    )
}