import { useEffect, useState } from "react";
import { editUserProfile, getProfile } from "../../services/apiCalls";
import "./EditUserInfo.css";

const EditUserInfo = () => {
  const token = localStorage.getItem("token");

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
      return imageData.url;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const functionHandler = (e) => {
    const { name, value } = e.target;

    setProfileData((prevData) => ({
      user: {
        ...prevData.user,
        [name]: value,
      },
    }));
  };

  const sendData = async () => {
    try {
      const updatedProfileData = {
        ...profileData,
        user_avatar_link: imageUrl,
        user_name: profileData.user.user_name,
        user_email: profileData.user.user_email,
        user_phone: profileData.user.user_phone,
      };

      editUserProfile(updatedProfileData, token)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error al enviar el formulario:", error);
        });
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
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
          onChange={(e) => setImage(e.target.files[0])}
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
        onChange={functionHandler}
      />
      <input
        className="input-form-streamer-edit"
        disabled={isEnabled}
        type="text"
        name="user_email"
        placeholder=""
        value={profileData.user?.user_email || ""}
        onChange={functionHandler}
      />
      <input
        className="input-form-streamer-edit"
        disabled={isEnabled}
        type="text"
        name="user_phone"
        placeholder=""
        value={profileData.user?.user_phone || ""}
        onChange={functionHandler}
      />

      {isEnabled ? (
        <div className="editDesign" onClick={() => setIsEnabled(!isEnabled)}>
          Edit
        </div>
      ) : (
        <div className="sendDesign" onClick={() => sendData()}>
          Send
        </div>
      )}
    </div>
  );
};

export default EditUserInfo;
