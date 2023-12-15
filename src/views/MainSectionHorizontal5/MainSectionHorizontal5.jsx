import "./MainSectionHorizontal5.css";
import faster from "../../assets/images/ICONS/faster-icon-png-17753.png";
import easy from "../../assets/images/ICONS/easy.png";
import rueda from "../../assets/images/ICONS/rueda-dentada.png";
import change from "../../assets/images/ICONS/change-management-512.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const MainSectionHorizontal5 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <section className="main-section-5">
        <h1>STREAMERS Y MARCAS CONECTADOS PARA CRECER</h1>
        <div className="cards-container-5">
          <div className="card-section-5">
            <img className="img-section5" src={faster} width={150}></img>
            <h2 className="h2-section5">RÁPIDO</h2>
            <p className="p-section5">
              Configura tu cuenta en menos de 1 minuto
            </p>
          </div>
          <div className="card-section-5">
            <img className="img-section5" src={easy} width={150}></img>
            <h2 className="h2-section5">SENCILLO</h2>
            <p className="p-section5">
              para integrar StreamCash en tus plataforma(s) de streaming
            </p>
          </div>
          <div className="card-section-5">
            <img className="img-section5" src={rueda} width={150}></img>
            <h2 className="h2-section5">FÁCIL</h2>
            <p className="p-section5">
              para seleccionar las marcas con las que quieres trabajar y
              comenzar a ganar dinero
            </p>
          </div>
          <div className="card-section-5">
            <img className="img-section5" src={change} width={150}></img>
            <h2 className="h2-section5">CAMBIANDO</h2>
            <p className="p-section5">
              tu vida para mejor o incluso para siempre
            </p>
          </div>
        </div>

        <div className="buttons">
          <div
            className="button-im-streamer-5"
            onClick={() => navigate("/streamers")}
          >
            SOY STREAMER
          </div>
          <div
            className="button-im-brand-5"
            onClick={() => navigate("/brands")}
          >
            SOY MARCA
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainSectionHorizontal5;
