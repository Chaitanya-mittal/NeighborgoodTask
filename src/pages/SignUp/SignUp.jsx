import AuthLayout from "../../components/AuthLayout/AuthLayout";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Error from "../../components/Error/Error";
import { password_validate, passValidation } from "../../utils/password";
import { FaEye } from "react-icons/fa";
import { TbEyeClosed } from "react-icons/tb";

import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";

function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [showPass, setShowPass] = useState("");

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section className="py-24">
      <h1 className="textGradient1 text-center text-4xl font-bold">
        Welcome to Neighborgood
      </h1>
      <p className="mb-8 mt-[6px] text-center text-base font-[400] text-[rgb(86,36,4)] sm:text-lg">
        Let's start with the basics. Your journey to exciting experiences is
        just a few clicks away!
      </p>
      <AuthLayout maxw="350px" name="signup">
        <div className="w-full text-right">
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
        <hr className="border border-slate-700"></hr>
        <div className="mb-4 mt-6 max-[768px]:w-[400px] max-[520px]:w-[300px] max-[410px]:w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" flex w-full flex-col gap-4 "
          >
            <div>
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <div className="w-full ">
                <input
                  type="text"
                  id="firstName"
                  className="w-full rounded-md border  bg-red-200 px-2 py-1 text-sm shadow-sm"
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
                className="bold  bold w-[150px] pt-1 text-sm"
              >
                Email
              </label>
              <div className="sm:grow">
                <input
                  type="email"
                  autoComplete="on"
                  className="w-full flex-1 rounded-md border bg-red-200  px-2 py-1 text-sm shadow-sm"
                  id="userEmail"
                  {...register("userEmail", {
                    required: "Please enter your email",
                  })}
                />
                {errors.userEmail && <Error>{errors.userEmail.message}</Error>}
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="password1" className="text-sm">
                Password
              </label>
              <div className="w-full">
                <div className="flex">
                  {showPass === "password1" ? (
                    <input
                      type="text"
                      disabled
                      value={watch("password1")}
                      className="grow rounded-md border bg-red-200  px-2 py-1 text-sm shadow-sm "
                    ></input>
                  ) : (
                    <input
                      type="password"
                      id="password1"
                      className=" min-w-0 grow rounded-md  border bg-red-200 px-2 py-1 text-sm shadow-sm"
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
              <label htmlFor="password2" className="text-sm">
                Confirm Password
              </label>
              <div className="sm:grow ">
                <div className="flex w-full">
                  {showPass === "password2" ? (
                    <input
                      type="text"
                      value={watch("password2")}
                      className="grow rounded-md border bg-red-200 px-2  py-1 text-sm shadow-sm "
                    ></input>
                  ) : (
                    <input
                      type="password"
                      id="password2"
                      className="min-w-0 grow rounded-md border bg-red-200 px-2 py-1 text-sm shadow-sm  "
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

            <Link to="/login" className="bold mt-1 text-right text-sm ">
              Already a user?
            </Link>
            <div className="mt-4 w-full">
              <button className="w-full rounded-md bg-green-500 px-4 py-2 text-base transition-all duration-100 hover:bg-green-600 ">
                Signup
              </button>
            </div>
          </form>
        </div>
      </AuthLayout>
    </section>
  );
}

export default SignUp;
