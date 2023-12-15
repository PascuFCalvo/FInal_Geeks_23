import { useState } from "react";
import BannerMarcas1 from "../BannerMarcas1/BannerMarcas1";
import Dashboard from "../Dashboard/Dashboard";
import FooterSection from "../FooterSection/FooterSection";
import NavBar from "../NavBar/NavBar";
import "./AdminPanel.css";
import AdminUsersResumeView from "../AdminUsersResumeView/AdminUsersResumeView";

export const AdminPanel = () => {
  const [isOnDashboard, setIsOnDashboard] = useState(true);
  const [isOnUsers, setIsOnUsers] = useState(false);

  const isOnDashboardHandler = () => {
    setIsOnUsers(false);
    setIsOnDashboard(true);
  };

  const isOnUsersHandler = () => {
    setIsOnUsers(true);
    setIsOnDashboard(false);
  };

  return (
    <div>
      <NavBar />
      <div className="admin-panel-container">
        <div className="admin-panel-aside-menu">
          <div className="admin-panel-aside-menu-item-containers">
            <div
              className="admin-panel-aside-menu-item"
              onClick={() => isOnDashboardHandler()}
            >
              Dashboard
            </div>
            <div
              className="admin-panel-aside-menu-item"
              onClick={() => isOnUsersHandler()}
            >
              Users
            </div>
            <div className="admin-panel-aside-menu-item">Brands</div>
            <div className="admin-panel-aside-menu-item">Streamers</div>
            <div className="admin-panel-aside-menu-item">Campaigns</div>
          </div>
        </div>
        <div className="admin-panel-main-content">
          {isOnDashboard && <Dashboard />}
          {isOnUsers && <AdminUsersResumeView />}
        </div>
      </div>
      <BannerMarcas1 />
      <FooterSection />
    </div>
  );
};
