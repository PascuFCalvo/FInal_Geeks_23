import { useEffect, useState } from "react";
import {
  getAllBrands,
  getAllCampaigns,
  getAllStreamers,
  getAllStreams,
  getAllUsers,
} from "../../services/apiCalls";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import spinner from "../../assets/images/GIFS/spinner.gif";
import { useSelector } from "react-redux";
import { PieChart } from "react-minimal-pie-chart";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [streamsAprobados, setStreamsAprobados] = useState([]);
  const [streamsPendientes, setStreamsPendientes] = useState([]);
  const [streamsSpain, setStreamsSpain] = useState([]);
  const [streamsMexico, setStreamsMexico] = useState([]);
  const [streamsArgentina, setStreamsArgentina] = useState([]);
  const [streamsColombia, setStreamsColombia] = useState([]);
  const [streamsUSA, setStreamsUSA] = useState([]);
  const [streamsUK, setStreamsUK] = useState([]);
  const [streamspayed, setStreamsPayed] = useState([]);
  const [streamsUnpayed, setStreamsUnpayed] = useState([]);
  const [brands, setBrands] = useState([]);
  const [streamers, setStreamers] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const [streams, setStreams] = useState([]); // Agregado el estado streams
  const [isLoading, setIsLoading] = useState(true); // Agregado el estado isLoading
  const token = useSelector((state) => state.token.value);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getAllStreams(token);
        setStreams(response.data.streams);
        console.log(response.data.streams);
      } catch (error) {
        console.error("Error fetching streams:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [token]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getAllUsers(token);
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [token]);

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

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getAllStreamers(token);
        setStreamers(response.data.streamers);
      } catch (error) {
        console.error("Error fetching streamers:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [token]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getAllCampaigns(token);
        setCampaigns(response.data.campaigns);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [token]);

  useEffect(() => {
    const newStreamsAprobados = [];
    const newStreamsPendientes = [];

    streams.forEach((stream) => {
      if (stream.is_stream_approved == 1) {
        newStreamsAprobados.push(stream);
      } else {
        newStreamsPendientes.push(stream);
      }
    });

    setStreamsAprobados(newStreamsAprobados);
    setStreamsPendientes(newStreamsPendientes);
  }, [streams]);

  useEffect(() => {
    const newStreamsPayed = [];
    const newStreamsUnpayed = [];

    streams.forEach((stream) => {
      if (stream.is_stream_payed == 1) {
        newStreamsPayed.push(stream);
      } else {
        newStreamsUnpayed.push(stream);
      }
    });

    setStreamsPayed(newStreamsPayed);
    setStreamsUnpayed(newStreamsUnpayed);
  }, [streams]);

  useEffect(() => {
    const streamSpain = [];
    const streamMexico = [];
    const streamArgentina = [];
    const streamColombia = [];
    const streamsUSA = [];
    const streamsUK = [];

    streams.forEach((stream) => {
      if (stream.country.country_name === "España") {
        streamSpain.push(stream);
      } else if (stream.country.country_name === "México") {
        streamMexico.push(stream);
      } else if (stream.country.country_name === "Argentina") {
        streamArgentina.push(stream);
      } else if (stream.country.country_name === "Colombia") {
        streamColombia.push(stream);
      } else if (stream.country.country_name === "USA") {
        streamsUSA.push(stream);
      } else if (stream.country.country_name === "UK") {
        streamsUK.push(stream);
      }
    });

    setStreamsSpain(streamSpain);
    setStreamsMexico(streamMexico);
    setStreamsArgentina(streamArgentina);
    setStreamsColombia(streamColombia);
    setStreamsUSA(streamsUSA);
    setStreamsUK(streamsUK);

    console.log(streamSpain);
    console.log(streamMexico);
    console.log(streamArgentina);
    console.log(streamColombia);
    console.log(streamsUSA);
    console.log(streamsUK);
  }, [streams]);

  return (
    <div>
      <div className="dashboard-container">
        <div className="dashboard-title">
          PANEL DE ADMINISTRACIÓN VISTA GENERAL
        </div>
        <div className="dashboard-item-group">
          {isLoading ? (
            <div className="spinner-screen-dashboard">
              <p>Accediendo a tus datos</p>
              <img src={spinner} alt="loading" className="loading-gif" />
            </div>
          ) : (
            <>
              <div className="dashboard-item">
                <div className="dashboard-item-title">USUARIOS</div>
                {users.map((user) => (
                  <p className="dashboard-item-text" key={user.id}>
                    {user.user_name}
                  </p>
                ))}
              </div>
              <div className="dashboard-item">
                <div className="dashboard-item-title">MARCAS</div>
                {brands.map((brand) => (
                  <p className="dashboard-item-text" key={brand.id}>
                    {brand.brand_name}
                  </p>
                ))}
              </div>
              <div className="dashboard-item">
                <div className="dashboard-item-title">STREAMERS</div>
                {streamers.map((streamer) => (
                  <p className="dashboard-item-text" key={streamer.id}>
                    {streamer.streamer_nick}
                  </p>
                ))}
              </div>
              <div className="dashboard-item">
                <div className="dashboard-item-title">CAMPAÑAS</div>
                {campaigns.map((campaign) => (
                  <p className="dashboard-item-text" key={campaign.id}>
                    {campaign.campaign_name}
                  </p>
                ))}
              </div>
              <div className="dashboard-item">
                <div className="dashboard-item-title">STREAMS</div>
                {streams.map((stream) => (
                  <p className="dashboard-item-text" key={stream.id}>
                    {stream.stream_title}
                  </p>
                ))}
              </div>
            </>
          )}
        </div>
        <div className="dashboard-item-group-2">
          <div className="dashboard-item-chart">
            <PieChart
              className="piechart"
              data={[
                {
                  title: "One",
                  value: streamsAprobados.length,
                  color: "#E38627",
                },
                {
                  title: "Two",
                  value: streamsPendientes.length,
                  color: "#C13C37",
                },
              ]}
            />
            <div className="dashboard-item-text-chart">
            <p style={{ color: "#E38627" }}>Streams aprobados: {streamsAprobados.length}</p>
            <p style={{ color: "#C13C37" }}>Streams pendientes: {streamsPendientes.length}</p>
            </div>
          </div>
          <div className="dashboard-item-chart">
            <PieChart
              className="piechart"
              data={[
                { title: "One", value: streamspayed.length, color: "#E38627" },
                {
                  title: "Two",
                  value: streamsUnpayed.length,
                  color: "#C13C37",
                },
              ]}
            />
            <div className="dashboard-item-text-chart">
              <p style={{ color: "#E38627" }}> Streams pagados: {streamspayed.length}</p>
              <p style={{ color: "#C13C37" }}>Streams por pagar: {streamsUnpayed.length}</p>{" "}
            </div>
          </div>
          <div className="dashboard-item-chart">
            <PieChart
              className="piechart"
              data={[
                {
                  title: "One",
                  value: streamsSpain.length,
                  color: "goldenrod",
                },
                {
                  title: "Two",
                  value: streamsMexico.length,
                  color: "orangered",
                },
                {
                  title: "Three",
                  value: streamsArgentina.length,
                  color: "#6A2135",
                },
                {
                  title: "Four",
                  value: streamsColombia.length,
                  color: "#E38627",
                },
                { title: "Five", value: streamsUSA.length, color: "#C13C37" },
                { title: "Six", value: streamsUK.length, color: "darkred" },
              ]}
            />
            <div className="dashboard-item-text-chart">
              <p style={{ color: "goldenrod" }}>
                España: {streamsSpain.length}{" "}
              </p>
              <p style={{ color: "orangered" }}>
                Mexico: {streamsMexico.length}
              </p>
              <p style={{ color: "#6A2135" }}>
                Argentina: {streamsArgentina.length}
              </p>
              <p style={{ color: "#E38627" }}>
                Colombia: {streamsColombia.length}
              </p>
              <p style={{ color: "#C13C37" }}>USA: {streamsUSA.length}</p>
              <p style={{ color: "darkred" }}>UK: {streamsUK.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
