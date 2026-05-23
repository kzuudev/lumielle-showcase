
import {LumielleHeader} from "@/components/layout/lumielle-header.tsx";
import {LumielleFooter} from "@/components/layout/lumielle-footer.tsx";
export default function LumielleContact() {

    return (
        <>
            <div id="contact" className="min-h-screen w-full bg-brand-pink flex flex-col scroll-smooth selection:bg-pink-200">
                <LumielleHeader/>
                <main>
                    <section id="contact" className="w-full py-20 px-4 md:px-12 scroll-mt-24">
                        <div className="max-w-xl mx-auto bg-white/40 backdrop-blur-md border border-white/50 p-8 md:p-12 shadow-xs">

                            <div className="text-center space-y-2 mb-8">
                                <h2 className="font-serif text-3xl font-light text-zinc-900 tracking-wide">
                                    Contact Us
                                </h2>
                                <p className="text-xs font-light text-zinc-600 tracking-wide">
                                    Have inquiries about your order or custom notebook setups? Drop us a line.
                                </p>
                            </div>

                            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                                <div className="grid grid-cols-1 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full p-3 bg-white border border-zinc-200/60 font-light text-xs tracking-wide focus:outline-zinc-400 placeholder-zinc-400"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full p-3 bg-white border border-zinc-200/60 font-light text-xs tracking-wide focus:outline-zinc-400 placeholder-zinc-400"
                                    />
                                    <textarea
                                        rows={4}
                                        placeholder="Message..."
                                        className="w-full p-3 bg-white border border-zinc-200/60 font-light text-xs tracking-wide focus:outline-zinc-400 placeholder-zinc-400 resize-none"
                                    />
                                </div>

                                <button className="w-full py-3 bg-zinc-900 hover:bg-zinc-800 text-white font-sans text-xs font-bold tracking-widest uppercase transition-colors duration-200 cursor-pointer">
                                    Send Message
                                </button>
                            </form>

                        </div>
                    </section>
                </main>
                <LumielleFooter/>
            </div>
        </>
    )
}