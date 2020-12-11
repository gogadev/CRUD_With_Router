import React, { useState, useEffect } from "react";

import axios from "axios";

import { useHistory, useParams } from "react-router-dom";

import CreateIcon from "@material-ui/icons/Create";

import "./edit-user.style.css";

const EditUser = () => {
  const history = useHistory();
  const { id } = useParams();
  const [updatedUser, setUpdatedUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { name, username, email, phone, website } = updatedUser;

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUpdatedUser(result.data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, updatedUser);
    history.push("/");
  };

  const handleChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  return (
    <div className="edit-user">
      <CreateIcon />
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="username"
            placeholder="Enter Your Username"
            value={username}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="phone"
            placeholder="Enter Your Phone Number"
            value={phone}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="website"
            placeholder="Enter Your Website"
            value={website}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button type="submit" className="submit-btn">
          Update User
        </button>
      </form>
    </div>
  );
};

export default EditUser;
