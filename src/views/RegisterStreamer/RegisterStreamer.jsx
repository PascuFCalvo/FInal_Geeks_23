import { useState } from "react";
import "./RegisterStreamer.css";
import { useNavigate } from "react-router-dom";
import { registerStreamer } from "../../services/apiCalls";

const RegisterStreamer = () => {
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
    <div className="form-background">
      <form className="form" onSubmit={handleSubmit}>
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

        <label>
          Country ID:
          <input
            type="text"
            name="country_id"
            value={streamer.country_id}
            onChange={handleChange}
          />
        </label>
        <br />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default RegisterStreamer;
