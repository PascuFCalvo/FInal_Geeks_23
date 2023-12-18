import { useState } from "react";
import { login } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../tokenSlice";
import "./LoginUser.css";
import NavBar from "../../views/NavBar/NavBar";
import BannerMarcas1 from "../../views/BannerMarcas1/BannerMarcas1";
import FooterSection from "../../views/FooterSection/FooterSection";

const LoginUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const body = {
        email: credentials.email,
        password: credentials.password,
      };

      const response = await login(body);

      const newToken = response.data.data.token;
      dispatch(setToken(newToken));

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      setError(
        "Datos erróneos o usuario desactivado. Por favor, contacta con un administrador."
      );
    }
  };

  return (
    <div>
      <NavBar />
      <div className="form-background-login-user">
        <h2 className="title-login-user">Login</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit} className="form-login-user">
          <div>
            <label>Email:</label>
            <input
              className="input-login-user"
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              className="input-login-user"
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="buttons">
            <button className="buttonBack">Volver</button>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>

      <BannerMarcas1 />
      <FooterSection />
    </div>
  );
};

export default LoginUser;
