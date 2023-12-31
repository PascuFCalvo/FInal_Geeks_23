import "./MainSectionHorizontal4.css";
import s1mple from "../../assets/images/WEBIMAGES/s1mple.jpg";
import twitch from "../../assets/images/WEBICONS/twitch.png";
import { useNavigate } from "react-router-dom";

const MainSectionHorizontal4 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="Main-section-horizontal4-background">
        <div className="Main-section-horizontal4-content">
          <div className="Main-section-horizontal4-content-left">
            <img
              className="Image-section-4"
              src={s1mple}
              alt="Imagen de la sección 4"
            />
          </div>
          <div className="Main-section-horizontal2-content-right">
            <h1 className="Title-section-4">
              Llega a los jugadores de forma nativa
            </h1>
            <p className="Paragraf-section-4">
              Con StreamCash, tu mensaje se integra a la perfección con el
              stream, 100 % visualizacion, 100 % audiencia.
            </p>
            <img
              className="Image-section-4 twitch"
              src={twitch}
              width={100}
              alt="Imagen de la sección 4"
            />
          </div>
        </div>
      </div>
      <div className="buttons-section-4">
        <div className="button-saber-mas" onClick={() => navigate("/knowMore")}>
          SABER MAS
        </div>
        <div
          className="button-empezar-ahora"
          onClick={() => navigate("/registerStreamer")}
        >
          EMPEZAR AHORA
        </div>
      </div>
    </div>
  );
};

export default MainSectionHorizontal4;
