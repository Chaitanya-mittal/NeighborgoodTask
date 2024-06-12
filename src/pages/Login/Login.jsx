import { useForm } from "react-hook-form";
import Error from "../../components/Error/Error";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { TbEyeClosed } from "react-icons/tb";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import toast from "react-hot-toast";
import { useAuthContext } from "../../context/UseAuthProvider";
import BackBtn from "../../components/BackBtn/BackBtn";
function Login() {
  const { createUser } = useAuthContext();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const [showPass, setShowPass] = useState("");

  const onSubmit = (data) => {
    console.log(data);
    createUser({ ...data, isAuthenticated: true });
    toast.success("Login successfull");
  };
  return (
    <AuthLayout img="img10.svg" maxw="500px">
      <div className="flex w-full items-center justify-between">
        <BackBtn />
        <button
          className=" rounded-full border p-2 text-sm font-semibold "
          onClick={(e) => {
            e.preventDefault();
            reset();
          }}
        >
          <RxCross1 />
        </button>
      </div>
      <h1 className="mb-2 text-center font-serif text-4xl">Login</h1>
      <div className="mb-4 mt-6 max-[768px]:w-[400px] max-[520px]:w-[300px] max-[410px]:w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex w-full flex-col gap-4"
        >
          <div className="w-full">
            <label htmlFor="userName" className="w-full text-sm font-bold ">
              Username
            </label>

            <input
              type="text"
              className="mt-1 w-full rounded-md  bg-stone-200  p-2  text-sm "
              id="userName"
              {...register("userName", {
                required: "This is a required field",
              })}
            />
            {errors.userName && <Error>{errors.userName.message}</Error>}
          </div>

          <div className="w-full">
            <label htmlFor="userName" className="w-full  text-sm font-bold ">
              Password
            </label>

            <div className="mt-1 flex w-full">
              {showPass === "password2" ? (
                <input
                  type="text"
                  className=" grow rounded-md bg-stone-200  p-2 text-sm dark:bg-stone-300 "
                  value={watch("password2")}
                  disabled
                ></input>
              ) : (
                <input
                  type="password"
                  id="password2"
                  className="min-w-0 grow rounded-md  bg-stone-200 p-2 text-sm shadow-sm dark:bg-stone-300  "
                  {...register("password2", {
                    required: "This is a required field",
                  })}
                />
              )}
              <button
                className="ms-[-2px] p-2  text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  setShowPass((p) => (p === "password2" ? "" : "password2"));
                }}
              >
                {" "}
                <>{showPass === "password2" ? <FaEye /> : <TbEyeClosed />}</>
              </button>
            </div>
            {errors.password2 && <Error>{errors.password2.message}</Error>}
          </div>

          <div className="mt-6 w-full">
            <button className="w-full rounded-md bg-blue-600 px-4 py-2 text-base text-white transition-all duration-100 hover:bg-blue-700  ">
              Login
            </button>
          </div>
          <Link to="/signup" className="text-right text-sm font-bold ">
            New User?
          </Link>
        </form>
      </div>
    </AuthLayout>
  );
}

export default Login;
