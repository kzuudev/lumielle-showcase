"use client";

import {LumielleHeader} from "@/components/layout/lumielle-header.tsx";
import {LumielleFooter} from "@/components/layout/lumielle-footer.tsx";
import {LumielleShopGrid} from "@/components/shop/lumielle-shop-grid.tsx";

export default function Shop() {

    return (
        <>
            <div id="shop" className="min-h-screen w-full flex flex-col bg-brand-pink">
                <LumielleHeader />

                <main className="flex-1">
                    <LumielleShopGrid />
                </main>

                <LumielleFooter />
            </div>
        </>
    )
}