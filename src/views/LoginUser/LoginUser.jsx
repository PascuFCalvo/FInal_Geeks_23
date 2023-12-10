import { useState } from "react";
import { login } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";

const LoginUser = () => {
  const navigate = useNavigate();
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
      console.log(response.data);
      localStorage.setItem("token", response.data.data.token);
      console.log(response.data.data.token);

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
