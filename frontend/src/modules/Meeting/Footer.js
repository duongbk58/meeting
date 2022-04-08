import { useEffect } from "react";
import Booktoll from "modules/Booktoll";
import { Link, Switch, useHistory } from "react-router-dom";

const Footer = ({ setShow }) => {
  useEffect(() => {}, []);
  return (
    <>
      <div className="student-footer">
        <div className="containerr">
          <div className="row">
            <div className="col-lg-3 col-3 wb" onClick={() => setShow(1)}>
              <i class="fa fa-leanpub" aria-hidden="true"></i>
              While board
            </div>
            <div className="col-lg-3 col-3 chtt" onClick={() => setShow(2)}>
              <i class="fa fa-chain-broken" aria-hidden="true"></i> Interactive
              Questions
            </div>
            <div className="col-lg-3 col-3 chtt" onClick={() => setShow(3)}>
              <i class="fa fa-chain-broken" aria-hidden="true"></i>
              Quiz
            </div>
            <div className="col-lg-3 col-3 video">
              <i class="fa fa-video-camera" aria-hidden="true"></i>Video
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
