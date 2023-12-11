import { useState } from "react";
import { login } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../tokenSlice";

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
      

      // localStorage.setItem("token", response.data.data.token);
      // almacenar el token en redux

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
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginUser;
