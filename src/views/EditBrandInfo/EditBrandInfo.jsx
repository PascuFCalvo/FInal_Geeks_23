import { useEffect, useState } from "react";
import {
  editBrandProfile,
  editUserProfile,
  getProfile,
} from "../../services/apiCalls";
import "./EditBrandInfo.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../tokenSlice";
import NavBar from "../NavBar/NavBar";
import BannerMarcas1 from "../BannerMarcas1/BannerMarcas1";
import FooterSection from "../FooterSection/FooterSection";

const EditBrandInfo = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.token.value);

  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [logo, setLogo] = useState(null);
  const [profileData, setProfileData] = useState({
    user: {
      user_name: "",
      user_email: "",
      user_phone: "",
      user_avatar_link: "",
    },
    brand: {
      brand_name: "",
      brand_description: "",
      brand_logo_link: "",
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

  const handleBrandChange = (name, value) => {
    setProfileData((prevData) => ({
      ...prevData,
      brand: {
        ...prevData.brand,
        [name]: value,
      },
    }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleLogoChange = (e) => {
    setLogo(e.target.files[0]);
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
      const imageUrl = await submitImage(image);
      console.log(imageUrl);
      const logoUrl = await submitImage(logo);
      console.log(logoUrl);
      const { user_name, user_email, user_phone } = profileData.user;

      if (!user_name || !user_email || !user_phone) {
        console.error("Error: User name, email, and phone are required.");
        return;
      }

      const updatedProfileData = {
        user: {
          ...profileData.user,
          user_avatar_link: imageUrl || profileData.user.user_avatar_link,
          user_name: user_name || "",
          user_email: user_email || "",
          user_phone: user_phone || "",
        },
        brand: {
          ...profileData.brand,
          brand_logo_link: logoUrl || profileData.brand.brand_logo_link,
          brand_name: profileData.brand.brand_name || "",
          brand_description: profileData.brand.brand_description || "",
        },
      };

      editBrandProfile(updatedProfileData.brand, token);
      editUserProfile(updatedProfileData.user, token);

      alert("Perfil actualizado correctamente");

      dispatch(removeToken());
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error("Error al editar el usuario:", error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="edit-profile-panel-background">
        <div className="edit-profile-panel-design">
          <div>
            <img
              className="edit-profile-avatar-profile"
              src={profileData.user.user_avatar_link}
            ></img>
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
          <div>
            <img
              className="edit-profile-avatar-profile"
              src={profileData.brand.brand_logo_link}
            ></img>
            <label>Selecciona un logo para tu marca</label>
            <input
              className="image-input-form"
              name="logo-pic"
              id="logo-pic"
              type="file"
              onChange={handleLogoChange}
            ></input>
            <label htmlFor="logo-pic">
              <span className="image-input-form__image-input-form-name">
                {logo?.name || "No hay imagen seleccionada"}
              </span>
              <span className="image-input-form__image-input-form-button">
                Buscar archivo
              </span>
            </label>
          </div>

          <input
            className="input-form-streamer-edit"
            disabled={isEnabled}
            type="text"
            name="user_name"
            placeholder=""
            value={profileData.user?.user_name || ""}
            onChange={(e) => handleProfileChange("user_name", e.target.value)}
          />
          <input
            className="input-form-streamer-edit"
            disabled={isEnabled}
            type="text"
            name="user_email"
            placeholder=""
            value={profileData.user?.user_email || ""}
            onChange={(e) => handleProfileChange("user_email", e.target.value)}
          />
          <input
            className="input-form-streamer-edit"
            disabled={isEnabled}
            type="text"
            name="user_phone"
            placeholder=""
            value={profileData.user?.user_phone || ""}
            onChange={(e) => handleProfileChange("user_phone", e.target.value)}
          />

          {profileData.user.user_role === "brand" && (
            <>
              <input
                className="input-form-streamer-edit"
                disabled={isEnabled}
                type="text"
                name="streamer_nick"
                placeholder="Streamer Nick"
                value={profileData.brand?.brand_name || ""}
                onChange={(e) =>
                  handleBrandChange("brand_name", e.target.value)
                }
              />
              <input
                className="input-form-streamer-edit"
                disabled={isEnabled}
                type="text"
                name="streamer_platform"
                placeholder="Streamer Platform"
                value={profileData.brand?.brand_description || ""}
                onChange={(e) =>
                  handleBrandChange("brand_description", e.target.value)
                }
              />
              <p className="change-password-user">¿Cambiar contraseña?</p>
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

export default EditBrandInfo;
