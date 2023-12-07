import "./logo.css";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div className="logo">
      <img
        className="image-logo"
        src="../../src/assets/images/logo-largo.png"
        alt="logo"
        onClick={() => navigate("/")}
        
      />
    </div>
  );
};

export default Logo;
