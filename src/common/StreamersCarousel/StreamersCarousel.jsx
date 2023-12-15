import "./StreamersCarousel.css";
import streamer11 from "../../assets/images/WEBIMAGES/streamer11.jpg";
import streamer12 from "../../assets/images/WEBIMAGES/streamer12.jpg";
import streamer13 from "../../assets/images/WEBIMAGES/streamer13.jpg";
import streamer14 from "../../assets/images/WEBIMAGES/streamer14.jpg";
import streamer15 from "../../assets/images/WEBIMAGES/streamer15.jpg";
import streamer16 from "../../assets/images/WEBIMAGES/streamer16.jpg";
import streamer17 from "../../assets/images/WEBIMAGES/streamer17.jpg";
import streamer18 from "../../assets/images/WEBIMAGES/streamer18.jpg";

const StreamersCarousel = () => {
  return (
    <div>
      <div className="logos">
        <div className="logos-slide-right">
          <img src={streamer11} />
          <img src={streamer12} />
          <img src={streamer13} />
          <img src={streamer14} />
          <img src={streamer15} />
          <img src={streamer16} />
          <img src={streamer17} />
          <img src={streamer18} />
        </div>

        <div className="logos-slide-right">
          <img src={streamer11} />
          <img src={streamer12} />
          <img src={streamer13} />
          <img src={streamer14} />
          <img src={streamer15} />
          <img src={streamer16} />
          <img src={streamer17} />
          <img src={streamer18} />
        </div>
      </div>
    </div>
  );
};

export default StreamersCarousel;
