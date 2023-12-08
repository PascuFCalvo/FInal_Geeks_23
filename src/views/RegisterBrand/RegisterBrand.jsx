import { useState } from "react";
import "./RegisterBrand.css";
import { useNavigate } from "react-router-dom";
import { registerBrand } from "../../services/apiCalls";

const RegisterBrand = () => {
  const navigate = useNavigate();

  const [brand, setBrand] = useState({
    user_name: "",
    user_email: "",
    password: "",
    user_phone: "",
    user_avatar_link: "",
    brand_name: "",
    brand_cif: "",
    brand_description: "",
    brand_logo_link: "",
    country_id: "",
  });

  const handleChange = (e) => {
    setBrand((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerBrand(brand);
      console.log("Respuesta de la API:", response.data);
      navigate("/");
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <div className="form-background">
      <form className="form" onSubmit={handleSubmit}>
        <label>
          User Name:
          <input
            type="text"
            name="user_name"
            value={brand.user_name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          User Email:
          <input
            type="email"
            name="user_email"
            value={brand.user_email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={brand.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          User Phone:
          <input
            type="text"
            name="user_phone"
            value={brand.user_phone}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          User Avatar Link:
          <input
            type="text"
            name="user_avatar_link"
            value={brand.user_avatar_link}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Brand Name:
          <input
            type="text"
            name="brand_name"
            value={brand.brand_name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Brand CIF:
          <input
            type="text"
            name="brand_cif"
            value={brand.brand_cif}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Brand Description:
          <input
            type="text"
            name="brand_description"
            value={brand.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Brand Logo Link:
          <input
            type="text"
            name="brand_logo_link"
            value={brand.brand_logo_link}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Country ID:
          <input
            type="text"
            name="country_id"
            value={brand.country_id}
            onChange={handleChange}
          />
        </label>
        <br />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default RegisterBrand;
