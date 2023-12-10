import { useEffect, useState } from "react";
import { editUserProfile, getProfile } from "../../services/apiCalls";
import "./EditUserInfo.css";
import { useNavigate } from "react-router-dom";

const EditUserInfo = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [profileData, setProfileData] = useState({
    user: {
      user_name: "",
      user_email: "",
      user_phone: "",
      user_avatar_link: "",
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
      user: {
        ...prevData.user,
        [name]: value,
      },
    }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const submitImage = async () => {
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
      console.log(imageData.url);

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
        ...profileData.user,
        user_avatar_link: imageUrl,
        user_name: profileData.user.user_name,
        user_email: profileData.user.user_email,
        user_phone: profileData.user.user_phone,
      };

      console.log("Updated Profile Data:", updatedProfileData);

      editUserProfile(updatedProfileData, token);

      alert("Usuario editado correctamente");
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
            {image.name}
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

export default EditUserInfo;
