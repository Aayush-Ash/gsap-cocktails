import React from 'react'
import gsap from "gsap";
import{ ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import Cocktails from "./components/public/Cocktails.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText)
const App = () => {
    return (
        <main>
            <Navbar/>
            <Hero/>
            <Cocktails />

        </main>
    )
}
export default App