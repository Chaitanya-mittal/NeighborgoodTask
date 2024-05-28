import gsap from "gsap";
import { useRef, useLayoutEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useDarkContext } from "../../context/UseDarkProvider";
import CustomButton from "../CustomButton/CustomButton";

function ConnectSection({
  title,
  img,
  swapTitle,
  titleGradient,
  link,
  children,
  id,
}) {
  const btnRel = useRef(null);
  const headref = useRef(null);
  const sectionRef = useRef(null);
  const imgsrc = "./" + img;

  const { darkMode } = useDarkContext();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".highlight").forEach((ele) => {
      ScrollTrigger.create({
        trigger: ele,
        start: "top-=100px center",
        scrub: true,
        toggleClass: "highlightAni",
      });
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: true,
          start: "top center",
          end: "30% center",
        },
      })

      .fromTo(headref.current, { opacity: 0 }, { opacity: 1 })
      .fromTo(btnRel.current, { opacity: 0 }, { opacity: 1 });
  });

  return (
    <section ref={sectionRef} id={id} className="py-24" data-scroll>
      <div
        className={`${darkMode ? "dnoiseBg" : "noiseBg"} flex flex-col items-center gap-16 overflow-hidden px-4 py-10 text-[rgb(86,36,4)] shadow-lg dark:text-[#f8f9f5] dark:shadow-black lg:flex-row lg:gap-8 xl:gap-32`}
      >
        <div
          className={`${swapTitle ? "order-2" : "order-1"} w-full  px-4 sm:max-w-lg lg:max-w-md`}
        >
          <img
            src={imgsrc}
            alt="img6"
            className="mx-auto w-full rounded-xl   "
          />
        </div>
        <div
          className={` lg:basis-2/3 xl:basis-auto ${swapTitle ? "order-1" : "order-2"}`}
        >
          {swapTitle !== true ? (
            <h2
              className="inline-block   text-2xl font-semibold sm:text-4xl"
              ref={headref}
            >
              {title}
              <span className="textGradient1">{titleGradient}</span>
            </h2>
          ) : (
            <h2
              className="inline-block   text-2xl font-semibold sm:text-4xl"
              ref={headref}
            >
              <span className="textGradient1">{titleGradient} </span> {title}
            </h2>
          )}

          <ul className="soraText mt-8 flex flex-col gap-4 text-sm font-[400] sm:text-base ">
            {children}
          </ul>
          {link && (
            <CustomButton
              btnRel={btnRel}
              position="left"
              name="Get Started"
              link={link}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default ConnectSection;
