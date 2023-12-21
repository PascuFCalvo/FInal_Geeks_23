/* eslint-disable no-unused-vars */
import { useState } from "react";

import { useEffect } from "react";
import {
  getAllBrands,
  getAllStreamers,
  getAllStreams,
} from "../../services/apiCalls";
import { useSelector } from "react-redux";

export const DatafetchingTestImprovements = () => {
  const token = useSelector((state) => state.token.value);

  // eslint-disable-next-line no-unused-vars
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
      <p>hola</p>
    </div>
  );
};
