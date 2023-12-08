import { useEffect, useState } from "react";
import "./RegisterStreamer.css";
import { useNavigate } from "react-router-dom";
import { getCountries, registerStreamer } from "../../services/apiCalls";
import Logo from "../../common/Logo/logo";

const RegisterStreamer = () => {
  let [paises, setPaises] = useState([]);

  const navigate = useNavigate();

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

  useEffect(() => {
    getCountries()
      .then((response) => {
        setPaises(response.data.data);
        console.log(paises);
      })
      .catch((error) => {
        console.error("Error al obtener los países:", error);
      });
  }, []);

  const handleChange = (e) => {
    setStreamer((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerStreamer(streamer);
      console.log("response:", response.data);
      navigate("/");
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <div className="form-background-register-streamer">
      <div className="logo-placing-register-streamer">
        <Logo />
      </div>
      <form className="form-body" onSubmit={handleSubmit}>
        <label>
          User Name:
          <input
            type="text"
            name="user_name"
            value={streamer.user_name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          User Email:
          <input
            type="email"
            name="user_email"
            value={streamer.user_email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={streamer.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          User Phone:
          <input
            type="text"
            name="user_phone"
            value={streamer.user_phone}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          User Avatar Link:
          <input
            type="text"
            name="user_avatar_link"
            value={streamer.user_avatar_link}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Streamer Nick:
          <input
            type="text"
            name="streamer_nick"
            value={streamer.streamer_nick}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Streamer NIF:
          <input
            type="text"
            name="streamer_nif"
            value={streamer.streamer_nif}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Streamer Platform:
          <input
            type="text"
            name="streamer_platform"
            value={streamer.streamer_platform}
            onChange={handleChange}
          />
        </label>
        <br />

        <select
          className="selectCountry"
          name="country_id"
          value={streamer.country_id}
          onChange={handleChange}
        >
          <option value="">Selecciona un país</option>
          {paises.map((pais) => (
            <option key={pais.id} value={pais.id}>
              {pais.country_name}
            </option>
          ))}
        </select>
        <br />

        <div className="buttons">
          <button
            className="buttonBack"
            type="submit"
            onClick={() => navigate("/")}
          >
            Volver
          </button>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterStreamer;
