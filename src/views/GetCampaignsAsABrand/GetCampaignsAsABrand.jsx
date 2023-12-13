/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCampaignsAsABrand, getProfile } from "../../services/apiCalls";
import BannerMarcas1 from "../BannerMarcas1/BannerMarcas1";
import FooterSection from "../FooterSection/FooterSection";
import NavBar from "../NavBar/NavBar";

const GetCampaignsAsABrand = () => {
  const token = useSelector((state) => state.token.value);

  const [profileData, setProfileData] = useState(null);
  const [campaigns, setCampaigns] = useState({ campaigns: [] });
  const [loading, setLoading] = useState(true);

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
  }, [token]);

  return (
    <div>
      <NavBar />
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
        <ul>
          {campaigns.campaigns.map((campaign) => (
            <li key={campaign.id}>
              <p>{campaign.campaign_name}</p>
              <p>{campaign.campaign_description}</p>
              <p>{campaign.campaign_start_date}</p>
              <p>{campaign.price_per_single_view}</p>
            </li>
          ))}
        </ul>
      )}
      <BannerMarcas1 />
      <FooterSection />
    </div>
  );
};

export default GetCampaignsAsABrand;
