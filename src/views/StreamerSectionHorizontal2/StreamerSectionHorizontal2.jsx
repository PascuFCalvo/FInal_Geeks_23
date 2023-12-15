import "./StreamerSectionHorizontal2.css";
import brandspanel1 from "../../assets/images/BRANDS/brandspanel.png";
import eldenring from "../../assets/images/WEBIMAGES/eldenring.png";
import charts from "../../assets/images/WEBIMAGES/charts.jpg";

const StreamerSectionHorizontal2 = () => {
  return (
    <div className="streamer-section-horizontal2-background">
      <div className="streamer-section-horizontal2-content">
        <div className="streamer-section-horizontal2-content-left">
          <img
            className="Image-section-2"
            src={brandspanel1}
            alt="Imagen de la sección 2"
          />
        </div>
        <div className="streamer-section-horizontal2-content-right">
          <h1 className="Title-section-2">
            Ajusta tus anuncios según tus preferencias.
          </h1>
          <p className="streamer-paragraf-section-2">
            Realiza transmisiones con la publicidad que elijas. Promociona solo
            lo que tu audiencia desee ver. Selecciona las marcas que se adapten
            a tu estilo. La decisión está en tus manos.
          </p>
        </div>
      </div>
      <div className="streamer-section-horizontal2-content">
        <div className="streamer-section-horizontal2-content-left">
          <img
            className="Image-section-2"
            src={eldenring}
            alt="Imagen de la sección 2"
          />
        </div>
        <div className="streamer-section-horizontal2-content-right">
          <h1 className="Title-section-2">
            Prioriza a tu audiencia en todo momento.
          </h1>
          <p className="streamer-paragraf-section-2">
            Nuestros anuncios no interrumpen tu transmisión; se integran sin
            cortes en tu streaming. Posiciónalos de manera estratégica para que
            no molesten y tu audiencia no se pierda ningún detalle.
          </p>
        </div>
      </div>
      <div className="streamer-section-horizontal2-content">
        <div className="streamer-section-horizontal2-content-left">
          <img
            className="Image-section-2"
            src={charts}
            alt="Imagen de la sección 2"
          />
        </div>
        <div className="streamer-section-horizontal2-content-right">
          <h1 className="Title-section-2">
            Obtén tus ingresos de manera transparente y equitativa.
          </h1>
          <p className="streamer-paragraf-section-2">
            Tendrás un control total sobre tus ganancias y acceso completo a la
            información de tus campañas. Recibe tus pagos de la forma que
            prefieras.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StreamerSectionHorizontal2;
