import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" flex w-full flex-col items-center justify-between gap-4  px-5 py-8 sm:flex-row sm:gap-0">
      <div className="soraText dark:text-grey text-[15px] text-stone-500 dark:font-bold">
        <p>Copyright © 2024 NeighborGood ®</p>
      </div>
      <div>
        <ul className="flex gap-4">
          <li className="rounded-full bg-[#ffb000] p-3 transition-all duration-300 hover:bg-[#ff5200]">
            <a href="">
              <FaFacebookF />
            </a>
          </li>
          <li className="rounded-full bg-[#ffb000] p-3 transition-all duration-300 hover:bg-[#ff5200]">
            <a href="">
              <FaXTwitter />
            </a>
          </li>
          <li className="rounded-full bg-[#ffb000] p-3 transition-all duration-300 hover:bg-[#ff5200]">
            <a href="">
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
