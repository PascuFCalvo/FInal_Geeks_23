import { useEffect, useState } from "react";
import {
  deleteAStreamById,
  getAllCampaigns,
  getAllmyStreams,
  getCountries,
  getProfile,
  payStreamAPI,
} from "../../services/apiCalls";
import "./GetStreamsByStreamer.css";
import NavBar from "../NavBar/NavBar";
import FooterSection from "../FooterSection/FooterSection";
import { useSelector } from "react-redux";
import BannerMarcas1 from "../BannerMarcas1/BannerMarcas1";
import { useNavigate } from "react-router-dom";

export const GetStreamsByStreamer = () => {
  const token = useSelector((state) => state.token.value);
  const [profileData, setProfileData] = useState(null);
  const [streams, setStreams] = useState({ streams: [] });
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [loadingStreams, setLoadingStreams] = useState(true);
  const [loadingCountries, setLoadingCountries] = useState(true);
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState({});
  const [loadingCampaigns, setLoadingCampaigns] = useState(true);
  const [campaigns, setCampaigns] = useState([]);
  const [selectedStreamId, setSelectedStreamId] = useState(null);
  const [deletedStreamId, setDeletedStreamId] = useState(null);
  const [loading, setLoading] = useState(true);
  const Navigate = useNavigate();

  const handlerPayStream = (streamId, token) => {
    payStreamAPI(streamId, token);
    setSelectedStreamId(streamId);
    setTimeout(() => {
      setSelectedStreamId(null);
    }, 2000);
  };

  const handlerDeleteStream = (streamId, token) => {
    deleteAStreamById(streamId, token);
    setDeletedStreamId(streamId);
    setTimeout(() => {
      setDeletedStreamId(null); 
    }, 2000);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileResponse = await getProfile(token);
        setProfileData(profileResponse.data.data);
        setLoadingProfile(false);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setLoadingProfile(false);
      }
    };

    fetchData();
  }, [token]);

  useEffect(() => {
    if (!loadingProfile) {
      getCountries()
        .then((response) => {
          setCountries(response.data.data);
          setLoadingCountries(false);
        })
        .catch((error) => {
          console.error("Error al obtener los países:", error);
          setLoadingCountries(false);
        });
    }
  }, [loadingProfile]);

  useEffect(() => {
    if (!loadingProfile) {
      getAllCampaigns(token)
        .then((response) => {
          setCampaigns(response.data.campaigns);
          setLoadingCampaigns(false);
        })
        .catch((error) => {
          console.error("Error al obtener las campañas:", error);
          setLoadingCampaigns(false);
        });
    }
  }, [loadingProfile, token]);

  useEffect(() => {
    if (!loadingCountries && !loadingProfile) {
      setCountry(
        countries.find(
          (country) => country.id === profileData.streamer.country_id
        ) || {}
      );
    }
  }, [countries, profileData, loadingCountries]);

  useEffect(() => {
    if (!loadingProfile) {
      const fetchData = async () => {
        try {
          const streamsResponse = await getAllmyStreams(token);
          setStreams(streamsResponse.data);
          setLoadingStreams(false);
        } catch (error) {
          console.error("Error fetching streams:", error);
          setLoadingStreams(false);
        }
      };

      fetchData();
    }
  }, [loadingProfile, token, selectedStreamId, deletedStreamId]);

  useEffect(() => {
    if (
      !loadingProfile &&
      !loadingCountries &&
      !loadingCampaigns &&
      !loadingStreams
    ) {
      setLoading(false);
    }
  }, [loadingProfile, loadingCountries, loadingCampaigns, loadingStreams]);

  const getCampaignName = (campaignId) => {
    const campaign = campaigns.find((campaign) => campaign.id === campaignId);
    return campaign ? campaign.campaign_name : "Unknown";
  };
  const getCampaignPricePerView = (campaignId) => {
    const campaign = campaigns.find((campaign) => campaign.id === campaignId);
    return campaign ? campaign.price_per_single_view : "Unknown";
  };

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
        <div className="container-streamcard-grid">
          <button
            className="button-navigate-streams-resumen"
            onClick={() => Navigate("/getStreamsByStreamerChart")}
          >
            Ver resumen
          </button>
          {streams.streams.length > 0 ? (
            <div className="stramcard-grid">
              {streams.streams.map((stream) => (
                <div key={stream.id} className="streamcard-background">
                  <div className="streamcard-streamer-data">
                    <div className="stramercard-user-data">
                      <p>
                        <span className="bold-and-small">Usuario:</span>{" "}
                        {profileData.user.user_name}
                      </p>
                      <p>
                        <span className="bold-and-small">Nickname:</span>{" "}
                        {profileData.streamer.streamer_nick}
                      </p>
                      <p>
                        <span className="bold-and-small">
                          Total de visualizaciones:
                        </span>{" "}
                        {stream.stream_ammount_of_viewers}
                      </p>
                      <p>
                        <span className="bold-and-small">Pais:</span>{" "}
                        {country.country_name}
                      </p>
                    </div>

                    <div className="streamcard-stream-data">
                      <div className="streamcard-strea-strea-data"></div>
                      <p>
                        <span className="bold-and-small">
                          Título del Stream:
                        </span>{" "}
                        {stream.stream_title}
                      </p>
                      <p>
                        <span className="bold-and-small">Descripcion:</span>{" "}
                        {stream.stream_description}
                      </p>
                      <p>
                        <span className="bold-and-small">Plataforma:</span>{" "}
                        {profileData.streamer.streamer_platform}
                      </p>
                      <p>
                        <span className="bold-and-small">Fecha emisión:</span>{" "}
                        {stream.stream_date}
                      </p>
                      <div className="streamcard-strea-financial-data">
                        <p>
                          <span className="bold-and-small">
                            Campaña activada:
                          </span>{" "}
                          {getCampaignName(stream.campaign_id)}
                        </p>
                        <p>
                          <span className="bold-and-small">
                            Pago por visualizacion:
                          </span>{" "}
                          {getCampaignPricePerView(
                            stream.price_per_single_view
                          )}
                        </p>
                        <p>
                          <span className="bold-and-small">
                            Bono pais emision:
                          </span>{" "}
                          {country.country_bonus}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="payed-and-approved">
                    <div className="payed-and-approved-total-pay">
                      Total a cobrar :{stream.stream_total_to_receive}
                    </div>
                    <div className="payed-and-approved-inner">
                      <p>
                        Stream aprobado :
                        {stream.is_stream_approved ? (
                          <span className="stream-approved">SI</span>
                        ) : (
                          <span className="stream-not-approved">NO</span>
                        )}
                      </p>
                      <p>
                        Stream cobrado :
                        {stream.is_stream_payed ? (
                          <span className="stream-approved">SI</span>
                        ) : (
                          <span className="stream-not-approved">NO</span>
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="images-report-streams">
                    <img
                      className="stream-report-image"
                      src={stream.stream_check_picture_1}
                      alt="Report 1"
                    />
                    <img
                      className="stream-report-image"
                      src={stream.stream_check_picture_2}
                      alt="Report 2"
                    />
                  </div>

                  {!stream.is_stream_payed && stream.is_stream_approved ? (
                    <button
                      className="button-pay-stream"
                      onClick={() => handlerPayStream(stream.id, token)}
                    >
                      cobrar stream
                    </button>
                  ) : null}
                  {stream.is_stream_payed && stream.is_stream_approved ? (
                    <button
                      className="delete1-button"
                      onClick={() => handlerDeleteStream(stream.id, token)}
                    >
                      borrar
                    </button>
                  ) : null}
                  {selectedStreamId === stream.id ? (
                    <div className="modal-stream-payed">
                      Se ha transferido el saldo a tu cartera de Stramer.
                    </div>
                  ) : null}
                  {deletedStreamId === stream.id ? (
                    <div className="modal-stream-payed">Stream eliminado.</div>
                  ) : null}
                </div>
              ))}
            </div>
          ) : (
            <p>No streams available.</p>
          )}
          <button
            className="button-navigate-streams-resumen"
            onClick={() => Navigate("/profile")}
          >
            Volver
          </button>
        </div>
      )}
      <BannerMarcas1 />
      <FooterSection />
    </div>
  );
};
