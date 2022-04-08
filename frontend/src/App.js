import React, { useState, useEffect, useRef } from "react";
import socketIOClient from "socket.io-client";
import "./App.css";
import Login from "./modules/Login";
import Meeting from "./modules/Meeting";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
const host = "http://localhost:3000";

function App() {
  const [mess, setMess] = useState([]);
  const [message, setMessage] = useState("");
  const [id, setId] = useState();

  const socketRef = useRef();
  const messagesEnd = useRef();

  useEffect(() => {
    socketRef.current = socketIOClient.connect(host);

    socketRef.current.on("getId", (data) => {
      setId(data);
    });

    socketRef.current.on("sendDataServer", (dataGot) => {
      setMess((oldMsgs) => [...oldMsgs, dataGot.data]);
      scrollToBottom();
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (message !== null) {
      const msg = {
        content: message,
        id: id,
      };
      socketRef.current.emit("sendDataClient", msg);
      setMessage("");
    }
  };

  const scrollToBottom = () => {
    messagesEnd.current.scrollIntoView({ behavior: "smooth" });
  };

  const renderMess = mess.map((m, index) => (
    <div
      key={index}
      className={`${m.id === id ? "your-message" : "other-people"} chat-item`}
    >
      {m.content}
    </div>
  ));

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const onEnterPress = (e) => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      sendMessage();
    }
  };

  return (
    <>
      {/* <MultipleChoice/>
      <DragAndDropImageContainer data={data}></DragAndDropImageContainer> */}
      <Router>
        <Switch>
          {/* <MultipleChoice/> */}
          {/* <DragAndDropImageContainer data={data}></DragAndDropImageContainer> */}
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
