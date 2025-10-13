import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {
  const scrollRef = useRef(null);

  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollRef.current.children);

    boxes.forEach((box) => {
      gsap.to(box, {
        x: 300,
        rotation: 360,
        borderRadius: "100%",
        scale: 1.5,
        scrollTrigger: {
          trigger: box,       // each box triggers its own animation
          start: "top 80%",   // when top of box hits 80% viewport
          end: "top 30%",     // when top reaches 30% viewport
          scrub: true,        // smooth scrubbing effect
          markers: true       // enable markers for debugging
        }
      });
    });
  }, []);

  return (
    <main>
      <h1>GsapScrollTrigger</h1>

      <p className="mt-5 text-gray-500">
        Scroll down to see the animation triggered by GSAP ScrollTrigger.
      </p>

      <div className="w-full h-[70vh] flex justify-center items-center flex-col">
        <p className="text-center text-gray-500">
          Scroll down to see the animation
        </p>

        <svg
          className="animate-bounce mt-5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="blue"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="M5 12l7 7 7-7" />
        </svg>
      </div>

      <div className="mt-20 w-full h-screen flex flex-col gap-10 items-center" ref={scrollRef}>
        <div className="scroll-box w-20 h-20 rounded-lg bg-pink-500" />
        <div className="scroll-box w-20 h-20 rounded-lg bg-orange-500" />
        <div className="scroll-box w-20 h-20 rounded-lg bg-green-500" />
      </div>
    </main>
  );
};

export default GsapScrollTrigger;