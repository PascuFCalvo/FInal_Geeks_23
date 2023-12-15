import { useEffect, useState } from "react";
import {
  getAllBrands,
  getAllCampaigns,
  getAllStreamers,
  getAllUsers,
} from "../../services/apiCalls";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [brands, setBrands] = useState([]);
  const [streamers, setStreamers] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const token = useSelector((state) => state.token.value);

  const navigate = useNavigate();

  useEffect(() => {
    getAllUsers(token)
      .then((res) => {
        console.log(res.data.users);
        setUsers(res.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  useEffect(() => {
    getAllBrands(token)
      .then((res) => {
        console.log(res.data.brands);
        setBrands(res.data.brands);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  useEffect(() => {
    getAllStreamers(token)
      .then((res) => {
        console.log(res.data.streamers);
        setStreamers(res.data.streamers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  useEffect(() => {
    getAllCampaigns(token)
      .then((res) => {
        console.log(res.data.campaigns);
        setCampaigns(res.data.campaigns);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  return (
    <div>
      <div className="dashboard-container">
      
        <div className="dashboard-title">PANEL DE ADMNINISTRACION VISTA GENERAL</div>
        <div className="dashboard-item-group">
          <div className="dashboard-item">
            <div className="dashboard-item-title">USUARIOS</div>
            {users.map((user) => (
              <p className = "dashboard-item-text" key={user.id}>{user.user_name}</p>
            ))}
          </div>
          <div className="dashboard-item">
            <div className="dashboard-item-title">MARCAS</div>
            {brands.map((brand) => (
              <p className = "dashboard-item-text" key={brand.id}>{brand.brand_name}</p>
            ))}
          </div>
          <div className="dashboard-item">
            <div className="dashboard-item-title">STREAMERS</div>
            {streamers.map((streamer) => (
              <p className = "dashboard-item-text" key={streamer.id}>{streamer.streamer_nick}</p>
            ))}
          </div>
          <div className="dashboard-item">
            <div className="dashboard-item-title">CAMPAÑAS</div>
            {campaigns.map((campaign) => (
              <p className = "dashboard-item-text" key={campaign.id}>{campaign.campaign_name}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
