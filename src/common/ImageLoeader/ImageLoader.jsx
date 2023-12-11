import { useState } from "react";
import "./ImageLoader.css";

export const ImageLoader = () => {
  const [image, setImage] = useState("");

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
      console.log(imageData);
      alert("Imagen subida correctamente");
      return imageData.url;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  return (
    <div>
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
    </div>
  );
};
