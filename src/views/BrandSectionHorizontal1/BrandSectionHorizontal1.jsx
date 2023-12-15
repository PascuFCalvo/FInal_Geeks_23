import "./BrandSectionHorizontal1.css";
import computer from "../../assets/images/BRANDS/Computer.png";

const BrandSectionHorizontal1 = () => {
  return (
    <div>
      <div className="brand-section-1-background">
        <section className="brand-section-1">
          <h1 className="title-section1">
            DAR A CONOCER TU MARCA Y BUSCAR LOS LUGARES MAS TOP PARA PROMOCIONAR
            LO QUE VENDES
          </h1>
          <div className="buttons">
            <div className="button-brand-crate-campaign">CREAR UNA CAMPAÑA</div>
          </div>

          <img className="image-brand-section" src={computer}></img>
          <p className="paragraf-section1">
            Diseña campañas geniales y conecta con las generaciones jóvenes a
            través de nuestros creadores de contenido en línea. La manera más
            efectiva de expandir la visibilidad de tu marca al asociarte con lo
            que les interesa.
          </p>
        </section>
      </div>
    </div>
  );
};

export default BrandSectionHorizontal1;
