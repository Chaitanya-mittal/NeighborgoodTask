import { useEffect } from "react";
import { useAuthContext } from "../../context/UseAuthProvider";
import { useNavigate } from "react-router-dom";
function ProtectedRoute({ children }) {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const isAuthenticated = user.isAuthenticated;
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);
  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
