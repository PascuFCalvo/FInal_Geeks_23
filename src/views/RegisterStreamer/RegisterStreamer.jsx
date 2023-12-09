import { useEffect, useState } from "react";
import "./RegisterStreamer.css";
import { useNavigate } from "react-router-dom";
import { getCountries, registerStreamer } from "../../services/apiCalls";
import Logo from "../../common/Logo/logo";
import { validator } from "../../services/useful";

const RegisterStreamer = () => {
  const [paises, setPaises] = useState([]);
  const navigate = useNavigate();
  const [streamerError, setStreamerError] = useState({
    user_name: "",
    user_email: "",
    password: "",
    user_phone: "",
    user_avatar_link: "",
    streamer_nick: "",
    streamer_nif: "",
    streamer_platform: "",
    streamer_revenue: 0,
    country_id: "",
    has_active_campaigns: false,
  });

  const [streamer, setStreamer] = useState({
    user_name: "",
    user_email: "",
    password: "",
    user_phone: "",
    user_avatar_link: "",
    streamer_nick: "",
    streamer_nif: "",
    streamer_platform: "",
    streamer_revenue: 0,
    country_id: "",
    has_active_campaigns: false,
  });
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    getCountries()
      .then((response) => {
        setPaises(response.data.data);
      })
      .catch((error) => {
        console.error("Error al obtener los países:", error);
      });
  }, []);

  const handleChange = (e) => {
    setStreamerError((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: "",
    }));

    setErrors(false);

    setStreamer((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const errorCheck = (e) => {
    const fieldName = e.target.name;
    const error = validator(fieldName, e.target.value);

    setStreamerError((prevErrors) => ({
      ...prevErrors,
      [fieldName]: error,
    }));

    // Verifica si hay algún error en cualquier campo
    const hasErrors = Object.values(setStreamerError).some(
      (error) => error !== ""
    );
    setErrors(hasErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerStreamer(streamer);
      console.log("response:", response.data);
      navigate("/");
    } catch (error) {
      alert("El formulario contiene errores, imposible enviar.");
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <div className="form-background-register-streamer">
      <div className="logo-placing-register-streamer">
        <Logo />
      </div>
      <form className="form-body-streamer" onSubmit={handleSubmit}>
        <label>
          User Name:
          <input
            className={`input-form-streamer ${
              streamerError.user_name ? "error" : "normal"
            }`}
            type="text"
            name="user_name"
            value={streamer.user_name}
            onChange={handleChange}
            onBlur={errorCheck}
          />
          {streamerError.user_name && (
            <span className="error-message">{streamerError.user_name}</span>
          )}
        </label>
        <br />
        <label>
          User Email:
          <input
            className={`input-form-streamer ${
              streamerError.user_email ? "error" : "normal"
            }`}
            type="email"
            name="user_email"
            value={streamer.user_email}
            onChange={handleChange}
            onBlur={errorCheck}
          />
          {streamerError.user_email && (
            <span className="error-message">{streamerError.user_email}</span>
          )}
        </label>
        <br />
        <label>
          Password:
          <input
            className={`input-form-streamer ${
              streamerError.password ? "error" : "normal"
            }`}
            type="password"
            name="password"
            value={streamer.password}
            onChange={handleChange}
            onBlur={errorCheck}
          />
          {streamerError.password && (
            <span className="error-message">{streamerError.password}</span>
          )}
        </label>
        <br />
        <label>
          User Phone:
          <input
            className={`input-form-streamer ${
              streamerError.user_phone ? "error" : "normal"
            }`}
            type="text"
            name="user_phone"
            value={streamer.user_phone}
            onChange={handleChange}
            onBlur={errorCheck}
          />
          {streamerError.user_phone && (
            <span className="error-message">{streamerError.user_phone}</span>
          )}
        </label>
        <br />
        <label>
          User Avatar Link:
          <input
            className={`input-form-streamer ${
              streamerError.user_avatar_link ? "error" : "normal"
            }`}
            type="text"
            name="user_avatar_link"
            value={streamer.user_avatar_link}
            onChange={handleChange}
          />
          {streamerError.user_avatar_link && (
            <span className="error-message">
              {streamerError.user_avatar_link}
            </span>
          )}
        </label>
        <br />
        <label>
          Streamer Nick:
          <input
            className={`input-form-streamer ${
              streamerError.streamer_nick ? "error" : "normal"
            }`}
            type="text"
            name="streamer_nick"
            value={streamer.streamer_nick}
            onChange={handleChange}
          />
          {streamerError.streamer_nick && (
            <span className="error-message">{streamerError.streamer_nick}</span>
          )}
        </label>
        <br />
        <label>
          Streamer NIF:
          <input
            className={`input-form-streamer ${
              streamerError.streamer_nif ? "error" : "normal"
            }`}
            type="text"
            name="streamer_nif"
            value={streamer.streamer_nif}
            onChange={handleChange}
          />
          {streamerError.streamer_nif && (
            <span className="error-message">{streamerError.streamer_nif}</span>
          )}
        </label>
        <br />
        <label>
          Streamer Platform:
          <input
            className={`input-form-streamer ${
              streamerError.streamer_platform ? "error" : "normal"
            }`}
            type="text"
            name="streamer_platform"
            value={streamer.streamer_platform}
            onChange={handleChange}
          />
          {streamerError.streamer_platform && (
            <span className="error-message">
              {streamerError.streamer_platform}
            </span>
          )}
        </label>
        <br />

        <select
          className={`selectCountry ${
            streamerError.country_id ? "error" : "normal"
          }`}
          name="country_id"
          value={streamer.country_id}
          onChange={handleChange}
          onBlur={errorCheck}
        >
          <option value="">Selecciona un país</option>
          {paises.map((pais) => (
            <option key={pais.id} value={pais.id}>
              {pais.country_name}
            </option>
          ))}
        </select>
        {streamerError.country_id && (
          <span className="error-message">{streamerError.country_id}</span>
        )}
        <br />

        <div className="buttons">
          <button
            className="buttonBack"
            type="submit"
            onClick={() => navigate("/")}
          >
            Volver
          </button>
          <button type="submit" disabled={errors}>
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterStreamer;
