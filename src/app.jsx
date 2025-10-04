import gsap from "gsap";
import{ ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText)

import React from 'react'

const App = () => {
    return (
        <main className="App">
            <Navbar/>
            <Hero/>
        </main>
    )
}
export default App