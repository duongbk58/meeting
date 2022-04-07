import React, { useState } from "react";
import { URL_AUDIO } from "../../../../constants/type";
import UseSound from "../../../UseSound";

const style = {
  borderRadius: "10px",
  padding: "0.7rem 1.5rem",
  marginRight: "1rem",
  marginBottom: "0.6rem",
  position: "relative",
};

const TitleQuestion = ({ questionTitle, fontSizeTitle }) => {
  return (
    <div style={{ ...style }}>
      <>
        {/* {questionTitle[0]?.props[0]?.audio[0]?.path && (
          <UseSound
            src={`${URL_AUDIO}${questionTitle[0]?.props[0]?.audio[0]?.path}`}
          />
        )} */}
      </>
      <span
        style={{ fontSize: fontSizeTitle ? `${fontSizeTitle}px` : "25px" }}
        className=" quicksand-bold"
      >
        {/* {questionTitle[0]?.props[0]?.text} */}
      </span>
    </div>
  );
};

export default TitleQuestion;
