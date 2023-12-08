import "./NavBar.css";
import Logo from "../../common/Logo/logo";
import Login from "../../common/Login/Login";
import Register from "../../common/Register/Register";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NavBar = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, []);

  return (
    <div className="navbar-background">
      <div className="navbar-content">
        <Logo />
        <div className="buttons-navbar">
          <Login />
          <Register />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
