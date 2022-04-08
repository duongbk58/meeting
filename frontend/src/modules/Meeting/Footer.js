import { useEffect } from "react";
import Booktoll from "modules/Booktoll";
import { Link, Switch, useHistory } from "react-router-dom";

const Footer = ({
  show,
  setShow,
  showBoard,
  setShowBoard,
  setShowBooktoll,
  showBooktoll,
}) => {
  useEffect(() => {}, []);
  return (
    <>
      <div className="student-footer">
        <div className="containerr">
          <div className="row">
            <div
              className="col-lg-3 col-3 wb"
              onClick={() => setShowBoard(!showBoard)}
            >
              <i class="fa fa-leanpub" aria-hidden="true"></i>
              Writeboard
            </div>
            <div className="col-lg-3 col-3 chtt" onClick={() => setShow(!show)}>
              <i class="fa fa-chain-broken" aria-hidden="true"></i> Interactive
              Questions
            </div>
            <div className="col-lg-3 col-3 video">
              <i class="fa fa-video-camera" aria-hidden="true"></i>Video
            </div>
            <div className="col-lg-3 col-3 exit">
              <Link to="/Login">
                <i class="fa fa-sign-out" aria-hidden="true"></i>Exit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
