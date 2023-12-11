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

const EditBrandInfo = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.token.value);

  const navigate = useNavigate();
  const [image, setImage] = useState(null); // Cambiado a null para manejar mejor la carga inicial
  const [imageUrl, setImageUrl] = useState("");
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
    },
  });
  const [isEnabled, setIsEnabled] = useState(true);

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

  const submitImage = async () => {
    if (!image) {
      alert("Seleccione una imagen antes de cargarla.");
      return;
    }

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
      

      setImageUrl(imageData.url);
      alert("Imagen subida correctamente");
    } catch (err) {
      console.error("Error al subir la imagen:", err);
    }
  };

  const sendData = async () => {
    try {
      const { user_name, user_email, user_phone } = profileData.user;

      if (!user_name || !user_email || !user_phone) {
        console.error("Error: User name, email, and phone are required.");
        return;
      }

      const updatedProfileData = {
        user: {
          ...profileData.user,
          user_avatar_link: imageUrl,
          user_name: user_name || "", // Asegurarse de que user_name no sea nulo
          user_email,
          user_phone,
        },
        brand: {
          ...profileData.brand,
          brand_name: profileData.brand.brand_name || "", // Manejar valores nulos o undefined
          brand_description: profileData.brand.brand_description || "", // Manejar valores nulos o undefined
        },
      };

      

      editBrandProfile(updatedProfileData.brand, token);
      editUserProfile(updatedProfileData.user, token);

      alert("Usuario editado correctamente");
      dispatch(removeToken());
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error("Error al editar el usuario:", error);
    }
  };

  return (
    <div className="profileDesign">
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
      <div className="button-send-pic" onClick={submitImage}>
        Upload
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
            onChange={(e) => handleBrandChange("brand_name", e.target.value)}
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
        </>
      )}

      {isEnabled ? (
        <div className="editDesign" onClick={() => setIsEnabled(!isEnabled)}>
          Edit
        </div>
      ) : (
        <div className="sendDesign" onClick={sendData}>
          Send
        </div>
      )}
    </div>
  );
};

export default EditBrandInfo;
