import { useSelector, useDispatch } from "react-redux";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../../views/tokenSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token.value);

  const handleLogout = () => {
    if (token) {
      // Dispatchea la acción removeToken para eliminar el token
      dispatch(removeToken());
      console.log("Token:", token);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="bodyLogin">
      <div className="login" onClick={handleLogout}>
        {token ? "Cerrar Sesión" : "Iniciar Sesión"}
      </div>
    </div>
  );
};

export default Login;
