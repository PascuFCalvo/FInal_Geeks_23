import { useEffect, useState } from "react";
import {
  getAllBrands,
  getAllCampaigns,
  getAllStreamers,
  getAllUsers,
} from "../../services/apiCalls";
import "./Dashboard.css";

import { useSelector } from "react-redux";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [brands, setBrands] = useState([]);
  const [streamers, setStreamers] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Agregado el estado isLoading
  const token = useSelector((state) => state.token.value);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getAllUsers(token);
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [token]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getAllBrands(token);
        setBrands(response.data.brands);
      } catch (error) {
        console.error("Error fetching brands:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [token]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getAllStreamers(token);
        setStreamers(response.data.streamers);
      } catch (error) {
        console.error("Error fetching streamers:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [token]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getAllCampaigns(token);
        setCampaigns(response.data.campaigns);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [token]);

  return (
    <div>
      <div className="dashboard-container">
        <div className="dashboard-title">
          PANEL DE ADMINISTRACIÓN VISTA GENERAL
        </div>
        <div className="dashboard-item-group">
          {isLoading ? (
            <div className="spinner-screen-dashboard">
              <p>Accediendo a tus datos</p>
              <img
                src="../src/assets/images/GIFS/Spinner.gif"
                alt="loading"
                className="loading-gif"
              />
            </div>
          ) : (
            <>
              <div className="dashboard-item">
                <div className="dashboard-item-title">USUARIOS</div>
                {users.map((user) => (
                  <p className="dashboard-item-text" key={user.id}>
                    {user.user_name}
                  </p>
                ))}
              </div>
              <div className="dashboard-item">
                <div className="dashboard-item-title">MARCAS</div>
                {brands.map((brand) => (
                  <p className="dashboard-item-text" key={brand.id}>
                    {brand.brand_name}
                  </p>
                ))}
              </div>
              <div className="dashboard-item">
                <div className="dashboard-item-title">STREAMERS</div>
                {streamers.map((streamer) => (
                  <p className="dashboard-item-text" key={streamer.id}>
                    {streamer.streamer_nick}
                  </p>
                ))}
              </div>
              <div className="dashboard-item">
                <div className="dashboard-item-title">CAMPAÑAS</div>
                {campaigns.map((campaign) => (
                  <p className="dashboard-item-text" key={campaign.id}>
                    {campaign.campaign_name}
                  </p>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
