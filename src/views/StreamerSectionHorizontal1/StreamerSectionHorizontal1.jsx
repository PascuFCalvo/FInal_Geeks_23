import "./StreamerSectionHorizontal1.css";
import { useNavigate } from "react-router-dom";
import drdisrespect from "../../assets/images/WEBIMAGES/drdisrespect.jpg";

const StreamerSectionHorizontal1 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="streamer-section-1-background">
        <div className="streamer-section-content-1">
          <h1 className="streamer-title-section1-h1">
            Potenciamos tu talento y lo convertimos en tu trabajo
          </h1>

          <div className="buttons">
            <div
              className="quiero-ser-streamer"
              onClick={() => navigate("/registerStreamer")}
            >
              ¡QUIERO SER STREAMER!
            </div>
          </div>
          <img src={drdisrespect} className="streamer-section-img1"></img>
          <div className="reclamo-streamer">
            Ganar dinero haciendo lo que amas es más sencillo que nunca.
            Reconocemos tu dedicación, por eso vinculamos a streamers con marcas
            patrocinadoras de alta calidad.
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamerSectionHorizontal1;
