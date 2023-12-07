import { Routes, Route, Navigate } from "react-router-dom";
import { MainPage } from "../MainPage/MainPage";
import { StreamersMainPage } from "../StreamersMainPage/StreamersMainPage";


const Body = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/streamers" element={<StreamersMainPage />} />
      </Routes>
    </div>
  );
};

export default Body;
