import { useSelector } from "react-redux";
import "./AdminBrandsResumeView.css";
import { useEffect, useState } from "react";
import { getAllBrands, getCountries } from "../../services/apiCalls";
import { format } from "date-fns";

const AdminBrandsResumeView = () => {
  const token = useSelector((state) => state.token.value);
  const [brands, setBrands] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await getCountries().then((response) => {
        setCountries(response.data.data);
        console.log(countries);
      });
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getAllBrands(token);
        setBrands(response.data.brands);
      } catch (error) {
        console.error("Error fetching brands:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [token]);

  const setCountryName = (countryId) => {
    const country = countries.find((country) => country.id === countryId);
    return country ? country.country_name : "No country";
  };

  return (
    <div>
      <div>
        <div className="brands-table-resume-content-background">
          <div className="dashboard-title">MARCAS</div>
          {isLoading ? (
            <div className="spinner-screen-dashboard">
              <p>Cargando marcas</p>
              <img
                src="../src/assets/images/GIFS/Spinner.gif"
                alt="loading"
                className="loading-gif"
              />
            </div>
          ) : (
            <table className="brands-resume-table">
              <thead className="brands-resume-table-title">
                <tr>
                  <th>ID</th>
                  <th>User ID</th>
                  <th>CIF</th>
                  <th>Nombre marca</th>
                  <th>Descripcion</th>
                  <th>Logo</th>
                  <th>Pais</th>

                  <th>Fecha alta</th>
                  <th className="last-column">Ultima edicion</th>
                </tr>
              </thead>
              <tbody>
                {brands.map((brand) => (
                  <tr key={brand.id}>
                    <td className="brands-resume-table-rows first-column">
                      {brand.id}
                    </td>
                    <td className="brands-resume-table-rows">
                      {brand.user_id}
                    </td>
                    <td className="brands-resume-table-rows">
                      {brand.brand_CIF}
                    </td>
                    <td className="brands-resume-table-rows">
                      {brand.brand_name}
                    </td>
                    <td className="brands-resume-table-rows">
                      {brand.brand_description}
                    </td>
                    <td className="brands-resume-table-rows">
                      <img src={brand.brand_logo_link} alt="Logo" width={28} />
                    </td>
                    <td className="brands-resume-table-rows">
                      {setCountryName(brand.country_id)}
                    </td>

                    <td className="brands-resume-table-rows">
                      {format(new Date(brand.created_at), "dd-MM-yyyy")}
                    </td>
                    <td className="brands-resume-table-rows last-column">
                      {format(new Date(brand.updated_at), "dd-MM-yyyy")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminBrandsResumeView;
