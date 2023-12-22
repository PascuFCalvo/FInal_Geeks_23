import { useSelector } from "react-redux";
import spinner from "../../assets/images/GIFS/spinner.gif";
import { useEffect, useState } from "react";
import { approveAStream, getAllStreams } from "../../services/apiCalls";
import { format } from "date-fns";
import "./NewAdminStreamsResumeView.css";

export const NewAdminStreamsResumeView = () => {
  const token = useSelector((state) => state.token.value);
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [someStreamApproved, setSomeStreamApproved] = useState(false);

  //vista en testeo

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getInfo = async () => {
      setIsLoading(true);
      getAllStreams(token).then((res) => {
        setInfo(res.data.streams);
        setIsLoading(false);
      });
    };
    getInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setSomeStreamApproved]);

  const handlerApproveAStream = (streamId) => {
    approveAStream(streamId, token);
    setSomeStreamApproved(!someStreamApproved);
  };

  return (
    <>
      <div>
        <div className="streams-table-resume-content-background">
          <div className="dashboard-title">STREAMS</div>
          {isLoading ? (
            <div className="spinner-screen-dashboard">
              <p>Cargando streams...</p>
              <img src={spinner} alt="loading" className="loading-gif" />
            </div>
          ) : (
            <table className="streams-resume-table">
              <thead className="streams-resume-table-title">
                <tr>
                  <th className="first-column">ID</th>
                  <th>Streamer ID</th>
                  <th>Title</th>
                  <th>Descripcion</th>
                  <th>Fecha</th>
                  <th>Visualizaciones</th>
                  <th>Check Picture 1</th>
                  <th>Check Picture 2</th>
                  <th>Campaña</th>
                  <th>Pais</th>
                  <th>Creacion</th>
                  <th>Ultima modificacion</th>
                  <th>Aprobado</th>
                  <th>Credito generado</th>
                  <th className="last-column">Pagado</th>
                </tr>
              </thead>
              <tbody>
                {info.map((stream) => (
                  <tr key={stream.id}>
                    <td className="streams-resume-table-rows first-column">
                      {stream.id}
                    </td>
                    <td className="streams-resume-table-rows">
                      {stream.streamer.streamer_nick}
                    </td>
                    <td className="streams-resume-table-rows">
                      {stream.stream_title}
                    </td>
                    <td className="streams-resume-table-rows">
                      {stream.stream_description}
                    </td>
                    <td className="streams-resume-table-rows">
                      {stream.stream_date}
                    </td>
                    <td className="streams-resume-table-rows">
                      {stream.stream_ammount_of_viewers}
                    </td>
                    <td className="streams-resume-table-rows">
                      <img
                        className="check-picture"
                        src={stream.stream_check_picture_1}
                        alt="Check Picture 1"
                        width={50}
                      />
                    </td>
                    <td className="streams-resume-table-rows">
                      <img
                        className="check-picture"
                        src={stream.stream_check_picture_2}
                        alt="Check Picture 2"
                        width={50}
                      />
                    </td>
                    <td className="streams-resume-table-rows">
                      {stream.campaign.campaign_name}
                    </td>
                    <td className="streams-resume-table-rows">
                      {stream.country.country_name}
                    </td>
                    <td className="streams-resume-table-rows">
                      {format(new Date(stream.created_at), "dd-MM-yyyy")}
                    </td>
                    <td className="streams-resume-table-rows">
                      {format(new Date(stream.updated_at), "dd-MM-yyyy")}
                    </td>
                    <td className="streams-resume-table-rows">
                      <div className="streams-resume-table-flex">
                        {stream.is_stream_approved ? "SI" : "NO"}
                        {!stream.is_stream_approved && (
                          <button
                            className="approve-button-chart"
                            onClick={() => handlerApproveAStream(stream.id)}
                          >
                            Aprobar
                          </button>
                        )}
                      </div>
                    </td>
                    <td className="streams-resume-table-rows">
                      {stream.stream_total_to_receive + " $"}
                    </td>
                    <td className="streams-resume-table-rows last-column">
                      {stream.is_stream_payed ? "SI" : "NO"}
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
