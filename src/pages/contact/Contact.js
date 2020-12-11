import React from "react";

import ImportContactsIcon from "@material-ui/icons/ImportContacts";

import "./contact.style.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="icon">
        Contact <ImportContactsIcon />
      </div>
      <form className="form">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email Address</label>
          <input
            type="email"
            id="exampleInputEmail1"
            placeholder="e.g. johndoe@hotmail.com"
          />
          <small id="emailHelp">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="email"
            id="exampleInputPassword1"
            placeholder="********"
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
