import { FaEnvelope } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import { Link } from "react-router-dom";
function GetStarted() {
  return (
    <AuthLayout img="img9.webp" maxw="350px">
      <h2 className="soraText mb-6 text-center text-4xl font-semibold">
        Welcome!
      </h2>
      <p className=" outfitText text-center text-base font-[300] leading-6 dark:text-[#202020]">
        Where Your Interests Lead to Connection
      </p>
      <div className="redditText mb-5 mt-8 flex flex-col gap-4 pb-5">
        <Link
          to="/login"
          className="flex h-10 items-center justify-center gap-2 rounded-md border bg-blue-600  font-[300] text-white dark:border-0"
        >
          <FaEnvelope />
          <span className="text-sm">Login</span>
        </Link>
        <Link
          to="/signup"
          className="flex h-10 items-center justify-center gap-2 rounded-md border bg-green-600 font-[300]  text-white dark:border-0"
        >
          <FaEnvelope />
          <span className="text-sm">Sign Up</span>
        </Link>
        <hr className=" border border-slate-500 dark:border-slate-900 " />
        <button className="flex h-10 items-center rounded-md border border-stone-300 bg-white px-4 text-lg  dark:border-0">
          <FcGoogle />
          <span className="mx-auto text-sm">Sign in with Google</span>
        </button>
      </div>
    </AuthLayout>
  );
}

export default GetStarted;
