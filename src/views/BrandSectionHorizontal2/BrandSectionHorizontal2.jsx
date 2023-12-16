import "./BrandSectionHorizontal2.css";
import YoutubeEmbed from "../../common/YoutubeEmbed/YoutubeEmbed";
import trustpilot from "../../assets/images/knowmore/trustpilot.png";
import stars from "../../assets/images/knowmore/stars.png";
import FooterSection from "../../views/FooterSection/FooterSection";

const BrandSectionHorizontal2 = () => {
  return (
    <div className="streamer-image-under-section1-background">
      <div className="streamer-image-under-section1-content">
        <h1 className="publicidad-en-stream-brands">
          Llegamos a streamers y creadores de contenido de impacto.
        </h1>
        <div className="App">
          <YoutubeEmbed embedId="gBc4wnRVOYI" />
        </div>
        <p className="paragraf-section1-brands">
          No se trata solo de estar presente, sino de estar presente en los
          lugares correctos. Identificamos y seleccionamos cuidadosamente los
          espacios más top para promocionar tus productos o servicios. Ya sea a
          través de eventos, asociaciones estratégicas o plataformas digitales
          emergentes, nos aseguramos de que tu marca se posicione en los
          entornos que generan el mayor impacto.
        </p>
      </div>
      <div className="image-placer-brands">
        <img src={trustpilot}></img>
        <img src={stars}></img>
      </div>
      <FooterSection />
    </div>
  );
};

export default BrandSectionHorizontal2;
