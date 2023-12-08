import { useEffect, useState } from "react";
import "./RegisterBrand.css";
import { useNavigate } from "react-router-dom";
import { getCountries, registerBrand } from "../../services/apiCalls";
import Logo from "../../common/Logo/logo";

const RegisterBrand = () => {
  let [paises, setPaises] = useState([]);

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

  useEffect(() => {
    getCountries()
      .then((response) => {
        setPaises(response.data.data);
        console.log(paises);
      })
      .catch((error) => {
        console.error("Error al obtener los países:", error);
      });
  }, []);

  //mapear los paises para sacar los nombres a un array

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
      console.log("response:", response.data);
      navigate("/");
    } catch (error) {
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
              type="text"
              name="user_name"
              placeholder="Nombre de usuario"
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
              placeholder="Email"
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
              placeholder="********"
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
              placeholder="Teléfono"
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
              placeholder="Link de la imagen   htttp://imgurl.com"
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
              placeholder="Nombre de la marca"
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
              placeholder="X12345678"
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
              placeholder="Descripción de la marca"
              value={brand.brand_description}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Brand Logo Link:
            <input
              type="text"
              name="brand_logo_link"
              placeholder="Link de la imagen   htttp://imgurl.com"
              value={brand.brand_logo_link}
              onChange={handleChange}
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
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterBrand;
