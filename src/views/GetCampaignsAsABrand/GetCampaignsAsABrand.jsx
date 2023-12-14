/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  deleteACampaign,
  getCampaignsAsABrand,
  getProfile,
} from "../../services/apiCalls";
import BannerMarcas1 from "../BannerMarcas1/BannerMarcas1";
import FooterSection from "../FooterSection/FooterSection";
import NavBar from "../NavBar/NavBar";
import "./GetCampaignsAsABrand.css";

const GetCampaignsAsABrand = () => {
  const token = useSelector((state) => state.token.value);
  const [profileData, setProfileData] = useState(null);
  const [campaigns, setCampaigns] = useState({ campaigns: [] });
  const [loading, setLoading] = useState(true);
  const [selectedCampaignId, setSelectedCampaignId] = useState(null);
  const [someCampaignDeleted, setSomeCampaignDeleted] = useState(false);

  const handleDeleteModal = (id) => {
    setSelectedCampaignId(id);
    console.log(id);
  };

  const handleDeleteCampaign = async (id) => {
    try {
      console.log("Eliminando campaña", id);
      deleteACampaign(id, token);
      setSelectedCampaignId(null);
      setSomeCampaignDeleted(!someCampaignDeleted);
    } catch (error) {
      console.error("Error eliminando campaña", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileResponse = await getProfile(token);
        setProfileData(profileResponse.data.data);
        console.log(profileResponse.data.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchData();
  }, [token]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const campaignsResponse = await getCampaignsAsABrand(token);
        setCampaigns(campaignsResponse.data);
        console.log(campaignsResponse.data.campaigns);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching brands:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [token, someCampaignDeleted]);

  return (
    <div>
      <NavBar />
      <div className="campaings-list-body-design">
        {loading ? (
          <div className="spinner-screen">
            <p>Accediendo a tus Streams</p>
            <img
              src="../src/assets/images/GIFS/Spinner.gif"
              alt="loading"
              className="loading-gif"
            />
          </div>
        ) : (
          <ul className="campaing-list-background">
            <div className="campaigns-list-style-header">
              <p className="title-campaiogn-list-col">Nombre de la campaña</p>
              <p className="title-campaiogn-list-col">Descripcion</p>
              <p className="title-campaiogn-list-col">Fecha de inicio</p>
              <p className="title-campaiogn-list-col">
                Precio por visualizacion
              </p>
            </div>

            {campaigns.campaigns.map((campaign) => (
              <div key={campaign.id} className="complete-row">
                <div className="campaigns-list-style">
                  <div className="column-campagn-list-col-even">
                    <p> {campaign.campaign_name}</p>
                  </div>
                  <div className="column-campagn-list-col-odd">
                    <p> {campaign.campaign_description}</p>
                  </div>
                  <div className="column-campagn-list-col-even">
                    <p> {campaign.campaign_start_date}</p>
                  </div>
                  <div className="column-campagn-list-col-odd">
                    <p> {campaign.price_per_single_view}</p>
                  </div>
                </div>
                <button
                  className="delete-campaign-button"
                  onClick={() => handleDeleteModal(campaign.id)}
                >
                  {" "}
                  X
                </button>
                {selectedCampaignId === campaign.id ? (
                  <div className="modal-delete-campaign">
                    <p>¿Estas seguro de que quieres eliminar esta campaña?</p>
                    <div className="buttons-modal-delete-campaign">
                      <button
                        className="delete-campaign-button-no"
                        onClick={() => handleDeleteModal()}
                      >
                        {" "}
                        No
                      </button>
                      <button
                        className="delete-campaign-button-yes"
                        onClick={() => handleDeleteCampaign(campaign.id)}
                      >
                        {" "}
                        Si
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </ul>
        )}
      </div>

      <BannerMarcas1 />
      <FooterSection />
    </div>
  );
};

export default GetCampaignsAsABrand;
