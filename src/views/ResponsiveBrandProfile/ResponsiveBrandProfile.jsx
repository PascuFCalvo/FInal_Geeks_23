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
        setProfile(res.data);
        console.log(profile);
      });
    };
    fetchData();

    
  }, []);

  return (
    <div>
      <p>hola</p>
    </div>
  );
};
