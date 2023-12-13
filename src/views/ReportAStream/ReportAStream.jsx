import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  getAllCampaigns,
  getCountries,
  getProfile,
  reportAStream,
} from "../../services/apiCalls";
import "./ReportAStream.css";

export const ReportAStream = () => {
  const token = useSelector((state) => state.token.value);

  const [image, setImage] = useState("");
  const [image2, setImage2] = useState("");
  const [formData, setFormData] = useState({
    streamer_id: "",
    stream_title: "",
    stream_description: "",
    stream_date: "",
    stream_ammount_of_viewers: "",
    stream_check_picture_1: null,
    stream_check_picture_2: null,
    campaign_id: "",
    country_id: "",
    stream_total_to_receive: "",
    profileData: null,
    paises: [],
    campañas: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileResponse = await getProfile(token);
        setFormData((prevData) => ({
          ...prevData,
          profileData: profileResponse.data.data,
        }));
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchData();
  }, [token]);

  useEffect(() => {
    getCountries()
      .then((response) => {
        setFormData((prevData) => ({
          ...prevData,
          paises: response.data.data,
        }));
      })
      .catch((error) => {
        console.error("Error al obtener los países:", error);
      });
  }, []);

  useEffect(() => {
    getAllCampaigns(token)
      .then((response) => {
        setFormData((prevData) => ({
          ...prevData,
          campañas: response.data.campaigns,
        }));
      })
      .catch((error) => {
        console.error("Error al obtener las Campañas:", error);
      });
  }, [token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const imageUrl1 = await submitImage(formData.image1);
    const imageUrl2 = await submitImage(formData.image2);

    const newStreamData = {
      streamer_id: formData.profileData.user.id,
      stream_title: formData.stream_title,
      stream_description: formData.stream_description,
      stream_date: formData.stream_date,
      stream_ammount_of_viewers: formData.stream_ammount_of_viewers,
      stream_check_picture_1: imageUrl1,
      stream_check_picture_2: imageUrl2,
      campaign_id: formData.campaign_id,
      country_id: formData.country_id,
      stream_total_to_receive: formData.stream_total_to_receive,
    };

    await reportAStream(newStreamData, token);
    alert("Stream reported successfully!");
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

  return (
    <div>
      <div className="body-report-stream">
        <form onSubmit={handleSubmit} className="form-body-streamer">
          <label>
            Titulo del Stream:
            <input
              type="text"
              name="stream_title"
              value={formData.stream_title}
              onChange={handleChange}
              className="input-form-stream"
            />
          </label>

          <label>
            Description:
            <input
              name="stream_description"
              value={formData.stream_description}
              onChange={handleChange}
              className="input-form-stream"
            />
          </label>

          <label>
            Fecha:
            <input
              type="date"
              name="stream_date"
              value={formData.stream_date}
              onChange={handleChange}
              className="input-form-stream"
            />
          </label>
          <label>
            Visitas totales:
            <input
              type="number"
              name="stream_ammount_of_viewers"
              value={formData.stream_ammount_of_viewers}
              onChange={handleChange}
              className="input-form-stream"
            />
          </label>

          <label>
            Pais:
            <select
              name="country_id"
              value={formData.country_id}
              onChange={handleChange}
              className="selectCountry"
            >
              <option value="">Select Country</option>
              {formData.paises.map((pais) => (
                <option key={pais.id} value={pais.id}>
                  {pais.country_name}
                </option>
              ))}
            </select>
          </label>

          <label>
            Campaña:
            <select
              name="campaign_id"
              value={formData.campaign_id}
              onChange={handleChange}
              className="selectCountry"
            >
              <option value="">Select Campaign</option>
              {formData.campañas.map((campaña) => (
                <option key={campaña.id} value={campaña.id}>
                  {campaña.campaign_name}
                </option>
              ))}
            </select>
          </label>
          <div>
            <label>Foto comprobante 1 (Datos del stream)</label>
            <input
              className="image-input-form"
              name="comprobante-image-1"
              id="comprobante-image-1"
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            ></input>
            <label htmlFor="comprobante-image-1">
              <span className="image-input-form__image-input-form-name">
                {image.name}
              </span>
              <span className="image-input-form__image-input-form-button">
                Buscar archivo
              </span>
            </label>
          </div>
          <div>
            <label>Foto comprobante 2 (Vista de la publicidad)</label>
            <input
              className="image-input-form"
              name="comprobante-image-2"
              id="comprobante-image-2"
              type="file"
              onChange={(e) => setImage2(e.target.files[0])}
            ></input>
            <label htmlFor="comprobante-image-2">
              <span className="image-input-form__image-input-form-name">
                {image2.name}
              </span>
              <span className="image-input-form__image-input-form-button">
                Buscar archivo
              </span>
            </label>
          </div>

          <button type="submit" className="button-send-pic">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
