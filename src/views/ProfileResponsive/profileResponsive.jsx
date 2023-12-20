import { useState } from "react";
import "./profileResponsive.css";
import { useEffect } from "react";
import {
  getAllBrands,
  getAllStreamers,
  getAllStreams,
} from "../../services/apiCalls";
import { useSelector } from "react-redux";

export const ProfileResponsive = () => {
  const token = useSelector((state) => state.token.value);

  const [info, setInfo] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [brandInfo, setBrandInfo] = useState({});

  //recuperando streams con todos sus datos asociados

  useEffect(() => {
    const getInfo = async () => {
      getAllStreams(token).then((res) => {
        setInfo(res.data);
      });
    };
    getInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //recuperando streamers con todos sus datos asociados

  useEffect(() => {
    const getUsers = async () => {
      getAllStreamers(token).then((res) => {
        setUserInfo(res.data);
      });
    };
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //recuperando marcas con todos sus datos asociados

  useEffect(() => {
    const getBrands = async () => {
      getAllBrands(token).then((res) => {
        setBrandInfo(res.data);
      });
    };
    getBrands();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(userInfo);
  return (
     <div>
       {userInfo && <div className="profileResponsive-background">
        <div className="profileResponsive-user-card">
          <button className="profileResponsive-button-close">x</button>
          <div className="profileResponsive-user-card-profile-data">
            <p className="profileResponsive-user-card-profile-data-text">
              Andrea Lopez
            </p>
            <p className="profileResponsive-user-card-profile-data-text-email">
              andrea@andrea.com
            </p>
            <p className="profileResponsive-user-card-profile-data-text-role">
              streamer
            </p>
          </div>
          <div className="profileResponsive-user-card-profile-pic">
            <img src="https://res.cloudinary.com/dlcgfuujm/image/upload/v1702141881/samples/upscale-face-1.jpg"></img>
          </div>
        </div>
        <div className="profileResponsive-streamer-card">
          <div className="profileResponsive-streamer-card-streamer-data">
            <p className="profileResponsive-streamer-card-streamer-data-nick">
              Andretina
            </p>
            <p className="profileResponsive-streamer-card-streamer-data-text">
              Aregentina
            </p>
            <p className="profileResponsive-streamer-card-streamer-data-text">
              Twitch
            </p>
            <p className="profileResponsive-streamer-card-streamer-data-text">
              Tienes campañas activas: SI
            </p>
          </div>
          <img
            className="profileResponsive-streamer-card-streamer-stream-pic "
            src="https://marketing4ecommerce.net/wp-content/uploads/2020/08/Twitch-Studio.jpg"
          ></img>
          <div className="profileResponsive-streamer-card-streamer-buttons">
            <button className="profileResponsive-streamer-card-streamer-buttons-ver">
              Ver mis strems
            </button>
            <button className="profileResponsive-streamer-card-streamer-buttons-report">
              Reportar un stream
            </button>
          </div>
        </div>
      </div>}
      
    </div>
  );
};
