import Lottie from "react-lottie";
function Forget({ animationData }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex w-full">
      <Lottie options={defaultOptions} className="w-full" />
    </div>
  );
}

export default Forget;
