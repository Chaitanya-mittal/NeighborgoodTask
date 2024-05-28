import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import CustomButton from "../CustomButton/CustomButton";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function Intro({ img, title, content, btn, id, link }) {
  const imgsrc = "./" + img;
  const imageRel = useRef(null);
  const headRel = useRef(null);
  const paraRel = useRef(null);
  const btnRel = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const t1 = gsap.timeline();
    const Fromani = { y: 30, opacity: 0 };
    const Toani = { y: 0, opacity: 1, duration: 0.5 };
    t1.fromTo(
      imageRel.current,
      {
        opacity: 0,
        scale: 1.5,
      },
      { opacity: 1, scale: 1, duration: 0.5 },
    )
      .fromTo(headRel.current, Fromani, Toani)
      .fromTo(paraRel.current, Fromani, Toani)
      .fromTo(btnRel.current, Fromani, Toani);
  }, []);
  return (
    <section id={id}>
      <div className={`flex w-full flex-col items-center gap-2  py-12  `}>
        <div className="flex max-w-2xl justify-center 2xl:max-w-3xl ">
          <img
            ref={imageRel}
            src={imgsrc}
            alt={img}
            className="mx-auto w-full"
            data-scroll
          />
        </div>
        <div>
          <h2 ref={headRel} className=" my-4  text-center ">
            <span className="textGradient1 poppinsText  text-4xl font-bold  sm:text-5xl  lg:text-5xl">
              {title}
            </span>
          </h2>
          <p
            ref={paraRel}
            className="soraText  mx-auto w-full text-center  text-base font-[300] leading-6 text-[rgb(86,36,4)] dark:text-white sm:w-[70%]"
          >
            {content}
          </p>
          <CustomButton
            btnRel={btnRel}
            position="center"
            name={btn}
            link={link}
          />
        </div>
      </div>
    </section>
  );
}

export default Intro;
