import { useLocation } from "react-router-dom";
import HomeNavbar from "../HomeNavbar/HomeNavbar";
import { IoMdSunny } from "react-icons/io";
import { useDarkContext } from "../../context/UseDarkProvider";
import { Link } from "react-router-dom";
import { IoMdMoon } from "react-icons/io";

function Navbar({ nav }) {
  const { darkMode, toggleDarkMode } = useDarkContext();
  const location = useLocation();
  const page = location.pathname;

  return (
    <header
      ref={nav}
      className="fixed left-0 top-0 z-10  flex h-16 w-full border-b  bg-[#fff] backdrop-blur-lg dark:border-black dark:bg-[#202020] dark:text-white"
    >
      <div className="mx-auto flex h-16 w-full max-w-[1536px] items-center justify-between overflow-hidden px-4 sm:px-[40px]">
        <a href="/" className="ms-[-20px]">
          <img src="./logo.png" alt="logo" className="w-[192px] sm:w-[240px]" />
        </a>
        {page === "/" && <HomeNavbar />} {page === "/login" && <LoginNavbar />}
        {page !== "/" && page !== "/login" && (
          <div className="text-2xl text-yellow-400" onClick={toggleDarkMode}>
            <IoMdSunny />
          </div>
        )}
      </div>
    </header>
  );
}

function LoginNavbar() {
  const { darkMode, toggleDarkMode } = useDarkContext();
  return (
    <ul className="redditText flex items-center gap-4 text-sm font-[400] tracking-wider  ">
      <li>
        <Link to="/" className="block  px-1  leading-4">
          Home
        </Link>
      </li>
      <li>
        <Link to="/signup" className="block  px-1  leading-4">
          Register
        </Link>
      </li>
      <li>
        {!darkMode ? (
          <p className="text-2xl " onClick={toggleDarkMode}>
            <IoMdMoon />
          </p>
        ) : (
          <p className="text-2xl text-yellow-400" onClick={toggleDarkMode}>
            <IoMdSunny />
          </p>
        )}
      </li>
    </ul>
  );
}

export default Navbar;
