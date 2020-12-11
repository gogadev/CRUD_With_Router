import React, { useState, useEffect } from "react";

import axios from "axios";

import { Link } from "react-router-dom";

import HomeIcon from "@material-ui/icons/Home";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import "./home.style.css";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUsers(result.data.reverse());
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  return (
    <div className="home">
      <div className="icon">
        <HomeIcon />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, index) => (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td className="actions">
                  <Link to={`/users/${user.id}`} className="btn-link homepage">
                    <VisibilityIcon />
                  </Link>
                  <Link
                    to={`/users/edit/${user.id}`}
                    className="btn-link homepage"
                  >
                    <EditIcon />
                  </Link>
                  <button
                    className="btn-link homepage delete-btn"
                    onClick={() => deleteUser(user.id)}
                  >
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
