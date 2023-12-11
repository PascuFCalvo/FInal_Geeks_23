import { useEffect, useState } from "react";
import "./RegisterBrand.css";
import { useNavigate } from "react-router-dom";
import { getCountries, registerBrand } from "../../services/apiCalls";
import Logo from "../../common/Logo/logo";
import { validator } from "../../services/useful";

const RegisterBrand = () => {
  let [paises, setPaises] = useState([]);
  const navigate = useNavigate();
  const [brandError, setBrandError] = useState({
    user_name: "",
    user_email: "",
    password: "",
    user_phone: "",
    user_avatar_link: "",
    streamer_nick: "",
    streamer_nif: "",
    streamer_platform: "",
    streamer_revenue: 0,
    country_id: "",
    has_active_campaigns: false,
  });

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

  const [errors, setErrors] = useState(false);

  useEffect(() => {
    getCountries()
      .then((response) => {
        setPaises(response.data.data);
        
      })
      .catch((error) => {
        console.error("Error al obtener los países:", error);
      });
  }, []);

  const handleChange = (e) => {
    setBrand((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    setErrors(false);

    setBrand((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const errorCheck = (e) => {
    const fieldName = e.target.name;
    const error = validator(fieldName, e.target.value);

    setBrandError((prevErrors) => ({
      ...prevErrors,
      [fieldName]: error,
    }));

    // Verifica si hay algún error en cualquier campo
    const hasErrors = Object.values(setBrandError).some(
      (error) => error !== ""
    );
    setErrors(hasErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerBrand(brand);
      
      navigate("/");
    } catch (error) {
      alert("El formulario contiene errores, imposible enviar.");
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <div className="form-background-register-brand">
      <div className="logo-placing-register-brand">
        <Logo />
      </div>
      <div className="form-body">
        <form className="form" onSubmit={handleSubmit}>
          <label>
            User Name:
            <input
              className={`input-form-brand ${
                brandError.user_name ? "error" : "normal"
              }`}
              type="text"
              name="user_name"
              placeholder="Nombre de usuario"
              value={brand.user_name}
              onChange={handleChange}
              onBlur={errorCheck}
            />
          </label>
          <br />
          <label>
            User Email:
            <input
              className={`input-form-brand ${
                brandError.user_email ? "error" : "normal"
              }`}
              type="email"
              name="user_email"
              placeholder="Email"
              value={brand.user_email}
              onChange={handleChange}
              onBlur={errorCheck}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              className={`input-form-brand ${
                brandError.password ? "error" : "normal"
              }`}
              type="password"
              name="password"
              placeholder="********"
              value={brand.password}
              onChange={handleChange}
              onBlur={errorCheck}
            />
          </label>
          <br />
          <label>
            User Phone:
            <input
              className={`input-form-brand ${
                brandError.user_phone ? "error" : "normal"
              }`}
              type="text"
              name="user_phone"
              placeholder="Teléfono"
              value={brand.user_phone}
              onChange={handleChange}
              onBlur={errorCheck}
            />
          </label>
          <br />
          <label>
            User Avatar Link:
            <input
              className={`input-form-brand ${
                brandError.user_avatar_link ? "error" : "normal"
              }`}
              type="text"
              name="user_avatar_link"
              placeholder="Link de la imagen   htttp://imgurl.com"
              value={brand.user_avatar_link}
              onChange={handleChange}
              onBlur={errorCheck}
            />
          </label>
          <br />

          <label>
            Brand Name:
            <input
              className={`input-form-brand ${
                brandError.brand_name ? "error" : "normal"
              }`}
              type="text"
              name="brand_name"
              placeholder="Nombre de la marca"
              value={brand.brand_name}
              onChange={handleChange}
              onBlur={errorCheck}
            />
          </label>
          <br />
          <label>
            Brand CIF:
            <input
              className={`input-form-brand ${
                brandError.brand_CIF ? "error" : "normal"
              }`}
              type="text"
              name="brand_cif"
              placeholder="X12345678"
              value={brand.brand_cif}
              onChange={handleChange}
              onBlur={errorCheck}
            />
          </label>
          <br />
          <label>
            Brand Description:
            <input
              className={`input-form-brand ${
                brandError.brand_description ? "error" : "normal"
              }`}
              type="text"
              name="brand_description"
              placeholder="Descripción de la marca"
              value={brand.brand_description}
              onChange={handleChange}
              onBlur={errorCheck}
            />
          </label>
          <br />
          <label>
            Brand Logo Link:
            <input
              className={`input-form-brand ${
                brandError.brand_logo_link ? "error" : "normal"
              }`}
              type="text"
              name="brand_logo_link"
              placeholder="Link de la imagen   htttp://imgurl.com"
              value={brand.brand_logo_link}
              onChange={handleChange}
              onBlur={errorCheck}
            />
          </label>
          <br />

          <select
            className="selectCountry"
            name="country_id"
            value={brand.country_id}
            onChange={handleChange}
          >
            <option value="">Selecciona un país</option>
            {paises.map((pais) => (
              <option key={pais.id} value={pais.id}>
                {pais.country_name}
              </option>
            ))}
          </select>

          <br />
          <div className="buttons">
            <button
              className="buttonBack"
              type="submit"
              onClick={() => navigate("/")}
            >
              Volver
            </button>
            <button type="submit" disabled={errors}>
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterBrand;
