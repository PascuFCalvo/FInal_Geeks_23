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

  const handleImage1Change = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({ ...prevData, image1: file }));
  };

  const handleImage2Change = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({ ...prevData, image2: file }));
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
      <form onSubmit={handleSubmit}>
        {/* Stream Information Fields */}
        <label>
          Stream Title:
          <input
            type="text"
            name="stream_title"
            value={formData.stream_title}
            onChange={handleChange}
          />
        </label>

        <label>
          Stream Description:
          <textarea
            name="stream_description"
            value={formData.stream_description}
            onChange={handleChange}
          />
        </label>

        <label>
          Stream Date:
          <input
            type="date"
            name="stream_date"
            value={formData.stream_date}
            onChange={handleChange}
          />
        </label>
        <label>
          Total Amount of views:
          <input
            type="number"
            name="stream_ammount_of_viewers"
            value={formData.stream_ammount_of_viewers}
            onChange={handleChange}
          />
        </label>

        <label>
          Upload Picture 1:
          <input type="file" onChange={handleImage1Change} />
        </label>

        <label>
          Upload Picture 2:
          <input type="file" onChange={handleImage2Change} />
        </label>

        <label>
          Country:
          <select
            name="country_id"
            value={formData.country_id}
            onChange={handleChange}
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
          >
            <option value="">Select Campaign</option>
            {formData.campañas.map((campaña) => (
              <option key={campaña.id} value={campaña.id}>
                {campaña.campaign_name}
              </option>
            ))}
          </select>
        </label>

        {/* Stream Financial Information */}
        {/* Add more fields as needed */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
