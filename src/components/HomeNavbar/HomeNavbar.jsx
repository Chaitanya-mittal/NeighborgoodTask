import { IoMdSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";
import gsap from "gsap";
import { useEffect } from "react";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useDarkContext } from "../../context/UseDarkProvider";
function HomeNavbar() {
  const { darkMode, toggleDarkMode } = useDarkContext();

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
    const links = document.querySelectorAll('a[href^="#"]');

    const handleClick = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      gsap.to(window, { duration: 1, scrollTo: targetElement });
    };

    links.forEach((anchor) => {
      anchor.addEventListener("click", handleClick);
    });
    return () => {
      links.forEach((anchor) => {
        anchor.removeEventListener("click", handleClick);
      });
    };
  }, []);
  return (
    <ul className="redditText flex items-center gap-4 text-sm font-[400] tracking-wider  ">
      <li>
        <NavItem title="Services" link="#service" />
      </li>
      <li>
        <NavItem title="Info" link="#info" />
      </li>
      <li>
        <NavItem title="About us" link="#aboutus" />
      </li>
      <li>
        <NavItem title="Postcards" link="#postcards" />
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

function NavItem({ link, title }) {
  return (
    <a href={link} className="block  px-1  leading-4">
      {title}
    </a>
  );
}

export default HomeNavbar;
