import BannerMarcas1 from "../BannerMarcas1/BannerMarcas1";
import FooterSection from "../FooterSection/FooterSection";
import NavBar from "../NavBar/NavBar";
import "./AdminPanel.css";

export const AdminPanel = () => {
   return (
      <div>
         <NavBar />
         <div className="admin-panel-container">
             <div className="admin-panel-aside-menu">
                  <div className="admin-panel-aside-menu-item-containers">
                      <div className="admin-panel-aside-menu-item">Dashboard</div>
                      <div className="admin-panel-aside-menu-item">Users</div>
                      <div className="admin-panel-aside-menu-item">Brands</div>
                      <div className="admin-panel-aside-menu-item">Streamers</div>
                      <div className="admin-panel-aside-menu-item">Campaigns</div> 
                  </div>
             </div>
             <div className="admin-panel-main-content"></div>
         </div>
         <BannerMarcas1 />
         <FooterSection />
      </div>
   );
};
