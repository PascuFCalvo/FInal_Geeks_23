import "./MainSectionHorizontal5.css";

const MainSectionHorizontal5 = () => {
  return (
    <div>
      <section className="main-section-5">
        <h1>STREAMERS Y MARCAS CONECTADOS PARA CRECER</h1>
        <div className="cards-container-5">
          <div className="card-section-5">
            <img
              className="img-section5"
              src="../../src/assets/images/ICONS/faster-icon-png-17753.png"
              width={150}
            ></img>
            <h2 className="h2-section5">RÁPIDO</h2>
            <p className="p-section5">
              Configura tu cuenta en menos de 1 minuto
            </p>
          </div>
          <div className="card-section-5">
            <img
              className="img-section5"
              src="../../src/assets/images/ICONS/easy.png"
              width={150}
            ></img>
            <h2 className="h2-section5">SENCILLO</h2>
            <p className="p-section5">
              para integrar StreamCash en tus plataforma(s) de streaming
            </p>
          </div>
          <div className="card-section-5">
            <img
              className="img-section5"
              src="../../src/assets/images/ICONS/rueda-dentada.png"
              width={150}
            ></img>
            <h2 className="h2-section5">FÁCIL</h2>
            <p className="p-section5">
              para seleccionar las marcas con las que quieres trabajar y
              comenzar a ganar dinero
            </p>
          </div>
          <div className="card-section-5">
            <img
              className="img-section5"
              src="../../src/assets/images/ICONS/change-management-512.png"
              width={150}
            ></img>
            <h2 className="h2-section5">CAMBIANDO</h2>
            <p className="p-section5">
              tu vida para mejor o incluso para siempre
            </p>
          </div>
        </div>

        <div className="buttons">
          <div className="button-im-streamer-5">SOY STREAMER</div>
          <div className="button-im-brand-5">SOY MARCA</div>
        </div>
      </section>
    </div>
  );
};

export default MainSectionHorizontal5;
