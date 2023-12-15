import { useEffect } from "react";
import StreamersCarousel from "../../common/StreamersCarousel/StreamersCarousel";
import StreamersCarousel2 from "../../common/StreamersCarousel2/StreamersCarousel2";
import BannerMarcas1 from "../BannerMarcas1/BannerMarcas1";
import FooterSection from "../FooterSection/FooterSection";
import MainSectionHorizontal1 from "../MainSectionHorizontal1/MainSectionHorizontal1";
import MainSectionHorizontal2 from "../MainSectionHorizontal2/MainSectionHorizontal2";
import MainSectionHorizontal3 from "../MainSectionHorizontal3/MainSectionHorizontal3";
import MainSectionHorizontal4 from "../MainSectionHorizontal4/MainSectionHorizontal4";
import MainSectionHorizontal5 from "../MainSectionHorizontal5/MainSectionHorizontal5";
import NavBar from "../NavBar/NavBar";
import StreamerImageUnderSection1 from "../StreamerImageUnderSection1/StreamerImageUnderSection1";
import "./MainPage.css";

export const MainPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <NavBar />
      <MainSectionHorizontal1 />
      <StreamerImageUnderSection1 />
      <MainSectionHorizontal2 />
      <MainSectionHorizontal3 />
      <BannerMarcas1 />
      <MainSectionHorizontal4 />
      <StreamersCarousel />
      <StreamersCarousel2 />
      <MainSectionHorizontal5 />
      <FooterSection />
    </div>
  );
};
