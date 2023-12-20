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
      <div className="profileResponsive-background">
        <div className="profileResponsive-user-card">
         <div className="profileResponsive-user-card-profile-pic"></div>
        </div>
        <div className="profileResponsive-streamer-card"></div>
      </div>
    </div>
  );
};
