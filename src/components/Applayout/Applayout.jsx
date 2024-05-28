import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Applayout() {
  const scrollRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  useLayoutEffect(() => {
    const showAnim = gsap
      .from(navRef.current, {
        yPercent: -100,
        paused: true,
        duration: 0.2,
      })
      .progress(1);
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });
  }, []);
  return (
    <>
      <section
        ref={scrollRef}
        className="relative  mx-auto w-screen  px-4  sm:px-[40px]"
        data-scroll-container
      >
        <div className="navbar relative max-w-[1536px]">
          <Navbar nav={navRef} />
        </div>

        <Outlet />
      </section>
      <Footer />
    </>
  );
}

export default Applayout;
