import "./MainSectionHorizontal2.css";

const MainSectionHorizontal2 = () => {
  return (
    <div className="Main-section-horizontal2-background">
      <div className="Main-section-horizontal2-content">
        <div className="Main-section-horizontal2-content-left">
          <img
            className="Image-section-2"
            src="../../src/assets/images/WEBICONS/megafono.png"
            alt="Imagen de la sección 2"
          />
        </div>
        <div className="Main-section-horizontal2-content-right">
          <h1 className="Title-section-2">
            Emite tus campañas en los directos mas destacados en habla hispana.
          </h1>
          <p className="Paragraf-section-2">
            Diseña tus campañas en solo 3 clicks y potencia el crecimiento de tu
            marca
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainSectionHorizontal2;
