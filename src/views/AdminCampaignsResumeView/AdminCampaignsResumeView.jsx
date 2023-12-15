import { useEffect, useState } from "react";
import { getAllBrands, getAllCampaigns } from "../../services/apiCalls";
import "./AdminCampaignsResumeView.css";
import { useSelector } from "react-redux";
import { format } from "date-fns";

const AdminCampaignsResumeView = () => {
  const token = useSelector((state) => state.token.value);
  const [campaigns, setCampaigns] = useState([]);
  const [brand, setBrand] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Agregado el estado isLoading

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const brandsResponse = await getAllBrands(token);
        setBrand(brandsResponse.data.brands);

        const campaignsResponse = await getAllCampaigns(token);
        setCampaigns(campaignsResponse.data.campaigns);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [token]);

  const getBrandName = (brandId) => {
    const brandName = brand.find((brand) => brand.id === brandId);
    return brandName ? brandName.brand_name : "Unknown";
  };

  return (
    <>
      <div>
        <div className="campaigns-table-resume-content-background">
          <div className="dashboard-title">CAMPAÑAS ACTIVAS</div>
          {isLoading ? (
            <div className="spinner-screen-dashboard">
              <p>Cagando campañas...</p>
              <img
                src="../src/assets/images/GIFS/Spinner.gif"
                alt="loading"
                className="loading-gif"
              />
            </div>
          ) : (
            <table className="campaigns-resume-table">
              <thead className="campaigns-resume-table-title">
                <tr>
                  <th>ID</th>
                  <th>Marca</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Fecha inicio</th>
                  <th>Precio por visualizacion</th>
                  <th>Active</th>
                  <th>Creacion</th>
                  <th>Ultima edición</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map((campaign) => (
                  <tr key={campaign.id}>
                    <td className="campaigns-resume-table-rows first-column">
                      {campaign.id}
                    </td>
                    <td className="campaigns-resume-table-rows">
                      {getBrandName(campaign.brand_id)}
                    </td>
                    <td className="campaigns-resume-table-rows">
                      {campaign.campaign_name}
                    </td>
                    <td className="campaigns-resume-table-rows">
                      {campaign.campaign_description}
                    </td>
                    <td className="campaigns-resume-table-rows">
                      {campaign.campaign_start_date}
                    </td>
                    <td className="campaigns-resume-table-rows">
                      {campaign.price_per_single_view}
                    </td>
                    <td className="campaigns-resume-table-rows">
                      {campaign.is_active ? "SI" : "N="}
                    </td>
                    <td className="campaigns-resume-table-rows">
                      {format(new Date(campaign.created_at), "dd-MM-yyyy")}
                    </td>
                    <td className="campaigns-resume-table-rows last-column">
                      {format(new Date(campaign.updated_at), "dd-MM-yyyy")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminCampaignsResumeView;
