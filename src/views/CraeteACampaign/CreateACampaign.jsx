import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createACampaign, getProfile } from "../../services/apiCalls";
import "./CreateACampaign.css";
import NavBar from "../NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import BannerMarcas1 from "../BannerMarcas1/BannerMarcas1";
import FooterSection from "../FooterSection/FooterSection";

const CreateACampaign = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [formCampaign, setFormCampaign] = useState({
    brand_id: "",
    campaign_name: "",
    campaign_description: "",
    campaign_start_date: "",
    price_per_single_view: "",
  });
  const token = useSelector((state) => state.token.value);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormCampaign((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getProfile(token).then((res) => {
      setProfile(res.data.data.user);
      console.log(profile);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newCampaign = {
        brand_id: profile.id,
        campaign_name: formCampaign.campaign_name,
        campaign_description: formCampaign.campaign_description,
        campaign_start_date: formCampaign.campaign_start_date,
        price_per_single_view: formCampaign.price_per_single_view,
      };

      await createACampaign(newCampaign, token);
      setModalVisible(true);
      setTimeout(() => {
        navigate("/profile");
      }, 2000);
      const response = await getProfile(token);
      setProfile(response.data.data.user);
    } catch (error) {
      console.error("Error creating campaign:", error);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="body-report-stream">
        <form onSubmit={handleSubmit} className="form-body-streamer">
          <label htmlFor="campaign_name">Campaign Name</label>
          <input
            type="text"
            name="campaign_name"
            id="campaign_name"
            onChange={handleChange}
            value={formCampaign.campaign_name}
            className="input-form-stream"
          />
          <label htmlFor="campaign_description">Campaign Description</label>
          <input
            type="text"
            name="campaign_description"
            id="campaign_description"
            onChange={handleChange}
            value={formCampaign.campaign_description}
            className="input-form-stream"
          />
          <label htmlFor="campaign_start_date">Campaign Start Date</label>
          <input
            type="date"
            name="campaign_start_date"
            id="campaign_start_date"
            onChange={handleChange}
            value={formCampaign.campaign_start_date}
            className="input-form-stream"
          />
          <label htmlFor="price_per_single_view">Price Per Single View</label>
          <input
            type="number"
            name="price_per_single_view"
            id="price_per_single_view"
            onChange={handleChange}
            value={formCampaign.price_per_single_view}
            className="input-form-stream"
          />
          <div className="buttons-report-stream-form">
            <button
              type="back"
              className="button-back-to-profile"
              onClick={() => navigate("/profile")}
            >
              Volver
            </button>
            <button type="submit" className="button-send-form">
              Enviar
            </button>
          </div>
          {modalVisible && (
            <div className="modal-container">
              <div className="modal">
                <h3>Campaña creada con exito</h3>
              </div>
            </div>
          )}
        </form>
      </div>
      <BannerMarcas1 />
      <FooterSection />
    </div>
  );
};

export default CreateACampaign;
