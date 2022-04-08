import React, { useState, useEffect, Fragment } from "react";
import { Alert } from "reactstrap";
import ReactAudioPlayer from "react-audio-player";
import fireworks from "../../../../assets/images/fireworks.png";
import sad from "../../../../assets/images/sad.png";
import { AUDIO_ERROR, AUDIO_VICTORY } from "constants/type";
const AlertReportGameComponent = ({
  totalQuestion,
  countCorrect,
  show,
  setShowAlert,
}) => {
  const [isFirework, setStateFirework] = useState(false);

  const results = countCorrect / totalQuestion;
  const pass = results >= 0.7 ? true : false;

  useEffect(() => {
    if (show) {
      setStateFirework(true);
      setTimeout(() => {
        setStateFirework(false);
      }, 1000);
    }
  }, [show]);

  const onDismiss = () => {
    setShowAlert(false);
  };
  return (
    <Fragment>
      {show && (
        <Alert
          color={pass ? "info" : "danger"}
          toggle={onDismiss}
          style={{
            position: "absolute",
            right: "0px",
            maxWidth: "320px",
            bottom: "-180px",
            top: "inherit",
            zIndex: "10",
            paddingRight: "2rem",
          }}
        >
          <div className="d-flex w-100 justify-content-center align-items-center">
            <div className="d-inline-flex w-100 align-items-center">
              <div className="fireworks w-25 text-center">
                <img className="w-100" src={pass ? fireworks : sad} />
              </div>
              <div className="d-flex w-75 align-items-center flex-column">
                <p className="text-center">
                  <span className="monkey-color-blue">
                    {countCorrect}/{totalQuestion}
                  </span>
                </p>
                <span className=" monkey-fz-14 text-center">
                  {pass
                    ? "Chúc mừng bạn đã hoàn thành"
                    : "Hãy tiếp tục luyện tập nhé"}
                </span>
              </div>
            </div>
          </div>
          <ReactAudioPlayer
            src={pass ? AUDIO_VICTORY : AUDIO_ERROR}
            className="d-none"
            autoPlay={true}
            controls={true}
          />
          {isFirework && pass && (
            <div className="pyro">
              <div className="before"></div>
              <div className="after"></div>
            </div>
          )}
        </Alert>
      )}
    </Fragment>
  );
};

export default AlertReportGameComponent;
