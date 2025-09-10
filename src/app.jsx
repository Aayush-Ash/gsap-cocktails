import gsap from "gsap";
import{ ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/navbar.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText)

import React from 'react'

const App = () => {
    return (
        <main className="App">
            <Navbar/>
        </main>
    )
}
export default App