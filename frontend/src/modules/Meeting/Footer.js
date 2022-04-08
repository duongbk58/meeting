import { useEffect, useRef } from "react";
import Booktoll from "modules/Booktoll";
import { Link, Switch, useHistory } from "react-router-dom";
import socketIOClient from "socket.io-client";
const host = "http://localhost:3000";

const Footer = ({ setShow }) => {
  const socketRef = useRef();
  const messagesEnd = useRef();

  const setChange = (index) => {
    setShow(index)
    socketRef.current.emit("sendDataShow", index);
  }

  useEffect(() => {
    socketRef.current = socketIOClient.connect(host);
    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  useEffect(() => {}, []);
  return (
    <>
      <div className="student-footer">
        <div className="containerr">
          <div className="row">
            <div className="col-lg-3 col-3 wb" onClick={() => setChange(1)}>
              <i class="fa fa-leanpub" aria-hidden="true"></i>
              While board
            </div>
            <div className="col-lg-3 col-3 chtt" onClick={() => setChange(2)}>
              <i class="fa fa-chain-broken" aria-hidden="true"></i> Interactive
              Questions
            </div>
            <div className="col-lg-3 col-3 chtt" onClick={() => setChange(3)}>
              <i class="fa fa-chain-broken" aria-hidden="true"></i>
              Quiz
            </div>
            <div className="col-lg-3 col-3 video">
              <i class="fa fa-video-camera" aria-hidden="true" onClick={() => setChange(3)}></i>Video
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
