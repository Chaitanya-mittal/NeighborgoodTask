import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import gsap from "gsap";

function ServiceCard({
  img,
  title,
  content,
  toggleBtn,
  handleClick,
  darkMode,
}) {
  const imgsrc = "./" + img + ".webp";

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <div className="m-[5px] flex-1 ">
      <div
        className={` mx-auto grow rounded-3xl  transition-all  ${toggleBtn ? "gradientBg scale-100 " : darkMode ? "darkcard scale-90  text-white" : "lightcard scale-90 bg-[#FFFAFA] text-black"} dark:darkcard p-6 shadow-md duration-300`}
      >
        <img
          src={imgsrc}
          alt="servicecard"
          className="aspect-square w-full rounded-2xl object-cover object-center shadow-xl "
        ></img>
        <div className="mt-4 flex">
          <div>
            <h3
              className={`soraText flex-1 text-center   ${toggleBtn ? "text-base font-black" : "text-sm font-semibold"} `}
            >
              {title}
            </h3>
            {toggleBtn && (
              <p
                className={`outfitText mt-2 text-center  ${toggleBtn ? "text-base text-white" : "text-sm"} `}
              >
                {content}
              </p>
            )}
          </div>

          <div className="flex flex-col justify-end ps-2">
            <button
              className="size-8 rounded-full bg-[#ffb000] text-lg font-[300] text-black"
              name={img}
              onClick={handleClick}
            >
              {toggleBtn ? "↗" : "↙"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
