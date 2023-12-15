import "./BannerMarcas1.css";
import akko from "../../assets/images/BRANDS/akko.png";
import glovo from "../../assets/images/BRANDS/glovo.png";
import lenovo from "../../assets/images/BRANDS/lenovo.png";
import logitech from "../../assets/images/BRANDS/logitech.png";
import mcdonalds from "../../assets/images/BRANDS/mcdonalds.png";
import steam from "../../assets/images/BRANDS/steam.png";

const BannerMarcas1 = () => {
  return (
    <div>
      <div className="banner-marcas1-background">
        <img className="brandImage" src={akko} width={250}></img>
        <img className="brandImage" src={glovo} width={250}></img>
        <img className="brandImage" src={lenovo} width={250}></img>
        <img className="brandImage" src={logitech} width={250}></img>
        <img className="brandImage" src={mcdonalds} width={250}></img>
        <img className="brandImage" src={steam} width={250}></img>
      </div>
    </div>
  );
};

export default BannerMarcas1;
