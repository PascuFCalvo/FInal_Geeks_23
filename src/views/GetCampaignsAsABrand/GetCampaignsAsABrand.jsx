/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  activateACampaign,
  deleteACampaign,
  getCampaignsAsABrand,
  getProfile,
  inactivateACampaign,
} from "../../services/apiCalls";
import BannerMarcas1 from "../BannerMarcas1/BannerMarcas1";
import FooterSection from "../FooterSection/FooterSection";
import NavBar from "../NavBar/NavBar";
import "./GetCampaignsAsABrand.css";
import spinner from "../../assets/images/GIFS/spinner.gif";

const GetCampaignsAsABrand = () => {
  
  const token = useSelector((state) => state.token.value);
  const [profileData, setProfileData] = useState(null);
  const [campaigns, setCampaigns] = useState({ campaigns: [] });
  const [loading, setLoading] = useState(true);
  const [selectedCampaignId, setSelectedCampaignId] = useState(null);
  const [someCampaignDeleted, setSomeCampaignDeleted] = useState(false);
  const [someCampaignActivated, setSomeCampaignActivated] = useState(false);
  const [deleteError, setDeleteError] = useState(null);
  const handleDeleteModal = (id) => {
    setSelectedCampaignId(id);
    console.log(id);
  };

  const handleDeleteCampaign = async (id) => {
    try {
      await deleteACampaign(id, token);
      setSelectedCampaignId(null);
      setSomeCampaignDeleted(!someCampaignDeleted);
      setDeleteError(null);
    } catch (error) {
      console.error("Error eliminando campaña", error);
      setDeleteError("No");
      setTimeout(() => {
        setDeleteError(null);
      }, 2000);
    }
  };

  const handlerActivateCampaign = async (id) => {
    try {
      await activateACampaign(id, token);
      setSomeCampaignActivated(!someCampaignActivated);
    } catch (error) {
      console.error("Error activando campaña", error);
    }
  };

  const handlerInctivateCampaign = async (id) => {
    try {
      await inactivateACampaign(id, token);
      setSomeCampaignActivated(!someCampaignActivated);
    } catch (error) {
      console.error("Error activando campaña", error);
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
  }, [token, someCampaignDeleted, deleteError, someCampaignActivated]);

  return (
    <div>
      <NavBar />
      <div className="campaings-list-body-design">
        {loading ? (
          <div className="spinner-screen">
            <p>Accediendo a tus campañas</p>
            <img
              src={spinner}
              alt="loading"
              className="loading-gif"
            />
          </div>
        ) : (
          <div className="general-campaign-background">
            <ul className="campaing-list-background">
              <div className="campaigns-list-style-header">
                <p className="title-campaiogn-list-col">Nombre de la campaña</p>
                <p className="title-campaiogn-list-col">Descripcion</p>
                <p className="title-campaiogn-list-col">Fecha de inicio</p>
                <p className="title-campaiogn-list-col">Activa</p>
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
                    <div className="column-campagn-list-col-odd campaign-description">
                      <p> {campaign.campaign_description}</p>
                    </div>
                    <div className="column-campagn-list-col-even">
                      <p> {campaign.campaign_start_date}</p>
                    </div>
                    <div className="column-campaign-list-col-even ">
                      <div className="column-active">
                        <p>{campaign.is_active ? "SI" : "NO"}</p>
                        {!campaign.is_active && (
                          <button
                            className="activate-campaign-button"
                            onClick={() => handlerActivateCampaign(campaign.id)}
                          >
                            Activar
                          </button>
                        )}
                        {campaign.is_active && (
                          <button
                            className="pause-campaign-button"
                            onClick={() => handlerInctivateCampaign(campaign.id)}
                          >
                            Pausar
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="column-campagn-list-col-even">
                      <p className="price-view">
                        {" "}
                        {campaign.price_per_single_view + " $"} 
                      </p>
                    </div>
                  </div>

                  <button
                    className="delete-campaign-button"
                    onClick={() => handleDeleteModal(campaign.id)}
                  >
                    Eliminar
                  </button>
                  {selectedCampaignId === campaign.id ? (
                    <div className="modal-delete-campaign">
                      <p>
                        {!deleteError
                          ? "¿Estas seguro de que quieres eliminar esta campaña?"
                          : "N0 se puede eliminar campañas activas. Espera a que finalice."}
                      </p>
                      <div className="buttons-modal-delete-campaign">
                        <button
                          className="delete-campaign-button-no"
                          onClick={() => handleDeleteModal()}
                        >
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
          </div>
        )}
      </div>

      <BannerMarcas1 />
      <FooterSection />
    </div>
  );
};

export default GetCampaignsAsABrand;
