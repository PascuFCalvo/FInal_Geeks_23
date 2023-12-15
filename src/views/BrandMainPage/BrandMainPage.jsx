import { useEffect } from "react";
import BrandSectionHorizontal1 from "../BrandSectionHorizontal1/BrandSectionHorizontal1";
import NavBar from "../NavBar/NavBar";
import "./BrandMainPage.css";

const BrandMainPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavBar />
      <BrandSectionHorizontal1 />
    </div>
  );
};

export default BrandMainPage;
