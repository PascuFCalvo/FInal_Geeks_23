import "./MainSectionHorizontal3.css";
import livestream from "../../assets/images/WEBICONS/livestream.png";
import likes from "../../assets/images/WEBICONS/likes.png";

const MainSectionHorizontal3 = () => {
  return (
    <div className="Main-section-horizontal3-background">
      <div className="Main-section-horizontal3-content">
        <div className="Main-section-horizontal3-content-left">
          <h1 className="Title-section-2">
            ¿No puedes ganarte la vida con tus streams?
          </h1>
          <p className="Paragraf-section-2">
            YA NO! Obtén patrocinadores independientemente de cuántas personas
            vean tu stream!
          </p>
          <img className="Image-section-3" src={livestream} />
        </div>
        <div className="Main-section-horizontal3-content-right">
          <img
            className="Image-section-3"
            src={likes}
            alt="Imagen de la sección 2"
          />
        </div>
      </div>
    </div>
  );
};

export default MainSectionHorizontal3;
