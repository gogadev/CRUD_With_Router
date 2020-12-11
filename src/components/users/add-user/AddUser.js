import React, { useState } from "react";

import axios from "axios";

import { useHistory } from "react-router-dom";

import PersonAddIcon from "@material-ui/icons/PersonAdd";

import "./add-user.style.css";

const AddUser = () => {
  let history = useHistory();
  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { name, username, email, phone, website } = newUser;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", newUser);
    history.push("/");
  };

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  return (
    <div className="add-user">
      <div className="icon">
        <PersonAddIcon />
      </div>
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
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
