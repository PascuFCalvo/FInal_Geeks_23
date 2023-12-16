import { useEffect, useState } from "react";
import "./AdminUsersResumeView.css";
import {
  activateAUser,
  getAllUsers,
  inactivateAUser,
} from "../../services/apiCalls";
import { useSelector } from "react-redux";
import { format } from "date-fns";

const AdminUsersResumeView = () => {
  const token = useSelector((state) => state.token.value);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [someUserActivatad, setSomeUserActivated] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
  }, [token, someUserActivatad]);

  const handlerInactivateUser = async (userId) => {
    inactivateAUser(userId, token);
    setSomeUserActivated(!someUserActivatad);
  };

  const handlerActivateUser = async (userId) => {
    activateAUser(userId, token);
    setSomeUserActivated(!someUserActivatad);
  };

  return (
    <div>
      <div className="users-table-resume-content-background">
        <div className="dashboard-title">USUARIOS</div>
        {isLoading ? (
          <div className="spinner-screen-dashboard">
            <p>Cargando usuarios...</p>
            <img
              src="../src/assets/images/GIFS/Spinner.gif"
              alt="loading"
              className="loading-gif"
            />
          </div>
        ) : (
          <table className="users-resume-table">
            <thead className="users-resume-table-title">
              <tr>
                <th>ID</th>
                <th>Nombre usuario</th>
                <th>Email</th>
                <th>Telefono</th>
                <th>Role</th>
                <th>Avatar</th>
                <th>Fecha alta</th>
                <th>Usuario activo</th>
                <th className="last-column">Ultima edicion</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="users-resume-table-rows first-column">
                    {user.id}
                  </td>
                  <td className="users-resume-table-rows">{user.user_name}</td>
                  <td className="users-resume-table-rows">{user.user_email}</td>
                  <td className="users-resume-table-rows">{user.user_phone}</td>
                  <td className="users-resume-table-rows">{user.user_role}</td>
                  <td className="users-resume-table-rows">
                    <img
                      className="check-picture"
                      src={user.user_avatar_link}
                      alt="Avatar"
                      width={50}
                    />
                  </td>
                  <td className="users-resume-table-rows">
                    {format(new Date(user.created_at), "dd-MM-yyyy")}
                  </td>
                  <td className="users-resume-table-rows user-active">
                    <div className="flex-direction-user-active">
                      <p className="text-user-active">
                        {user.is_active ? "SI" : "NO"}
                      </p>
                      {user.is_active && (
                        <button
                          className="inactivate-user-button"
                          onClick={() => handlerInactivateUser(user.id)}
                        >
                          Baja
                        </button>
                      )}
                      {!user.is_active && (
                        <button
                          className="activate-user-button"
                          onClick={() => handlerActivateUser(user.id)}
                        >
                          Alta
                        </button>
                      )}
                    </div>
                  </td>
                  <td className="users-resume-table-rows last-column">
                    {format(new Date(user.updated_at), "dd-MM-yyyy")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminUsersResumeView;
