import { useEffect, useState } from "react";

const Footer = () => {
  
  useEffect(() => {
    
  }, []);
  return (
   <>
    <div className="student-footer">
        <div className="containerr">
          <div className="row">
            <div className="col-lg-3 col-3 wb">
              <i class="fa fa-leanpub" aria-hidden="true"></i>
              Dashboard
            </div>
            <div className="col-lg-3 col-3 chtt">
              <i class="fa fa-chain-broken" aria-hidden="true"></i> Interactive
              Questions
            </div>
            <div className="col-lg-3 col-3 video">
              <i class="fa fa-video-camera" aria-hidden="true"></i>Video
            </div>
            <div className="col-lg-3 col-3 exit">
              <i class="fa fa-sign-out" aria-hidden="true"></i>Exit
            </div>
          </div>
        </div>
      </div>
    
   </>
  );
};

export default Footer;