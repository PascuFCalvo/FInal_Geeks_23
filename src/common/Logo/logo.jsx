import "./logo.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo-largo.png";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div className="logo">
      <img
        className="image-logo"
        src={logo}
        alt="logo"
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default Logo;
