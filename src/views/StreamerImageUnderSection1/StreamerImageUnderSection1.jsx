import "./StreamerImageUnderSection1.css";
import BaityBait from "../../assets/images/BaityBait.png";

const StreamerImageUnderSection1 = () => {
  return (
    <div className="streamer-image-under-section1-background">
      <div className="streamer-image-under-section1-content">
        <img className="img-baityBait" src={BaityBait} alt="Streamer" />
        <h1 className="publicidad-en-stream">
          Publicidad en Streaming, facil de crear, facil de monetizar.
        </h1>
      </div>
    </div>
  );
};

export default StreamerImageUnderSection1;
