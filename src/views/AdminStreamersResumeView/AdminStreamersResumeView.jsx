import { useEffect, useState } from "react";
import "./AdminStreamersResumeView.css";
import { getAllStreamers, getCountries } from "../../services/apiCalls";
import { useSelector } from "react-redux";
import { format } from "date-fns";

const AdminStreamersResumeView = () => {
  const token = useSelector((state) => state.token.value);

  const [streamers, setStreamers] = useState([]);
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Agregado el estado isLoading

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const countriesResponse = await getCountries(token);
        setCountries(countriesResponse.data.data);

        const streamersResponse = await getAllStreamers(token);
        setStreamers(streamersResponse.data.streamers);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [token]);

  const getCountryName = (countryId) => {
    const country = countries.find((country) => country.id === countryId);
    return country ? country.country_name : "Unknown";
  };

  return (
    <>
      <div>
        <div className="streamers-table-resume-content-background">
          <div className="dashboard-title">STREAMERS</div>
          {isLoading ? (
            <div className="spinner-screen-dashboard">
              <p>Cargando streamers...</p>
              <img
                src="../src/assets/images/GIFS/Spinner.gif"
                alt="loading"
                className="loading-gif"
              />
            </div>
          ) : (
            <table className="streamers-resume-table">
              <thead className="streamers-resume-table-title">
                <tr>
                  <th>ID</th>
                  <th>User ID</th>
                  <th>Pais</th>
                  <th>Nick</th>
                  <th>NIF</th>
                  <th>Plataforma</th>
                  <th>Credito por retirar</th>
                  <th>Fecha alta</th>
                  <th>Ultima edicion</th>
                  <th className="last-column">Ultimo stream</th>
                </tr>
              </thead>
              <tbody>
                {streamers.map((streamer) => (
                  <tr key={streamer.id}>
                    <td className="streamers-resume-table-rows first-column">
                      {streamer.id}
                    </td>
                    <td className="streamers-resume-table-rows">
                      {streamer.user_id}
                    </td>
                    <td className="streamers-resume-table-rows">
                      {getCountryName(streamer.country_id)}
                    </td>
                    <td className="streamers-resume-table-rows">
                      {streamer.streamer_nick}
                    </td>
                    <td className="streamers-resume-table-rows">
                      {streamer.streamer_nif}
                    </td>
                    <td className="streamers-resume-table-rows">
                      {streamer.streamer_platform}
                    </td>
                    <td className="streamers-resume-table-rows">
                      {streamer.streamer_revenue}
                    </td>
                    <td className="streamers-resume-table-rows">
                      {format(new Date(streamer.created_at), "dd-MM-yyyy")}
                    </td>
                    <td className="streamers-resume-table-rows ">
                      {format(new Date(streamer.updated_at), "dd-MM-yyyy")}
                    </td>
                    <td className="streamers-resume-table-rows last-column">
                      <img
                        src={streamer.image_stream}
                        alt="Streamer Image"
                        width={50}
                      />
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

export default AdminStreamersResumeView;
