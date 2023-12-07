import { Routes, Route, Navigate } from "react-router-dom";
import { MainPage } from "../MainPage/MainPage";
import { StreamersMainPage } from "../StreamersMainPage/StreamersMainPage";
import BrandMainPage from "../BrandMainPage/BrandMainPage";

const Body = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/streamers" element={<StreamersMainPage />} />
        <Route path="/brands" element={<BrandMainPage />} />
      </Routes>
    </div>
  );
};

export default Body;
