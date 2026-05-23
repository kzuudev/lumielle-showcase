import * as React from "react"

export function LumielleFooter() {
    return (
        <footer className="w-full bg-brand-pink/60 pt-16 pb-8 px-4 md:px-12 border-t border-white/60 selection:bg-pink-200">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6">

                {/* =========================================================================
            LEFT COLUMN: Brand Identity & Custom Showcase Caption
           ========================================================================= */}
                <div className="col-span-1 md:col-span-6 lg:col-span-5 space-y-4">
                    <h2 className="font-serif text-2xl tracking-widest text-zinc-900 uppercase">
                        Lumielle
                    </h2>
                    <p className="text-sm font-light text-zinc-600 leading-relaxed max-w-sm">
                        Elevating your daily beauty ritual. Our signature all-in-one makeup notebook is carefully curated to give you everything you need to look your best, anytime, anywhere.
                    </p>
                </div>

                {/* =========================================================================
            MIDDLE COLUMN: Refined Quick Links
           ========================================================================= */}
                <div className="col-span-1 md:col-span-3 lg:col-span-4 lg:justify-self-center space-y-5">
                    <h3 className="font-sans text-sm font-semibold tracking-widest uppercase text-zinc-900">
                        Quick Links
                    </h3>
                    <nav className="flex flex-col space-y-3 text-sm font-light text-zinc-600 tracking-wide">
                        <a href="#" className="hover:text-black transition-colors w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-black after:transition-all">
                            Home
                        </a>
                        <a href="#shop" className="hover:text-black transition-colors w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-black after:transition-all">
                            Shop Collection
                        </a>
                        <a href="#" className="hover:text-black transition-colors w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-black after:transition-all">
                            Contact Us
                        </a>
                        <a href="#" className="hover:text-black transition-colors w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-black after:transition-all">
                            My Account
                        </a>
                    </nav>
                </div>

                {/* =========================================================================
            RIGHT COLUMN: Essential Legal/Shipping Information
           ========================================================================= */}
                <div className="col-span-1 md:col-span-3 lg:col-span-3 lg:justify-self-end space-y-5">
                    <h3 className="font-sans text-sm font-semibold tracking-widest uppercase text-zinc-900">
                        About
                    </h3>
                    <nav className="flex flex-col space-y-3 text-sm font-light text-zinc-600 tracking-wide">
                        <a href="#" className="hover:text-black transition-colors w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-black after:transition-all">
                            Shipping Details
                        </a>
                        <a href="#" className="hover:text-black transition-colors w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-black after:transition-all">
                            Terms & Conditions
                        </a>
                        <a href="#" className="hover:text-black transition-colors w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-black after:transition-all">
                            Privacy Policy
                        </a>
                    </nav>
                </div>

            </div>

            {/* =========================================================================
          BOTTOM BAR: Copyright & Final Polish
         ========================================================================= */}
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-zinc-200/50 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs font-light text-zinc-500 tracking-wide">
                    &copy; {new Date().getFullYear()} Lumielle Cosmetics. All rights reserved.
                </p>
            </div>
        </footer>
    )
}