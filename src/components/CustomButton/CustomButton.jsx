function CustomButton({ btnRel, position, name, link }) {
  return (
    <div
      ref={btnRel}
      className={`mt-[20px] flex ${position === "center" && "justify-center"} text-black `}
    >
      <a
        className="btnTransition rounded-md bg-[rgb(255,176,0)] px-[20px] py-[10px] font-medium hover:bg-orange-500"
        href={link}
      >
        {name}
      </a>
    </div>
  );
}

export default CustomButton;
