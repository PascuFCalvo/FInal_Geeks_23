import { useSelector } from "react-redux";
import { getProfile } from "../../services/apiCalls";
import "./ResponsiveUserProfile.css";
import { useEffect, useState } from "react";

export const ResponsiveUserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [streams, setStreams] = useState(false);
  const token = useSelector((state) => state.token.value);

  useEffect(() => {
    const fetchData = async () => {
      getProfile(token).then((res) => {
        setProfile(res.data.data);
      });
    };
    fetchData();

    if (profile && profile.streamer.streams.length > 0) {
      setStreams(true);
    }
  }, [profile, token]);

  return (
    <div>
      {profile && (
        <div className="profileResponsive-background">
          <div className="profileResponsive-user-card">
            <button className="profileResponsive-button-close">x</button>
            <div className="profileResponsive-user-card-profile-data">
              <p className="profileResponsive-user-card-profile-data-text">
                {profile.user.user_name}
              </p>
              <p className="profileResponsive-user-card-profile-data-text-email">
                {profile.user.user_email}
              </p>
              <p className="profileResponsive-user-card-profile-data-text-role">
                {profile.user.user_role}
              </p>
            </div>
            <div className="profileResponsive-user-card-profile-pic">
              <img src="https://res.cloudinary.com/dlcgfuujm/image/upload/v1702141881/samples/upscale-face-1.jpg"></img>
            </div>
          </div>
          <div className="profileResponsive-streamer-card">
            <div className="profileResponsive-streamer-card-streamer-data">
              <p className="profileResponsive-streamer-card-streamer-data-nick">
                {profile.streamer.streamer_nick}
              </p>
              <p className="profileResponsive-streamer-card-streamer-data-text">
                {profile.streamer.country.country_name}
              </p>
              <p className="profileResponsive-streamer-card-streamer-data-text">
                {profile.streamer.streamer_platform}
              </p>
              <p className="profileResponsive-streamer-card-streamer-data-text">
                {streams ? "Streams activos: SI" : "Streams activos : NO"}
              </p>
            </div>
            <img
              className="profileResponsive-streamer-card-streamer-stream-pic "
              src={profile.streamer.image_stream}
            ></img>
            <div className="profileResponsive-streamer-card-streamer-buttons">
              <button className="profileResponsive-streamer-card-streamer-buttons-ver">
                Ver mis strems
              </button>
              <button className="profileResponsive-streamer-card-streamer-buttons-report">
                Reportar un stream
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
