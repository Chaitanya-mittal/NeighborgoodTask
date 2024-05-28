import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function ConnectListItem({ children }) {
  const paraRef = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: paraRef.current,
          scrub: true,
          start: "top-=300px center",
          end: "top-=200px center",
        },
      })
      .fromTo(paraRef.current, { opacity: 0 }, { opacity: 1 }, 0.5);
  }, []);
  return <li ref={paraRef}>{children}</li>;
}

export default ConnectListItem;
