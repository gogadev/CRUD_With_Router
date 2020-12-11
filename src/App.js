import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import AddUser from "./components/users/add-user/AddUser";
import EditUser from "./components/users/edit-user/EditUser";
import User from "./components/users/user/User";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/users/add" component={AddUser} />
        <Route exact path="/users/edit/:id" component={EditUser} />
        <Route exact path="/users/:id" component={User} />
      </Switch>
    </Router>
  );
};

export default App;
