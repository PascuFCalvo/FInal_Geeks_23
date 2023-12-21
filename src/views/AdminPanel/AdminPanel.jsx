import { useEffect, useState } from "react";
import BannerMarcas1 from "../BannerMarcas1/BannerMarcas1";
import Dashboard from "../Dashboard/Dashboard";
import FooterSection from "../FooterSection/FooterSection";
import NavBar from "../NavBar/NavBar";
import "./AdminPanel.css";
import AdminUsersResumeView from "../AdminUsersResumeView/AdminUsersResumeView";
import AdminBrandsResumeView from "../AdminBrandsResumeView/AdminBrandsResumeView";
import AdminStreamersResumeView from "../AdminStreamersResumeView/AdminStreamersResumeView";
import AdminCampaignsResumeView from "../AdminCampaignsResumeView/AdminCampaignsResumeView";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NewAdminStreamsResumeView } from "../_NEW_AdminStreamsResumeView/NewAdminStreamsResumeView";

//dejo comentados las vistas de admin antiguas por si acaso las necesito ya que estoy testeando las nuevas
//import AdminStreamsResumeView from "../AdminStreamsResumeView/AdminStreamsResumeView";

export const AdminPanel = () => {
  const token = useSelector((state) => state.token.value);
  const navigate = useNavigate();
  const [isOnDashboard, setIsOnDashboard] = useState(true);
  const [isOnUsers, setIsOnUsers] = useState(false);
  const [isOnBrands, setIsOnBrands] = useState(false);
  const [isOnStreamers, setIsOnStreamers] = useState(false);
  const [isOnStreams, setIsOnStreams] = useState(false);
  const [isOnCampaigns, setIsOnCampaigns] = useState(false);

  const isOnDashboardHandler = () => {
    setIsOnStreams(false);
    setIsOnBrands(false);
    setIsOnUsers(false);
    setIsOnDashboard(true);
    setIsOnStreamers(false);
    setIsOnCampaigns(false);
  };

  const isOnUsersHandler = () => {
    setIsOnStreams(false);
    setIsOnBrands(false);
    setIsOnUsers(true);
    setIsOnDashboard(false);
    setIsOnStreamers(false);
    setIsOnCampaigns(false);
  };

  const isOnBrandsHandler = () => {
    setIsOnStreams(false);
    setIsOnBrands(true);
    setIsOnUsers(false);
    setIsOnDashboard(false);
    setIsOnStreamers(false);
    setIsOnCampaigns(false);
  };

  const isOnStreamersHandler = () => {
    setIsOnStreams(false);
    setIsOnBrands(false);
    setIsOnUsers(false);
    setIsOnDashboard(false);
    setIsOnStreamers(true);
    setIsOnCampaigns(false);
  };

  const isOnStreamsHandler = () => {
    setIsOnStreams(true);
    setIsOnBrands(false);
    setIsOnUsers(false);
    setIsOnDashboard(false);
    setIsOnStreamers(false);
    setIsOnCampaigns(false);
  };

  const isOnCampaignsHandler = () => {
    setIsOnStreams(false);
    setIsOnBrands(false);
    setIsOnUsers(false);
    setIsOnDashboard(false);
    setIsOnStreamers(false);
    setIsOnCampaigns(true);
  };
  if (!token) {
    navigate("/login");
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
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
              <div
                className="admin-panel-aside-menu-item"
                onClick={() => isOnBrandsHandler()}
              >
                Brands
              </div>
              <div
                className="admin-panel-aside-menu-item"
                onClick={() => isOnStreamersHandler()}
              >
                Streamers
              </div>
              <div
                className="admin-panel-aside-menu-item"
                onClick={() => isOnStreamsHandler()}
              >
                Streams
              </div>
              <div
                className="admin-panel-aside-menu-item"
                onClick={() => isOnCampaignsHandler()}
              >
                Campaigns
              </div>
            </div>
          </div>
          <div className="admin-panel-main-content">
            {/*si hace falta volver a las vistas antiguas borrar el New*/}
            {isOnDashboard && <Dashboard />}
            {isOnUsers && <AdminUsersResumeView />}
            {isOnBrands && <AdminBrandsResumeView />}
            {isOnStreamers && <AdminStreamersResumeView />}
            {isOnStreams && <NewAdminStreamsResumeView />}
            {isOnCampaigns && <AdminCampaignsResumeView />}
          </div>
        </div>
        <BannerMarcas1 />
        <FooterSection />
      </div>
    </>
  );
};
