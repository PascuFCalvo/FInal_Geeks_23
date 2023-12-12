import { useEffect, useState } from "react";
import {
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

export const GetStreamsByStreamer = () => {
  const token = useSelector((state) => state.token.value);
  const [profileData, setProfileData] = useState(null);
  const [streams, setStreams] = useState({ streams: [] });
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState({});
  const [campaigns, setCampaigns] = useState([]);

  const payStream = (streamId) => {
    console.log(`Cobrar stream: ${streamId}`);
    payStreamAPI(streamId, token)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error al cobrar stream:", error);
      });
  };

  const handlerPayStream = (streamId) => {
    payStream(streamId);
  };

  useEffect(() => {
    getAllCampaigns(token)
      .then((response) => {
        setCampaigns(response.data.campaigns);
      })
      .catch((error) => {
        console.error("Error al obtener las campañas:", error);
      });
  }, []);

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
        const profileResponse = await getProfile(token);
        setProfileData(profileResponse.data.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchData();
  }, [token]);

  useEffect(() => {
    if (profileData) {
      setCountry(
        countries.find(
          (country) => country.id === profileData.streamer.country_id
        ) || {}
      );
    }
  }, [countries, profileData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const streamsResponse = await getAllmyStreams(token);
        setStreams(streamsResponse.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching streams:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  return (
    <div>
      <NavBar />
      <p>My Streams</p>
      {loading ? (
        <p>Loading streams...</p>
      ) : (
        <div>
          {streams.streams.length > 0 ? (
            <ul>
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
                          {campaigns[0].campaign_name}
                        </p>
                        <p>
                          <span className="bold-and-small">
                            Pago por visualizacion:
                          </span>{" "}
                          {campaigns[0].price_per_single_view}
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
                        Stream aprovado :
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

                  {!stream.is_stream_payed ? (
                    <button
                      className="button-pay-stream"
                      onClick={() => handlerPayStream(stream.id)}
                    >
                      cobrar stream
                    </button>
                  ) : null}
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
                </div>
              ))}
            </ul>
          ) : (
            <p>No streams available.</p>
          )}
        </div>
      )}
      <FooterSection />
    </div>
  );
};
