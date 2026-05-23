
import { Search, User, ShoppingBag, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet.tsx"
import lumielleIcon from "@/assets/lumielle-icon.jpg"
import { Link } from "react-router-dom";

// Centralized navigation config for easy maintenance
const navItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
]

export function LumielleHeader() {
    return (
        <header className="w-full bg-white px-4 md:px-12 py-6 border-b border-zinc-100 font-sans selection:bg-pink-100">
            <div className="max-w-7xl mx-auto flex items-center justify-between relative">

                {/* ==========================================
            LEFT SIDE: Navigation / Mobile Menu
           ========================================== */}
                {/* Desktop Navigation (Hidden on mobile) */}
                <nav className="hidden md:flex items-center gap-8 text-[14px] font-light tracking-wide text-zinc-600">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="hover:text-black transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-black after:transition-all"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* Mobile Hamburger Menu (Hidden on desktop) */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <button className="p-2 text-zinc-700 hover:text-black transition-colors cursor-pointer" aria-label="Open Menu">
                                <Menu className="size-6 stroke-[1.5]" />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px] bg-white border-r border-zinc-100">
                            <SheetHeader className="text-left pb-6 border-b border-zinc-100">
                                <SheetTitle className="font-serif text-2xl tracking-wide uppercase">Lumielle</SheetTitle>
                            </SheetHeader>
                            <nav className="flex flex-col mt-6 text-base tracking-wide gap-4">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className="hover:text-black transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-black after:transition-all"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* ==========================================
            CENTER SIDE: Luxury Branding
           ========================================== */}
                <div className="flex flex-col items-center text-center select-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0">
                    {/* Primary Brand Name */}
                    <h1 className="font-serif text-2xl md:text-3xl font-normal tracking-widest text-zinc-900 uppercase">
                        <img
                            src={lumielleIcon}
                            alt="Lumielle Crest"
                            className="w-50 h-full object-contain"
                        />
                    </h1>
                    {/* Tagline */}
                    <p className="text-[9px] md:text-xs font-light tracking-[0.25em] text-zinc-400 uppercase mt-0.5">
                        Beauty in Every Shade
                    </p>
                </div>

                {/* ==========================================
            RIGHT SIDE: Functional Action Utilities
           ========================================== */}
                <div className="flex items-center gap-0.5 md:gap-2">
                    {/* Search Button */}
                    <button className="p-2 text-zinc-700 hover:text-black transition-colors cursor-pointer" aria-label="Search">
                        <Search className="size-5 md:size-[22px] stroke-[1.2]" />
                    </button>

                    {/* Profile Button */}
                    <button className="p-2 text-zinc-700 hover:text-black transition-colors cursor-pointer" aria-label="Account">
                        <User className="size-5 md:size-[22px] stroke-[1.2]" />
                    </button>

                    {/* Cart Button with Custom Red Notification Badge */}
                    <button className="p-2 text-zinc-700 hover:text-black transition-colors relative cursor-pointer" aria-label="Cart">
                        <ShoppingBag className="size-5 md:size-[22px] stroke-[1.2]" />
                        <span className="absolute top-1 right-1 size-4 md:size-[17px] bg-[#E17A7A] text-white font-sans text-[9px] md:text-[10px] font-medium rounded-full flex items-center justify-center shadow-xs">
              2
            </span>
                    </button>
                </div>

            </div>
        </header>
    )
}