import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function BackBtn() {
  const navigate = useNavigate();
  return (
    <button
      className=""
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      <FaArrowLeft />
    </button>
  );
}

export default BackBtn;
