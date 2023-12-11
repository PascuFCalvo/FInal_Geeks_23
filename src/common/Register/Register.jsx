import { useState } from "react";
import "./Register.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const token = useSelector((state) => state.token.value);

  if (token && location.pathname === "/") {
    return (
      <div className="body-register">
        <div className="user-panel" onClick={() => navigate("/profile")}>
          Ir a mi panel de Usuario
        </div>
      </div>
    );
  } else if (token && location.pathname === "/profile") {
    return (
      <div className="user-panel" onClick={() => navigate("/")}>
        volver al menu principal
      </div>
    );
  } else if (token && location.pathname === "/getStreamsByStreamer") {
    return (
      <div className="user-panel" onClick={() => navigate("/profile")}>
        volver al panel de usuario
      </div>
    );
  } else if (token && location.pathname === "/streamers") {
    return (
      <div className="user-panel" onClick={() => navigate("/profile")}>
        Ir a mi panel de Usuario
      </div>
    );
  } else if (token && location.pathname === "/brands") {
    return (
      <div className="user-panel" onClick={() => navigate("/profile")}>
        Ir a mi panel de Usuario
      </div>
    );
  }

  return (
    <div className="body-register">
      <div onMouseEnter={() => setShow(!show)} className="register">
        Regístrate
      </div>

      {show && (
        <div className="body-register-hover">
          <div
            className="register-hover"
            onClick={() => navigate("/registerStreamer")}
          >
            Regístrarme como STREAMER
          </div>

          <div
            className="register-hover-2"
            onClick={() => navigate("/registerBrand")}
          >
            Regístrarme como MARCA
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
