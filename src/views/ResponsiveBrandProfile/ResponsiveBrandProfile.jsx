import { useSelector } from "react-redux";
import { getProfile } from "../../services/apiCalls";
import "./ResponsiveBrandProfile.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ResponsiveBrandProfile = () => {
  const [profile, setProfile] = useState(null);
  const token = useSelector((state) => state.token.value);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      getProfile(token).then((res) => {
        setProfile(res.data.data);
        console.log(res.data.data);
      });
    };
    fetchData();
  }, []);

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
             <img src={profile.user.user_avatar_link}></img>
           </div>
         </div>
         <div className="profileResponsive-streamer-card">
           <div className="profileResponsive-streamer-card-streamer-data">
             <p className="profileResponsive-streamer-card-streamer-data-nick">
               {profile.brand.brand_name}
             </p>
             <p className="profileResponsive-streamer-card-streamer-data-text">
               {profile.brand.brand_CIF}
             </p>
             <p className="profileResponsive-streamer-card-streamer-data-text">
               {profile.brand.brand_description}
             </p>
             <p className="profileResponsive-streamer-card-streamer-data-text">
               {""}
             </p>
           </div>
           <img
             className="profileResponsive-streamer-card-streamer-stream-pic "
             src={profile.brand.brand_logo_link}
           ></img>
           <div className="profileResponsive-streamer-card-streamer-buttons">
             <button
               className="profileResponsive-streamer-card-streamer-buttons-ver"
               onClick={() => {
                 navigate("/getStreamsByStreamer");
               }}
             >
               Ver mis strems
             </button>
             <button
               className="profileResponsive-streamer-card-streamer-buttons-report"
               onClick={() => {
                 navigate("/ReportAStream");
               }}
             >
               Reportar un stream
             </button>
           </div>
         </div>
       </div>
     )}
   </div>
 );
};
