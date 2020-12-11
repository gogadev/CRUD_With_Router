import React, { useState, useEffect } from "react";

import axios from "axios";

import { Link, useParams } from "react-router-dom";

import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

import "./user.style.css";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };

  return (
    <div className="user">
      <PersonOutlineIcon />
      <ul className="list">
        <li className="list-item">Name: {user.name}</li>
        <li className="list-item">Username: {user.username}</li>
        <li className="list-item">Email: {user.email}</li>
        <li className="list-item">Phone: {user.phone}</li>
        <li className="list-item">Website: {user.website}</li>
      </ul>
      <Link to="/" className="link-btn">
        Home
      </Link>
    </div>
  );
};

export default User;
