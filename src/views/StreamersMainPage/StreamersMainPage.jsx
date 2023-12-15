import NavBar from "../NavBar/NavBar";
import StreamerSectionHorizontal1 from "../StreamerSectionHorizontal1/StreamerSectionHorizontal1";
import BannerMarcas1 from "../BannerMarcas1/BannerMarcas1";
import "./StreamersMainPage.css";
import StreamerSectionHorizontal2 from "../StreamerSectionHorizontal2/StreamerSectionHorizontal2";
import StreamerSectionHorizontal3 from "../StreamerSectionHorizontal3/StreamerSectionHorizontal3";
import FooterSection from "../FooterSection/FooterSection";
import { useEffect } from "react";

export const StreamersMainPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <NavBar />
      <StreamerSectionHorizontal1 />
      <BannerMarcas1 />
      <StreamerSectionHorizontal2 />
      <StreamerSectionHorizontal3 />
      <FooterSection />
    </div>
  );
};
