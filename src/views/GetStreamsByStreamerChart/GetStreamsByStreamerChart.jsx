import { useEffect, useState } from "react";
import {
  deleteAStreamById,
  getAllCampaigns,
  getAllmyStreams,
  getCountries,
  getProfile,
  payStreamAPI,
} from "../../services/apiCalls";
import "./GetStreamsByStreamerChart.css";
import NavBar from "../NavBar/NavBar";
import FooterSection from "../FooterSection/FooterSection";
import { useSelector } from "react-redux";
import BannerMarcas1 from "../BannerMarcas1/BannerMarcas1";
import { useNavigate } from "react-router-dom";

export const GetStreamsByStreamerChart = () => {
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
      setSelectedStreamId(null);
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
        <div className="streams1-table-resume-content-background">
          <button
            className="button-navigate-streams-resumen"
            onClick={() => Navigate("/getStreamsByStreamer")}
          >
            Ver detalles
          </button>
          {streams.streams.length > 0 ? (
            <table className="streams1-resume-table">
              <thead className="streams1-resume-table-title">
                <tr>
                  <th className="first-column ">Usuario</th>
                  <th>Nickname</th>
                  <th>Total de visualizaciones</th>
                  <th>País</th>
                  <th>Título del Stream</th>
                  <th>Descripción</th>
                  <th>Plataforma</th>
                  <th>Fecha emisión</th>
                  <th>Campaña activada</th>
                  <th>Reportes</th>
                  <th>Pago por visualización</th>
                  <th>Bono país emisión</th>
                  <th>Total a cobrar</th>
                  <th>Stream aprobado</th>
                  <th>Stream cobrado</th>
                  <th className="last-column">Cobrar Stream</th>
                </tr>
              </thead>
              <tbody>
                {streams.streams.map((stream) => (
                  <tr key={stream.id}>
                    <td className="streams-resume-table-rows first-column ">
                      {profileData.user.user_name}
                    </td>
                    <td className="streams-resume-table-rows">
                      {profileData.streamer.streamer_nick}
                    </td>
                    <td className="streams-resume-table-rows">
                      {stream.stream_ammount_of_viewers}
                    </td>
                    <td className="streams-resume-table-rows">
                      {country.country_name}
                    </td>
                    <td className="streams-resume-table-rows">
                      {stream.stream_title}
                    </td>
                    <td className="streams-resume-table-rows">
                      {stream.stream_description}
                    </td>
                    <td className="streams-resume-table-rows">
                      {profileData.streamer.streamer_platform}
                    </td>
                    <td className="streams-resume-table-rows">
                      {stream.stream_date}
                    </td>
                    <td className="streams-resume-table-rows">
                      {
                        campaigns[parseInt(stream.campaign_id) - 1]
                          .campaign_name
                      }
                    </td>
                    <td className="streams-resume-table-rows">
                      <div className="images-report-streams">
                        <img
                          className="check1-picture"
                          src={stream.stream_check_picture_1}
                          alt="Report 1"
                          height={50}
                        />
                        <img
                          className="check1-picture"
                          src={stream.stream_check_picture_2}
                          alt="Report 2"
                          height={50}
                        />
                      </div>
                    </td>
                    <td className="streams-resume-table-rows">
                      {
                        campaigns[parseInt(stream.campaign_id) - 1]
                          .price_per_single_view
                      }
                    </td>
                    <td className="streams-resume-table-rows">
                      {country.country_bonus}
                    </td>
                    <td className="streams-resume-table-rows">
                      {stream.stream_total_to_receive}
                    </td>
                    <td className="streams-resume-table-rows">
                      {stream.is_stream_approved ? "SI" : "NO"}
                    </td>
                    <td className="streams-resume-table-rows">
                      {stream.is_stream_payed ? "SI" : "NO"}
                    </td>
                    <td className="streams-resume-table-rows">
                      {!stream.is_stream_payed && stream.is_stream_approved ? (
                        <button
                          className="approve1-button"
                          onClick={() => handlerPayStream(stream.id, token)}
                        >
                          cobrar
                        </button>
                      ) : (
                        <button
                          className="delete1-button"
                          onClick={() => handlerDeleteStream(stream.id, token)}
                        >
                          borrar
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
              <button
                className="button-navigate-streams-resumen"
                onClick={() => Navigate("/profile")}
              >
                Volver
              </button>
            </table>
          ) : (
            <p>No streams available.</p>
          )}
        </div>
      )}
      <BannerMarcas1 />
      <FooterSection />
    </div>
  );
};