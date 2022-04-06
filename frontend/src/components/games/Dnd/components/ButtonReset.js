import React, { useState } from "react";
import { Tooltip } from "reactstrap";
import { BOOK_LANGUAGE } from "../../../../constants/type";

const ButtonReset = ({
  onResetData,
  isDislabeled = true,
  languageBook,
  className = "mt-4",
}) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);
  return (
    <div className={`${className} text-right pr-3 pl-3`}>
      <button
        onClick={() => onResetData()}
        disabled={isDislabeled}
        className={`${
          isDislabeled ? "monkey-bg-gray" : "monkey-bg-blue"
        } btn cursor monkey-color-white`}
        id="tooltip-reset-drap-drop"
      >
        <i className="fa fa-repeat" aria-hidden="true"></i>
      </button>
      <Tooltip
        isOpen={tooltipOpen}
        target="tooltip-reset-drap-drop"
        toggle={toggle}
      >
        {
          BOOK_LANGUAGE.filter((ele) => ele.id == languageBook)[0]
            ?.buttonRefresh
        }
      </Tooltip>
    </div>
  );
};

export default ButtonReset;
