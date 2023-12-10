import { useState, useEffect } from "react";
import { getCountries, getProfile } from "../../services/apiCalls";
import NavBar from "../NavBar/NavBar";
import "./Profile.css";
import FooterSection from "../FooterSection/FooterSection";
import BannerMarcas1 from "../BannerMarcas1/BannerMarcas1";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
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
      <NavBar />
      {profileData && profileData.user.user_role === "streamer" && (
        <>
          {" "}
          <div className="body-panel">
            <div className="profile-card">
              <div className="top-half-card">
                <img
                  className="profile-picture"
                  src={profileData.user.user_avatar_link}
                ></img>
                <h2>{profileData.user.user_name}</h2>
                <h3>{profileData.user.user_role}</h3>
              </div>
              <div className="profile-info">
                <h2>{profileData.user.user_email}</h2>
                <p>email</p>
                <br></br>
                <h2>{profileData.user.user_phone}</h2>
                <p>phone</p>
                <br></br>
                <h2>Country: {country}</h2>
                <p>country</p>
                <br></br>
              </div>
              <button
                className="edit-profile-button"
                onClick={() => navigate("/editUserInfo")}
              >
                Editar informacion
              </button>
            </div>

            <div className="profile-streamer-card">
              <div className="streamer-info">
                <div className="streamer-info-top">
                  <div className="streamer-info-top-text">
                    <h1 className="streamer-nick">
                      {profileData.streamer.streamer_nick}
                    </h1>
                    <p className="p-streamer-nick">Streamer Nick</p>

                    <h1 className="streamer-platform">
                      {profileData.streamer.streamer_platform}
                    </h1>
                    <p className="p-streamer-platform">Streamer platform</p>
                    <h2 className="streamer-revenue">
                      Ganancias acumuladas:{" "}
                      {profileData.streamer.streamer_revenue}
                    </h2>
                    <h2 className="streamer-campaigns">
                      Tienes campañas activas:
                      {profileData.streamer.has_active_campaigns === 0
                        ? "No"
                        : "Yes"}
                    </h2>
                  </div>
                </div>
                <div className="streamer-stream-image">
                  <p>Tu último stream:</p>
                  <img
                    className="streamer-stream-image"
                    src={profileData.streamer.image_stream}
                  ></img>
                </div>
              </div>

              <button className="create-stream-button">
                Reportar un Stream
              </button>
              <button className="create-stream-button2">Ver mis Streams</button>
            </div>
          </div>
          <BannerMarcas1 />
          <FooterSection />
        </>
      )}

      {profileData && profileData.user.user_role === "brand" && (
        <>
          {" "}
          <div className="body-panel">
            <div className="profile-card">
              <div className="top-half-card">
                <img
                  className="profile-picture"
                  src={profileData.user.user_avatar_link}
                ></img>
                <h2>{profileData.user.user_name}</h2>
                <h3>{profileData.user.user_role}</h3>
              </div>
              <div className="profile-info">
                <h2>{profileData.user.user_email}</h2>
                <p>email</p>
                <br></br>
                <h2>{profileData.user.user_phone}</h2>
                <p>phone</p>
                <br></br>
                <h2>Country: {country}</h2>
                <p>country</p>
                <br></br>
              </div>
              <button className="edit-profile-button">
                Editar informacion
              </button>
            </div>

            <div className="profile-brand-card">
              <div className="brand-info">
                <div className="brand-info-top">
                  <div className="brand-info-top-text">
                    <h1 className="brand-name">
                      {profileData.brand.brand_name}
                    </h1>
                    <p className="p-brand-name">brand name</p>
                    <h1 className="brand-cif">{profileData.brand.brand_CIF}</h1>
                    <p className="p-brand-cif">CIF</p>
                    <h2 className="brand-description">
                      {profileData.brand.brand_description}
                    </h2>
                    <br></br>
                    <h2 className="brand-campaigns">
                      Tienes campañas activas:
                      {profileData.brand.has_active_campaigns === 0
                        ? "No"
                        : "Yes"}
                    </h2>
                  </div>
                </div>
                <div className="brand-stream-image">
                  <img
                    className="brand-logo"
                    src={profileData.brand.brand_logo_link}
                  ></img>
                </div>
              </div>

              <button className="create-stream-button2">
                Historico Campañas
              </button>
              <button className="create-stream-button">
                Crear una campaña
              </button>
            </div>
          </div>
          <BannerMarcas1 />
          <FooterSection />
        </>
      )}
    </div>
  );
};

export default Profile;
