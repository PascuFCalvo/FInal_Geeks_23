import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createACampaign, getProfile } from "../../services/apiCalls";
import "./CreateACampaign.css";

const CreateACampaign = () => {
  const [profile, setProfile] = useState(null);
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
      const response = await getProfile(token);
      setProfile(response.data.data.user);
    }catch (error) {
      console.error("Error creating campaign:", error);
    }



   };

    return (
      <div>
        <div className="createACampaign">
          <form onSubmit={handleSubmit}>
            <label htmlFor="campaign_name">Campaign Name</label>
            <input
              type="text"
              name="campaign_name"
              id="campaign_name"
              onChange={handleChange}
              value={formCampaign.campaign_name}
            />
            <label htmlFor="campaign_description">Campaign Description</label>
            <input
              type="text"
              name="campaign_description"
              id="campaign_description"
              onChange={handleChange}
              value={formCampaign.campaign_description}
            />
            <label htmlFor="campaign_start_date">Campaign Start Date</label>
            <input
              type="date"
              name="campaign_start_date"
              id="campaign_start_date"
              onChange={handleChange}
              value={formCampaign.campaign_start_date}
            />
            <label htmlFor="price_per_single_view">Price Per Single View</label>
            <input
              type="number"
              name="price_per_single_view"
              id="price_per_single_view"
              onChange={handleChange}
              value={formCampaign.price_per_single_view}
            />
            <button type="submit">Create Campaign</button>
          </form>
        </div>
      </div>
    );
  };


export default CreateACampaign;
