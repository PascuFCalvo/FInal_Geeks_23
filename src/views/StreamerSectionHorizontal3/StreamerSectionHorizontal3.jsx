import "./StreamerSectionHorizontal3.css";
import you from "../../assets/images/WEBIMAGES/you.jpg";
import audience from "../../assets/images/WEBIMAGES/audience.jpg";
import gente from "../../assets/images/WEBIMAGES/gente.jpg";
import vigilante from "../../assets/images/WEBIMAGES/vigilante.jpg";
import { useNavigate } from "react-router-dom";

const StreamerSectionHorizontal3 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section className="streamer-section-3">
        <h1 className="title-streamer-section-3">
          Pero, ¿por qué venirte con nosotros?
        </h1>
        <p className="text-streamer-section-3">
          Porque StreamCash es un match perfecto.
        </p>
        <div className="cards-container-streamer3">
          <div className="card-streamer-section-3">
            <img className="img-section3" src={you}></img>
            <h2 className="h2-section3">Definitivamente es para ti</h2>
            <p className="p-section3">
              Porque ya sean 5 o 5 millones de espectadores los que tengas,
              puedes empezar a ganar dinero stremeando.
            </p>
          </div>
          <div className="card-streamer-section-3">
            <img className="img-section3" src={audience}></img>
            <h2 className="h2-section3">A tu audiencia le encantará</h2>
            <p className="p-section3">
              Te ayudan a ganar dinero y a crecer tu canal.
            </p>
          </div>
          <div className="card-streamer-section-3">
            <img className="img-section3" src={gente}></img>
            <h2 className="h2-section3">Todos son bienvenidos</h2>
            <p className="p-section3">
              Aún mejor, puedes usar Streamcash en todas las más grandes.
            </p>
          </div>
          <div className="card-streamer-section-3">
            <img className="img-section3" src={vigilante}></img>
            <h2 className="h2-section3">100% bajo tu control</h2>
            <p className="p-section3">
              Tú decides con qué marcas trabajas y cuándo. De verdad.
            </p>
          </div>
        </div>

        <div className="buttons-streamer-section-3">
        <div className="button-empezar-ahora" onClick={() => navigate("/")}>
              VOLVER
            </div>
          <div
            className="button-im-streamer-3"
            onClick={() => navigate("/registerStreamer")}
          >
            Decidido, UNIRME!
          </div>
        </div>
      </section>
    </div>
  );
};

export default StreamerSectionHorizontal3;
