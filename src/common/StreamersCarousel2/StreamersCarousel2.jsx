import "./StreamersCarousel2.css";
import streamer1 from "../../assets/images/WEBIMAGES/streamer1.jpg";
import streamer2 from "../../assets/images/WEBIMAGES/streamer2.jpg";
import streamer3 from "../../assets/images/WEBIMAGES/streamer3.jpg";
import streamer4 from "../../assets/images/WEBIMAGES/streamer4.jpg";
import streamer5 from "../../assets/images/WEBIMAGES/streamer5.jpg";
import streamer6 from "../../assets/images/WEBIMAGES/streamer6.jpg";
import streamer7 from "../../assets/images/WEBIMAGES/streamer7.jpg";
import streamer8 from "../../assets/images/WEBIMAGES/streamer8.jpg";

const StreamersCarousel2 = () => {
  return (
    <div>
      <div className="logos2">
        <div className="logos2-slide-left">
          <img src={streamer1} />
          <img src={streamer2} />
          <img src={streamer3} />
          <img src={streamer4} />
          <img src={streamer5} />
          <img src={streamer6} />
          <img src={streamer7} />
          <img src={streamer8} />
        </div>

        <div className="logos2-slide-left">
          <img src={streamer1} />
          <img src={streamer2} />
          <img src={streamer3} />
          <img src={streamer4} />
          <img src={streamer5} />
          <img src={streamer6} />
          <img src={streamer7} />
          <img src={streamer8} />
        </div>
      </div>
    </div>
  );
};

export default StreamersCarousel2;
