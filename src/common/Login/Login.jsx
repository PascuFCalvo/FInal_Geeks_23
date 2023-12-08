import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  return (
    <div className="bodyLogin">
      <div
        className="login"
        onClick={() => {
          if (token) {
            localStorage.removeItem("token");
            setTimeout(() => {
              navigate("/");
            }, 1000);
          } else {
            navigate("/login");
          }
        }}
      >
        {token ? "Cerrar Sesión" : "Iniciar Sesión"}
      </div>
    </div>
  );
};

export default Login;
