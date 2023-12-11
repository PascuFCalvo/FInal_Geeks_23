import { useEffect, useState } from "react";
import {
  getAllCampaigns,
  getAllmyStreams,
  getCountries,
  getProfile,
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
                <li key={stream.id} className="streamcard-background">
                  <p>User: {profileData.user.user_name}</p>
                  <p>Streamer: {profileData.streamer.streamer_nick}</p>
                  <p>Title: {stream.stream_title}</p>
                  <p>Descripcion: {stream.stream_description}</p>
                  <p>Viewer Count: {stream.stream_ammount_of_viewers}</p>
                  <p>Platform: {profileData.streamer.streamer_platform}</p>
                  <p>Descripcion: {stream.stream_date}</p>
                  <p>Campaña:{campaigns[0].campaign_name}</p>
                  <p>PPV:{campaigns[0].price_per_single_view}</p>
                  <p>Pais: {country.country_name}</p>
                  <p>Bonus: {country.country_bonus}</p>
                  <p>Total a cobrar :{stream.stream_total_to_receive}</p>
                  <p>
                    Stream aprovado :
                    {stream.is_stream_approved ? (
                      <span className="stream-approved">SI</span>
                    ) : (
                      <span className="stream-not-approved">NO</span>
                    )}
                  </p>
                  <div>
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
                </li>
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
