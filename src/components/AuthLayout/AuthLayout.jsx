import { useDarkContext } from "../../context/UseDarkProvider";
import animationData from "../../asset/signup.json";
import { Link } from "react-router-dom";
import Svg from "../svgs/Svg";
function AuthLayout({ children, img, maxw, name }) {
  const { darkMode } = useDarkContext();
  const imgsrc = "./" + img;
  return (
    <section
      className={`  flex w-full items-center justify-center dark:bg-transparent ${name === "signup" ? "" : "min-h-screen  py-24 "} `}
    >
      <div
        className={` ${darkMode ? "dnoiseBg" : "gradientBg"}  flex h-fit  rounded-lg p-4 shadow-xl`}
      >
        <div
          className={`flex w-full flex-col  justify-between rounded-lg  max-w-[${maxw}] ${darkMode ? "bg-[rgba(255,255,255,0.4)] backdrop-blur-md" : "bg-white"} p-4 shadow-md shadow-[rgb(0,0,0,0.1)]`}
        >
          {children}
          <Link
            to="/forgot-password"
            className="soraText mt-4 text-center font-semibold text-blue-700 dark:text-[#202020]"
          >
            Forget Password!
          </Link>
        </div>
        <div className="hidden w-full max-w-lg  items-center  md:flex">
          {img ? (
            <img src={imgsrc} alt="img9" className=" w-full object-cover  " />
          ) : (
            <Svg animationData={animationData} />
          )}
        </div>
      </div>
    </section>
  );
}

export default AuthLayout;
