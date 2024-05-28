import { useDarkContext } from "../../context/UseDarkProvider";
import SignUpSvg from "../SignUpSvg/SignUpSvg";

function AuthLayout({ children, img, maxw, name }) {
  const { darkMode } = useDarkContext();
  const imgsrc = "./" + img;
  return (
    <section
      className={`flex  w-full items-center justify-center dark:bg-transparent ${name === "signup" ? "" : "min-h-screen  py-24 "} `}
    >
      <div
        className={` ${darkMode ? "dnoiseBg" : "gradientBg"}  flex h-fit  rounded-lg p-4 shadow-xl`}
      >
        <div
          className={`flex w-full flex-col  justify-between rounded-lg  max-w-[${maxw}] ${darkMode ? "darkcard" : "bg-white"} p-4 shadow-md shadow-[rgb(0,0,0,0.2)]`}
        >
          {children}
          <p className="soraText mt-4 text-center font-semibold text-blue-700 dark:text-[#202020]">
            Forget Password!
          </p>
        </div>
        <div className="hidden w-full max-w-md  items-center  md:flex">
          {img ? (
            <img src={imgsrc} alt="img9" className=" w-full object-cover  " />
          ) : (
            <SignUpSvg />
          )}
        </div>
      </div>
    </section>
  );
}

export default AuthLayout;
