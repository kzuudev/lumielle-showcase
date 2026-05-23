import * as React from "react"
// 1. Import the routing tools from react-router-dom
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from "@/pages/home.tsx";
import Contact from "@/pages/contact.tsx";
import Shop from "@/pages/shop.tsx";
import About from "@/pages/about.tsx";
import './App.css'

/* =========================================================================
   SCROLL MANAGER COMPONENT
   This ensures pages snap smoothly to the top when switching layouts, 
   and handles sliding down seamlessly when navigating to section IDs like #contact.
   ========================================================================= */
function ScrollManager() {
    const location = useLocation()

    React.useEffect(() => {
        if (location.hash) {
            // If there is an ID hash in the URL (like #contact), find that element and scroll down to it
            const element = document.getElementById(location.hash.slice(1))
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" })
                }, 100)
            }
        } else {
            // If navigating to a brand new page layout altogether, snap completely to the top
            window.scrollTo({ top: 0, behavior: "smooth" })
        }
    }, [location])

    return null
}

function App() {
    return (
        <BrowserRouter>
            {/* Seamless view resetter engine */}
            <ScrollManager />

            {/* 2. Configure the traffic lanes for your pages */}
            <Routes>
                {/* Displays the Home landing page at the root URL (http://localhost:5173/) */}
                <Route path="/" element={<Home />} />

                {/* Displays your deeply-detailed product page layout at (http://localhost:5173/shop) */}
                <Route path="/shop" element={<Shop />} />

                {/* Displays your standalone Contact page layout at (http://localhost:5173/contact) */}
                <Route path="/contact" element={<Contact />} />

                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App