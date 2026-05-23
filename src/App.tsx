import { useState } from 'react'
import { LumielleHeader } from "@/components/lumielle-header.tsx"
import { LumielleHero } from "@/components/lumielle-hero.tsx"
import { LumielleFeatured } from "@/components/lumielle-featured.tsx"
import { LumielleShowcaseBanner } from "@/components/lumielle-showcase-banner.tsx"
import { LumielleFooter } from "@/components/lumielle-footer.tsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen w-full bg-zinc-50/50">
        {/* Mounted Lumielle Header */}
        <LumielleHeader />

        {/* Content wrapper for upcoming sections */}
        <main className="w-full mx-auto flex-1">
            <LumielleHero />
            <LumielleFeatured />

            <LumielleShowcaseBanner />
        </main>

          <LumielleFooter />
      </div>
    </>
  )
}

export default App
