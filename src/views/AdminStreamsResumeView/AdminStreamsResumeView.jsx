import { useEffect, useState } from "react";
import "./AdminStreamsResumeView.css";
import {
  getAllCampaigns,
  getAllStreamers,
  getAllStreams,
  getCountries,
} from "../../services/apiCalls";
import { useSelector } from "react-redux";
import { format } from "date-fns";

const AdminStreamsResumeView = () => {
  const token = useSelector((state) => state.token.value);

  const [streams, setStreams] = useState([]);
  const [countries, setCountries] = useState([]);
  const [streamers, setStreamers] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Agregado el estado isLoading

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const streamersResponse = await getAllStreamers(token);
        setStreamers(streamersResponse.data.streamers);

        const countriesResponse = await getCountries(token);
        setCountries(countriesResponse.data.data);

        const streamsResponse = await getAllStreams(token);
        setStreams(streamsResponse.data.streams);

        const campaignsResponse = await getAllCampaigns(token);
        setCampaigns(campaignsResponse.data.campaigns);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [token]);

  const getCountryName = (countryId) => {
    const country = countries.find((country) => country.id === countryId);
    return country ? country.country_name : "Unknown";
  };

  const getStreamerName = (streamerId) => {
    const streamer = streamers.find((streamer) => streamer.id === streamerId);
    return streamer ? streamer.streamer_nick : "Unknown";
  };

  const getCampaignName = (campaignId) => {
    const campaign = campaigns.find((campaign) => campaign.id === campaignId);
    return campaign ? campaign.campaign_name : "Unknown";
  };

  return (
    <>
      <div>
        <div className="streams-table-resume-content-background">
          <div className="dashboard-title">STREAMS</div>
          {isLoading ? (
            <div className="spinner-screen-dashboard">
              <p>Cargando streams...</p>
              <img
                src="../src/assets/images/GIFS/Spinner.gif"
                alt="loading"
                className="loading-gif"
              />
            </div>
          ) : (
            <table className="streams-resume-table">
              <thead className="streams-resume-table-title">
                <tr>
                  <th className="first-column">ID</th>
                  <th>Streamer ID</th>
                  <th>Title</th>
                  <th>Descripcion</th>
                  <th>Fecha</th>
                  <th>Visualizaciones</th>
                  <th>Check Picture 1</th>
                  <th>Check Picture 2</th>
                  <th>Campaña</th>
                  <th>Pais</th>
                  <th>Creacion</th>
                  <th>Ultima modificacion</th>
                  <th>Aprobado</th>
                  <th>Credito generado</th>
                  <th className="last-column">Pagado</th>
                </tr>
              </thead>
              <tbody>
                {streams.map((stream) => (
                  <tr key={stream.id}>
                    <td className="streams-resume-table-rows first-column">
                      {stream.id}
                    </td>
                    <td className="streams-resume-table-rows">
                      {getStreamerName(stream.streamer_id)}
                    </td>
                    <td className="streams-resume-table-rows">
                      {stream.stream_title}
                    </td>
                    <td className="streams-resume-table-rows">
                      {stream.stream_description}
                    </td>
                    <td className="streams-resume-table-rows">
                      {stream.stream_date}
                    </td>
                    <td className="streams-resume-table-rows">
                      {stream.stream_ammount_of_viewers}
                    </td>
                    <td className="streams-resume-table-rows">
                      <img
                        src={stream.stream_check_picture_1}
                        alt="Check Picture 1"
                        width={50}
                      />
                    </td>
                    <td className="streams-resume-table-rows">
                      <img
                        src={stream.stream_check_picture_2}
                        alt="Check Picture 2"
                        width={50}
                      />
                    </td>
                    <td className="streams-resume-table-rows">
                      {getCampaignName(stream.campaign_id)}
                    </td>
                    <td className="streams-resume-table-rows">
                      {getCountryName(stream.country_id)}
                    </td>
                    <td className="streams-resume-table-rows">
                      {format(new Date(stream.created_at), "dd-MM-yyyy")}
                    </td>
                    <td className="streams-resume-table-rows">
                      {format(new Date(stream.updated_at), "dd-MM-yyyy")}
                    </td>
                    <td className="streams-resume-table-rows">
                      {stream.is_stream_approved ? "SI" : "NO"}
                    </td>
                    <td className="streams-resume-table-rows">
                      {stream.stream_total_to_receive}
                    </td>
                    <td className="streams-resume-table-rows last-column">
                      {stream.is_stream_payed ? "SI" : "NO"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminStreamsResumeView;
