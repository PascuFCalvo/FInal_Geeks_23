import "./MainSectionHorizontal1.css";
import { useNavigate } from "react-router-dom";
import streamer from "../../assets/images/WEBICONS/streamer.png";

const MainSectionHorizontal1 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="main-section-1-background">
        <section className="main-section-1">
          <h1 className="title-section1">
            STREAMERS Y MARCAS CONECTADOS PARA CRECER
          </h1>
          <p className="paragraf-section1">
            Conectamos las marcas mas destacadas con los Streamers mas
            influyentes para captar nuevas audiencias y potenciar tu stream
            mediante breves anuncios integrados en tus transmisiones en vivo
          </p>
          <div className="buttons-section-1">
            <div
              className="button-im-streamer"
              onClick={() => navigate("/streamers")}
            >
              SOY STREAMER
            </div>
            <div
              className="button-im-brand"
              onClick={() => navigate("/brands")}
            >
              SOY MARCA
            </div>
          </div>
          <img className="streamer-section-1" src={streamer}></img>
        </section>
      </div>
    </div>
  );
};

export default MainSectionHorizontal1;
