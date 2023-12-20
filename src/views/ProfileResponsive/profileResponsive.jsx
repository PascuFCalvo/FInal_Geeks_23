import { useState } from "react";
import "./profileResponsive.css";
import { useEffect } from "react";
import { getAllBrands, getAllStreamers, getAllStreams } from "../../services/apiCalls";
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
  }, []);

  //recuperando streamers con todos sus datos asociados

  useEffect(( ) => {
   const getUsers = async () => {
      getAllStreamers(token).then((res) => {
         setUserInfo(res.data);
         });
      }
      getUsers();
   }, []);

   //recuperando marcas con todos sus datos asociados

   useEffect(() => {
      const getBrands = async () => {
         getAllBrands(token).then((res) => {
            setBrandInfo(res.data);
         });
      };
      getBrands();
   }, []);

   console.log(brandInfo)
  return (
    <div>
      <p>hola</p>
    </div>
  );
};
