import { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Register = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const token = useSelector((state) => state.token.value);


  if (token) {
    return null;
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
