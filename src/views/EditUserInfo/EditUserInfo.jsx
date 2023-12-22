import { useEffect, useState } from "react";
import {
  editStreamerProfile,
  editUserProfile,
  getProfile,
} from "../../services/apiCalls";
import "./EditUserInfo.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../tokenSlice";
import NavBar from "../NavBar/NavBar";
import BannerMarcas1 from "../BannerMarcas1/BannerMarcas1";
import FooterSection from "../FooterSection/FooterSection";

const EditUserInfo = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.token.value);

  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  // eslint-disable-next-line no-unused-vars

  const [profileData, setProfileData] = useState({
    user: {
      user_name: "",
      user_email: "",
      user_phone: "",
      user_avatar_link: "",
    },
    streamer: {
      streamer_nick: "",
      streamer_platform: "",
    },
  });
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getProfile(token)
      .then((response) => {
        setProfileData(response.data.data);
      })
      .catch((error) => {
        console.error("Error al obtener el usuario:", error);
      });
  }, [token]);

  const handleProfileChange = (name, value) => {
    setProfileData((prevData) => ({
      ...prevData,
      user: {
        ...prevData.user,
        [name]: value,
      },
    }));
  };

  const handleStreamerChange = (name, value) => {
    setProfileData((prevData) => ({
      ...prevData,
      streamer: {
        ...prevData.streamer,
        [name]: value,
      },
    }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const submitImage = async (image) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "dt5zg2l9");
    data.append("cloud_name", "dlcgfuujm");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dlcgfuujm/image/upload",
        {
          method: "post",
          body: data,
        }
      );
      const imageData = await res.json();

      return imageData.url;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const sendData = async () => {
    try {
      const imageUrl1 = await submitImage(image);
      console.log(imageUrl1);

      const { user_name, user_email, user_phone } = profileData.user;

      if (!user_name || !user_email || !user_phone) {
        console.error("Error: User name, email, and phone are required.");
        return;
      }

      const updatedProfileData = {
        user: {
          ...profileData.user,
          user_avatar_link: imageUrl1 || profileData.user.user_avatar_link,
          user_name: user_name || "",
          user_email: user_email || "",
          user_phone: user_phone || "",
        },
        streamer: {
          ...profileData.streamer,
          streamer_nick: profileData.streamer.streamer_nick || "",
          streamer_platform: profileData.streamer.streamer_platform || "",
        },
      };

      await editStreamerProfile(updatedProfileData.streamer, token);
      await editUserProfile(updatedProfileData.user, token);

      alert("Perfil actualizado correctamente");

      dispatch(removeToken());
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error("Error al editar el usuario:", error);
    }
  };

  console.log(profileData);
  return (
    <>
      <NavBar />
      <div className="edit-profile-panel-background">
        <div className="edit-profile-panel-design">
          <img
            className="edit-profile-avatar-profile"
            src={profileData.user.user_avatar_link}
          ></img>
          <div>
            <label>Selecciona una foto de perfil</label>
            <input
              className="image-input-form"
              name="profile-pic"
              id="profile-pic"
              type="file"
              onChange={handleImageChange}
            ></input>
            <label htmlFor="profile-pic">
              <span className="image-input-form__image-input-form-name">
                {image?.name || "No hay imagen seleccionada"}
              </span>
              <span className="image-input-form__image-input-form-button">
                Buscar archivo
              </span>
            </label>
          </div>
          <p>Nombre de usuario</p>
          <input
            className="input-form-streamer-edit"
            disabled={isEnabled}
            type="text"
            name="user_name"
            placeholder=""
            value={profileData.user?.user_name || ""}
            onChange={(e) => handleProfileChange("user_name", e.target.value)}
          />
          <p>Email</p>
          <input
            className="input-form-streamer-edit"
            disabled={isEnabled}
            type="text"
            name="user_email"
            placeholder=""
            value={profileData.user?.user_email || ""}
            onChange={(e) => handleProfileChange("user_email", e.target.value)}
          />
          <p>Telefono</p>
          <input
            className="input-form-streamer-edit"
            disabled={isEnabled}
            type="text"
            name="user_phone"
            placeholder=""
            value={profileData.user?.user_phone || ""}
            onChange={(e) => handleProfileChange("user_phone", e.target.value)}
          />

          {profileData.user.user_role === "streamer" && (
            <>
              <p>tu Nick</p>
              <input
                className="input-form-streamer-edit"
                disabled={isEnabled}
                type="text"
                name="streamer_nick"
                placeholder="Streamer Nick"
                value={profileData.streamer?.streamer_nick || ""}
                onChange={(e) =>
                  handleStreamerChange("streamer_nick", e.target.value)
                }
              />
              <p>Plataforma de Stream</p>
              <input
                className="input-form-streamer-edit"
                disabled={isEnabled}
                type="text"
                name="streamer_platform"
                placeholder="Streamer Platform"
                value={profileData.streamer?.streamer_platform || ""}
                onChange={(e) =>
                  handleStreamerChange("streamer_platform", e.target.value)
                }
              />
              <p className ="change-password-user">¿Cambiar contraseña?</p>
            </>
          )}

          <div className="buttons-edit-profile-user">
            <div
              className="back-to-main-edit-profile"
              onClick={() => navigate("/profile")}
            >
              Volver
            </div>
            {isEnabled ? (
              <div
                className="edit-design"
                onClick={() => setIsEnabled(!isEnabled)}
              >
                Edit
              </div>
            ) : (
              <div className="send-design" onClick={sendData}>
                Send
              </div>
            )}
          </div>
        </div>
      </div>
      <BannerMarcas1 />
      <FooterSection />
    </>
  );
};

export default EditUserInfo;
