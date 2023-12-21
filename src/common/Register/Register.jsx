import { useEffect, useState } from "react";
import "./Register.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getProfile } from "../../services/apiCalls";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const token = useSelector((state) => state.token.value);
  const [profile, setProfile] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [is430px, setIs430px] = useState(false);
  const [destintation, setDestination] = useState("/profile");

  useEffect(() => {
    getProfile(token).then((response) => {
      setProfile(response.data.data.user.user_role);
    });
  }, [token]);

  //testing conditional rendering in movil
  useEffect(() => {
    if (window.innerWidth < 430) {
      setIs430px(true);
      setDestination("/testing");
    }
  }, []);

  //resize a 430px



  const enrutador =
    profile === "admin"
      ? {
          "/": { textButton: "Ir a administracion", navigation: "/adminPanel" },
          "/adminPanel": { textButton: "Volver al inicio", navigation: "/" },
        }
      : {
          "/": {
            textButton: "Ir a mi panel de Usuario",
            navigation: destintation,
          },
          "/profile": { textButton: "Volver al inicio", navigation: "/" },
          "/getStreamsByStreamer": {
            textButton: "Volver al panel de usuario",
            navigation: destintation,
          },
          "/streamers": {
            textButton: "Ir a mi panel de Usuario",
            navigation: destintation,
          },
          "/brands": {
            textButton: "Ir a mi panel de Usuario",
            navigation: "/profile",
          },
          "/reportAStream": {
            textButton: "Ir a mi panel de Usuario",
            navigation: destintation,
          },
          "/editUserInfo": {
            textButton: "Ir a mi panel de Usuario",
            navigation: destintation,
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
    //comportamiento condicional para movil
    <div className="body-register">
      {is430px && (
        <div onClick={() => setShow(!show)} className="register">
          Regístrate
        </div>
      )}
      {!is430px && (
        <div onMouseEnter={() => setShow(!show)} className="register">
          Regístrate
        </div>
      )}

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
