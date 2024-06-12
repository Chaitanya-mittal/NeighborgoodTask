import AuthLayout from "../../components/AuthLayout/AuthLayout";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Error from "../../components/Error/Error";
import { password_validate, passValidation } from "../../utils/password";
import { FaEye } from "react-icons/fa";
import { TbEyeClosed } from "react-icons/tb";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { useAuthContext } from "../../context/UseAuthProvider";
import BackBtn from "../../components/BackBtn/BackBtn";

function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser } = useAuthContext();
  const [showPass, setShowPass] = useState("");
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    const newUser = {
      name: data.email,
      email: data.email,
      password: data.password,
      isAuthenticated: true,
    };
    createUser(newUser);
    toast.success("Signed in successful");
    navigate("/dashboard");
  };
  return (
    <section className="py-24">
      <h1 className="textGradient1 text-center text-4xl font-bold">
        Welcome to Neighborgood
      </h1>
      <p className="mb-8 mt-[6px] text-center text-base font-[400] text-[rgb(86,36,4)] dark:text-white sm:text-lg">
        Let's start with the basics. Your journey to exciting experiences is
        just a few clicks away!
      </p>
      <AuthLayout maxw="450px" name="signup">
        <div className="mb-4 flex w-full items-center justify-between">
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
        <p className=" text-xl font-semibold">Basic Details</p>
        <hr className="mt-1 border border-slate-700 dark:border-slate-300"></hr>
        <div className="mb-4 mt-6 max-[768px]:w-[400px] max-[520px]:w-[300px] max-[410px]:w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" flex w-full flex-col gap-4 "
          >
            <div>
              <label htmlFor="name" className="text-sm font-bold">
                Name
              </label>
              <div className="my-1 w-full ">
                <input
                  type="text"
                  id="firstName"
                  className="w-full rounded-md   bg-stone-200 p-2 text-sm shadow-sm dark:bg-stone-300"
                  {...register("name", {
                    required: "Please enter your name",
                  })}
                  autoComplete="off"
                />
                {errors.name && <Error>{errors.name.message}</Error>}
              </div>
            </div>

            <div className="w-full">
              <label
                htmlFor="userEmail"
                className=" w-[150px] pt-1 text-sm font-bold"
              >
                Email
              </label>
              <div className="my-1">
                <input
                  type="email"
                  autoComplete="on"
                  className="w-full flex-1 rounded-md  bg-stone-200 p-2  text-sm shadow-sm dark:bg-stone-300"
                  id="userEmail"
                  {...register("userEmail", {
                    required: "Please enter your email",
                  })}
                />
                {errors.userEmail && <Error>{errors.userEmail.message}</Error>}
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="password1" className="text-sm font-bold">
                Password
              </label>
              <div className="my-1 w-full">
                <div className="flex">
                  {showPass === "password1" ? (
                    <input
                      type="text"
                      disabled
                      value={watch("password1")}
                      className="grow rounded-md  bg-stone-200 p-2  text-sm  shadow-sm dark:bg-stone-300 "
                    ></input>
                  ) : (
                    <input
                      type="password"
                      id="password1"
                      className=" min-w-0 grow rounded-md   bg-stone-200 p-2 text-sm shadow-sm dark:bg-stone-300"
                      {...register("password1", {
                        required: "Please provide your password",
                        pattern: {
                          value:
                            /^(?=.*[A-Z])(?=.*[0-9])(?=.*[ -\/:-@\[-\`{-~]).{7,40}$/,
                          message: "Error",
                        },
                        validate: password_validate(watch("password1")),
                      })}
                    />
                  )}
                  <button
                    className="ms-[-2px] p-2 text-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowPass((p) =>
                        p === "password1" ? "" : "password1",
                      );
                    }}
                  >
                    <>
                      {showPass === "password1" ? <FaEye /> : <TbEyeClosed />}
                    </>
                  </button>
                </div>
                {errors.password1 && (
                  <ul>
                    {passValidation.map((val) => (
                      <Error key={val.msg} check={val.check}>
                        {val.msg}
                      </Error>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="password2" className="text-sm font-bold">
                Confirm Password
              </label>
              <div className="my-1">
                <div className="flex w-full">
                  {showPass === "password2" ? (
                    <input
                      type="text"
                      value={watch("password2")}
                      className="grow rounded-md  bg-stone-200 p-2 text-sm shadow-sm dark:bg-stone-300 "
                    ></input>
                  ) : (
                    <input
                      type="password"
                      id="password2"
                      className="min-w-0 grow rounded-md  bg-stone-200 p-2 text-sm shadow-sm dark:bg-stone-300  "
                      {...register("password2", {
                        required: "Please confirm your password",
                        validate: () =>
                          watch("password1") === watch("password2")
                            ? true
                            : "Passwords do not match",
                      })}
                    />
                  )}
                  <button
                    className="ms-[-2px] p-2  text-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowPass((p) =>
                        p === "password2" ? "" : "password2",
                      );
                    }}
                  >
                    {" "}
                    <>
                      {showPass === "password2" ? <FaEye /> : <TbEyeClosed />}
                    </>
                  </button>
                </div>
                {errors.password2 && <Error>{errors.password2.message}</Error>}
              </div>
            </div>

            {/* <div className="flex flex-col gap-1 sm-[350px]:flex-row sm:gap-0">
            <label htmlFor="profile" className="bold w-[150px] text-sm">
              Profile
            </label>
            <input
              type="file"
              id="profile"
              className="text-sm"
              accept="image/*"
              {...register("profile")}
            />
          </div> */}

            <div className="mt-4 w-full">
              <button className="w-full rounded-md bg-green-600 px-4 py-2 text-base text-white transition-all duration-100 hover:bg-green-700 ">
                Signup
              </button>
            </div>
            <Link to="/login" className="mt-1 text-right text-sm font-bold ">
              Already a user?
            </Link>
          </form>
        </div>
      </AuthLayout>
    </section>
  );
}

export default SignUp;
