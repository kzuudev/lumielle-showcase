import {LumielleHeader} from "@/components/layout/lumielle-header.tsx";
import {LumielleHero} from "@/components/home/lumielle-hero.tsx";
import {LumielleFeatured} from "@/components/home/lumielle-featured.tsx";
import {LumielleShowcaseBanner} from "@/components/home/lumielle-showcase-banner.tsx";
import {LumielleFooter} from "@/components/layout/lumielle-footer.tsx";

export default function Home() {
    return (
        /* The scroll-smooth class makes sure all anchor link jumps are soft and luxurious */
        <div className="min-h-screen w-full bg-brand-pink flex flex-col scroll-smooth">

            {/* 1. Target anchoring layout for the "Home" link */}
            <div id="home" />
            <LumielleHeader />

            <main className="w-full flex-1">

                {/* 2. Hero Section */}
                <LumielleHero />

                {/* 3. Target anchoring layout for the "Shop" link */}
                <div id="shop" className="scroll-mt-24">
                    <LumielleFeatured />
                </div>

                {/* 4. Large Informational Infographic Banner */}
                <LumielleShowcaseBanner />

                {/* =========================================================================
            5. TARGET ANCHORING LAYOUT FOR THE "CONTACT US" LINK
           ========================================================================= */}
            </main>

            {/* 6. Footer Module */}
            <LumielleFooter />

        </div>
    )
}