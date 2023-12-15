import { useState } from "react";
import "./Register.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const token = useSelector((state) => state.token.value);

  const enrutador = {
    "/": { textButton: "Ir a mi panel de Usuario", navigation: "/profile" },
    "/profile": { textButton: "Volver al inicio", navigation: "/" },
    "/getStreamsByStreamer": {
      textButton: "Volver al panel de usuario",
      navigation: "/profile",
    },
    "/streamers": {
      textButton: "Ir a mi panel de Usuario",
      navigation: "/profile",
    },
    "/brands": {
      textButton: "Ir a mi panel de Usuario",
      navigation: "/profile",
    },
    "/reportAStream": {
      textButton: "Ir a mi panel de Usuario",
      navigation: "/profile",
    },
    "/editUserInfo": {
      textButton: "Ir a mi panel de Usuario",
      navigation: "/profile",
    },
    "/editBrandInfo": {
      textButton: "Ir a mi panel de Usuario",
      navigation: "/profile",
    },
    "/createACampaign": {
      textButton: "Ir a mi panel de Usuario",
      navigation: "/profile",
    },
    "/getCampaignsAsABrand": {
      textButton: "Ir a mi panel de Usuario",
      navigation: "/profile",
    },
    
    "/adminPanel": {
      textButton: "Volver a administracion",
      navigation: "/profile",
    },
  };

  if (token && enrutador[location.pathname]) {
    const infoRuta = enrutador[location.pathname];
    const textButton = infoRuta.textButton;
    const navigation = infoRuta.navigation;

    return (
      <div className="body-register">
        <div className="user-panel" onClick={() => navigate(navigation)}>
          {textButton}
        </div>
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
