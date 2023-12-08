import { Routes, Route, Navigate } from "react-router-dom";
import { MainPage } from "../MainPage/MainPage";
import { StreamersMainPage } from "../StreamersMainPage/StreamersMainPage";
import BrandMainPage from "../BrandMainPage/BrandMainPage";
import RegisterStreamer from "../RegisterStreamer/RegisterStreamer";
import RegisterBrand from "../RegisterBrand/RegisterBrand";

const Body = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/streamers" element={<StreamersMainPage />} />
        <Route path="/brands" element={<BrandMainPage />} />
        <Route path="/registerStreamer" element={<RegisterStreamer />} />
        <Route path="/registerBrand" element={<RegisterBrand />} />
      </Routes>
    </div>
  );
};

export default Body;
