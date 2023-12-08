import { useState, useEffect } from "react";
import { getCountries, getProfile } from "../../services/apiCalls";
import "./Profile.css";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [token] = useState(localStorage.getItem("token"));
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");

  useEffect(() => {
    getCountries()
      .then((response) => {
        setCountries(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error al obtener los países:", error);
      });
  }, []); // No hay dependencias aquí para evitar bucles infinitos

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

  useEffect(() => {
    if (profileData && profileData.user.user_role === "brand") {
      if (profileData && profileData.brand) {
        const selectedCountry = countries.find(
          (country) => country.id === profileData.brand.country_id
        );
        if (selectedCountry) {
          setCountry(selectedCountry.country_name);
        }
      }
    } else if (profileData && profileData.user.user_role === "streamer") {
      if (profileData && profileData.streamer) {
        const selectedCountry = countries.find(
          (country) => country.id === profileData.streamer.country_id
        );
        if (selectedCountry) {
          setCountry(selectedCountry.country_name);
        }
      }
    }
  }, [profileData, countries]);

  return (
    <div>
      {profileData && profileData.user.user_role === "streamer" && (
        <>
          <h1>{profileData.user.user_name}</h1>
          <h1>{profileData.user.user_email}</h1>
          <h1>{profileData.user.user_phone}</h1>
          <h1>{profileData.user.user_role}</h1>
          <h1>{profileData.user.user_avatar_link}</h1>
          <h1>Country: {country}</h1>
        </>
      )}

      {profileData && profileData.user.user_role === "brand" && (
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
          <h1>Country: {country}</h1>
          <h1>Country ID: {profileData.brand.country_id}</h1>
          <h1>{profileData.brand.brand_CIF}</h1>
          <h1>
            Tiene campañas activas:
            {profileData.brand.has_active_campaigns === 0 ? "No" : "Yes"}
          </h1>
        </>
      )}
    </div>
  );
};

export default Profile;
