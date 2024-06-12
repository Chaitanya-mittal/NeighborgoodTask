import { useForm } from "react-hook-form";
import animationData from "../../asset/forget.json";
import Svg from "../../components/svgs/Svg";
import { RxCross1 } from "react-icons/rx";
import Error from "../../components/Error/Error";
import { useDarkContext } from "../../context/UseDarkProvider";
import BackBtn from "../../components/BackBtn/BackBtn";
function ForgotPassword() {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { darkMode } = useDarkContext();

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center ">
      <h2 className="text-2xl font-semibold  dark:text-white sm:text-4xl">
        Forgot <span className="textGradient1">Password</span> ?
      </h2>
      <div
        className={`mt-[20px] w-full max-w-sm border  bg-white p-[20px] shadow-xl ${darkMode && "dnoiseBg border-0"} `}
      >
        <div className="flex w-full items-center justify-between">
          <BackBtn />
          <button
            className=" rounded-full border p-2 text-sm font-semibold dark:text-white"
            onClick={(e) => {
              e.preventDefault();
              reset();
            }}
          >
            <RxCross1 />
          </button>
        </div>
        <div className="mx-auto mb-2 w-32">
          <Svg animationData={animationData} />
        </div>
        <div>
          <form
            className="flex w-full flex-col gap-8"
            onSubmit={handleSubmit(onSubmit)}
            {...register("email", {
              required: "Please enter your email",
            })}
          >
            <div className="w-full">
              <input
                type="email"
                className="mb-1 w-full rounded-md bg-stone-100 p-2 text-sm"
                placeholder="Enter email"
              />
              {errors.email && <Error>{errors.email.message}</Error>}
            </div>
            <button className="rounded-md border-0 bg-[rgb(255,176,0)] p-2 text-sm ">
              Send Reset Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
