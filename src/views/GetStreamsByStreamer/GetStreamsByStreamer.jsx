import { useEffect, useState } from "react";
import {
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
  const [streams, setStreams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState("");
  const [country, setCountry] = useState("");
  // const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    getCountries()
      .then((response) => {
        setCountries(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error al obtener los países:", error);
      });
  }, []);
  console.log(countries);

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

  console.log(profileData);

  //obtener el pais del usuario filtrando por su streamer.country_id

  useEffect(() => {
    if (profileData) {
      setCountry(
        countries.find(
          (country) => country.id === profileData.streamer.country_id
        )
      );
    }
  }, [countries, profileData]);

  console.log(country);

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

  console.log(streams.streams);

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
                  <p>Pais: {country.country_name}</p>
                  <p>Bonus:{country.country_bonus}</p>
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
                    ></img>
                    <img
                      className="stream-report-image"
                      src={stream.stream_check_picture_2}
                    ></img>
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
