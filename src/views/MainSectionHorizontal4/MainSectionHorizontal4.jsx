import "./MainSectionHorizontal4.css";

const MainSectionHorizontal4 = () => {
  return (
    <div>
      <div className="Main-section-horizontal4-background">
        <div className="Main-section-horizontal4-content">
          <div className="Main-section-horizontal4-content-left">
            <img
              className="Image-section-4"
              src="../../src/assets/images/WEBIMAGES/s1mple.jpg"
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
              className="Image-section-4"
              src="../../src/assets/images/WEBICONS/twitch.png"
              width={100}
              alt="Imagen de la sección 4"
            />
          </div>
        </div>
      </div>
      <div className="buttons-section-4">
        <div className="button-saber-mas">SABER MAS</div>
        <div className="button-empezar-ahora">EMPEZAR AHORA</div>
      </div>
    </div>
  );
};

export default MainSectionHorizontal4;
