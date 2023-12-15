import { useEffect, useState } from "react";
import "./AdminUsersResumeView.css";
import { getAllUsers } from "../../services/apiCalls";
import { useSelector } from "react-redux";
import { format } from "date-fns";

const AdminUsersResumeView = () => {
  const token = useSelector((state) => state.token.value);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers(token)
      .then((res) => {
        console.log(res.data.users);
        setUsers(res.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  return (
    <div>
      <div className="users-table-resume-content-background">
        <div className="dashboard-title">USUARIOS</div>
        <table className="users-resume-table">
          <thead className="users-resume-table-title">
            <tr>
              <th>ID</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Avatar</th>
              <th>Fecha alta</th>
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
                  <img src={user.user_avatar_link} alt="Avatar" width={28} />
                </td>
                <td className="users-resume-table-rows">
                  {format(new Date(user.created_at), "dd-MM-yyyy")}
                </td>
                <td className="users-resume-table-rows last-column">
                  {format(new Date(user.updated_at), "dd-MM-yyyy")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsersResumeView;
