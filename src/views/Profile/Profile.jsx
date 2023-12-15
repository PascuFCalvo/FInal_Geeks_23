import { useState, useEffect } from "react";
import {
  editStreamerProfile,
  getAllmyStreams,
  getCountries,
  getProfile,
  inactivateUserProfile,
} from "../../services/apiCalls";
import NavBar from "../NavBar/NavBar";
import "./Profile.css";
import FooterSection from "../FooterSection/FooterSection";
import BannerMarcas1 from "../BannerMarcas1/BannerMarcas1";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PopupDeleteUser from "../../common/PopupDeleteUser/PopupDeleteUser";
import { removeToken } from "../tokenSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState(null);
  const [popupDisplay, setPopupDisplay] = useState(false); // [1
  const token = useSelector((state) => state.token.value);
  const [completeProfile, setCompleteProfile] = useState(false); // [1
  const [profile, setProfile] = useState(null);
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [streams, setStreams] = useState([]);
  const [laststream, setLaststream] = useState([]);
  const [creditToZero, setCreditToZero] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getProfile(token).then((response) => {
      setProfile(response.data.data.user.id);
      setCompleteProfile(response.data.data);
    });
  }, [token]);

  useEffect(() => {
    getAllmyStreams(token)
      .then((response) => {
        setStreams(response.data.streams);
        return response.data.streams;
      })
      .then((streamsData) => {
        setLaststream(streamsData[0]);
      })
      .catch((error) => {
        console.error("Error fetching streams:", error);
      });
  }, [token]);

  const handlerCreditToZero = async () => {
    setCreditToZero(true);

    const updatedProfileData = {
      streamer: {
        ...completeProfile.streamer,
        streamer_revenue: 0,
      },
    };

    await editStreamerProfile(updatedProfileData.streamer, token);

    setTimeout(() => {
      setCreditToZero(false);
    }, 3000);
  };

  const handleInactivateUser = async () => {
    try {
      inactivateUserProfile(profile, token);
      dispatch(removeToken());
      setTimeout(() => {
        navigate("/");
      }, 1000);
      setPopupDisplay(false);
    } catch (error) {
      console.error("Error al desactivar al usuario:", error);
    }
  };

  useEffect(() => {
    getCountries()
      .then((response) => {
        setCountries(response.data.data);
      })
      .catch((error) => {
        console.error("Error al obtener los países:", error);
      });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProfile(token);
        setProfileData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [token, creditToZero]);

  const handlerPopupDisplay = () => {
    setPopupDisplay(!popupDisplay);
  };

  const handleCancelDelete = () => {
    setPopupDisplay(false);
  };

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
      {loading ? (
        <div className="spinner-screen">
          <p>Accediendo a tu pefil</p>
          <img
            src="../src/assets/images/GIFS/Spinner.gif"
            alt="loading"
            className="loading-gif"
          />
        </div>
      ) : (
        <>
          {profileData && profileData.user.user_role === "streamer" && (
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
                  <p>Telefono</p>
                  <br></br>
                  <h2> {country}</h2>
                  <p>Pais</p>
                  <br></br>
                </div>
                <div className="buttons-user-panel-profile">
                  <button
                    className="edit-profile-button"
                    onClick={() => navigate("/editUserInfo")}
                  >
                    Editar informacion
                  </button>
                  <button
                    className="delete-profile-button"
                    onClick={() => handlerPopupDisplay()}
                  >
                    X
                  </button>
                </div>
                {popupDisplay && (
                  <PopupDeleteUser
                    onCancelDelete={handleCancelDelete}
                    onInactivateUser={handleInactivateUser}
                  />
                )}
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
                      <div>
                        <p className="p-streamer-platform">
                          Plataforma de Stream
                        </p>
                        <div className="reset-profit-to-0">
                          <h2 className="streamer-revenue">
                            Ganancias acumuladas:{" "}
                            {profileData.streamer.streamer_revenue}
                          </h2>
                          <button
                            className="reset-profit-to-0-button"
                            onClick={() => handlerCreditToZero()}
                          >
                            Retirar credito
                          </button>
                          {creditToZero && (
                            <div className="modal-container-credit-out">
                              <p>Realizando el pago...</p>
                              <img
                                src="../src/assets/images/GIFS/Spinner.gif"
                                alt="loading"
                                className="loading-gif-credit-out"
                              />
                              <p>gracias por trabajar con StreamCash</p>
                            </div>
                          )}
                        </div>
                      </div>

                      <h2 className="streamer-campaigns">
                        Tienes campañas activas:
                        {profileData.streamer.has_active_campaigns === 0
                          ? " No"
                          : " Si"}
                      </h2>
                    </div>
                  </div>
                  <div className="streamer-stream-image">
                    <p>Tu último stream:</p>
                    <img
                      className="streamer-stream-image"
                      src={laststream.stream_check_picture_2}
                    ></img>
                  </div>
                </div>

                <button
                  className="create-stream-button"
                  onClick={() => navigate("/reportAStream")}
                >
                  Reportar un Stream
                </button>
                <button
                  className="create-stream-button2"
                  onClick={() => navigate("/getStreamsByStreamer")}
                >
                  Ver mis Streams
                </button>
              </div>
            </div>
          )}

          {profileData && profileData.user.user_role === "brand" && (
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
                  <p>telefono</p>
                  <br></br>
                  <h2>{country}</h2>
                  <p>pais</p>
                  <br></br>
                </div>
                <div className="buttons-user-panel-profile">
                  <button
                    className="edit-profile-button"
                    onClick={() => navigate("/editBrandInfo")}
                  >
                    Editar informacion
                  </button>
                  <button
                    className="delete-profile-button"
                    onClick={() => handlerPopupDisplay()}
                  >
                    X
                  </button>
                </div>
                {popupDisplay && (
                  <PopupDeleteUser
                    onCancelDelete={handleCancelDelete}
                    onInactivateUser={handleInactivateUser}
                  />
                )}
              </div>

              <div className="profile-brand-card">
                <div className="brand-info">
                  <div className="brand-info-top">
                    <div className="brand-info-top-text">
                      <h1 className="brand-name">
                        {profileData.brand.brand_name}
                      </h1>
                      <p className="p-brand-name">brand name</p>
                      <h1 className="brand-cif">
                        {profileData.brand.brand_CIF}
                      </h1>
                      <p className="p-brand-cif">CIF</p>
                      <h2 className="brand-description">
                        {profileData.brand.brand_description}
                      </h2>
                      <br></br>
                      <h2 className="brand-campaigns">
                        Tienes campañas activas:
                        {profileData.brand.has_active_campaigns === 0
                          ? " No"
                          : " SI "}
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

                <button
                  className="create-stream-button2"
                  onClick={() => navigate("/getCampaignsAsABrand")}
                >
                  Ver mis campañas
                </button>
                <button
                  className="create-stream-button"
                  onClick={() => navigate("/createACampaign")}
                >
                  Crear una campaña
                </button>
              </div>
            </div>
          )}

          <BannerMarcas1 />
          <FooterSection />
        </>
      )}
    </div>
  );
};
export default Profile;
