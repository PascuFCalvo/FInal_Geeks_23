import { useState, useEffect } from "react";
import { getProfile } from "../../services/apiCalls";
import "./Profile.css";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [token] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProfile(token);
        setProfileData(response.data.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchData();
  }, [token]);

  console.log(profileData);

  if (profileData && profileData.user.user_role === "streamer") {
    return (
      <div>
        {profileData ? (
          <>
            <h1>{profileData.user.user_name}</h1>
            <h1>{profileData.user.user_email}</h1>
            <h1>{profileData.user.user_phone}</h1>
            <h1>{profileData.user.user_role}</h1>
            <h1>{profileData.user.user_avatar_link}</h1>
            <br />
            <br />
            <h1>{profileData.streamer.streamer_nick}</h1>
            <h1>{profileData.streamer.streamer_nif}</h1>
            <h1>{profileData.streamer.streamer_platform}</h1>
            <h1>Revenue: {profileData.streamer.streamer_revenue}</h1>
            <h1>
              Tiene campañas activas:
              {profileData.streamer.has_active_campaigns === 0 ? "No" : "Yes"}
            </h1>
          </>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    );
  } else if (profileData && profileData.user.user_role === "brand") {
    return (
      <div>
        {profileData ? (
          <>
            <h1>{profileData.user.user_name}</h1>
            <h1>{profileData.user.user_email}</h1>
            <h1>{profileData.user.user_phone}</h1>
            <h1>{profileData.user.user_role}</h1>
            <h1>{profileData.user.user_avatar_link}</h1>
            <br />
            <br />
            <h1>{profileData.brand.brand_name}</h1>
            <h1>{profileData.brand.brand_description}</h1>
            <h1>{profileData.brand.brand_logo_link}</h1>
            <h1>Country: {profileData.brand.country_id}</h1>
            <h1>{profileData.brand.brand_CIF}</h1>
            <h1>
              Tiene campañas activas:
              {profileData.brand.has_active_campaigns === 0 ? "No" : "Yes"}
            </h1>
          </>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    );
  }
};

export default Profile;
