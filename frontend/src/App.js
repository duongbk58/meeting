import React, { useState, useEffect, useRef } from "react";
import socketIOClient from "socket.io-client";
import "./App.css";
import Login from "./modules/Login";
import Meeting from "./modules/Meeting";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
const host = "http://localhost:3000";

function App() {

  const socketRef = useRef();
  const messagesEnd = useRef();

  useEffect(() => {
  }, []);

  const scrollToBottom = () => {
    messagesEnd.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/meeting/:name">
            <Meeting />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
