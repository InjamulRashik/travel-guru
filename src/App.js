import React, { createContext, useContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Booking from "./components/Booking/Booking";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Hotel from "./components/Hotel/Hotel";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Booking2 from "./components/Booking/Booking2";
import Booking3 from "./components/Booking/Booking3";
import Hotel2 from "./components/Hotel/Hotel2";
import Hotel3 from "./components/Hotel/Hotel3";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/booking/1">
            <Booking />
          </Route>
          <Route path="/booking/2">
            <Booking2></Booking2>
          </Route>
          <Route path="/booking/3">
            <Booking3></Booking3>
          </Route>
          <Route path="/notfound">
            <NotFound />
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <PrivateRoute path="/hotel">
            <Hotel></Hotel>
          </PrivateRoute>
          <PrivateRoute path="/hotel2">
            <Hotel2></Hotel2>
          </PrivateRoute>
          <PrivateRoute path="/hotel3">
            <Hotel3></Hotel3>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
