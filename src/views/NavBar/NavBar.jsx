import "./NavBar.css";
import Logo from "../../common/Logo/logo";
import Login from "../../common/Login/Login";
import Register from "../../common/Register/Register";

const NavBar = () => {
  return (
    <div className="navbar-background">
      <div className="navbar-content">
        <Logo />
      </div>
      <div className="buttons-navbar">
        <Login />
        <Register />
      </div>
    </div>
  );
};

export default NavBar;
