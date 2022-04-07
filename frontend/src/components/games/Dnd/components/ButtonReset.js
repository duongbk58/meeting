import React, { useState } from "react";
import { Tooltip } from "reactstrap";

const ButtonReset = ({
  onResetData,
  isDislabeled = true,
  className = "mt-4",
}) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);
  return (
    <div className={`${className} text-right pr-3 pl-3`}>
      <button
        onClick={() => onResetData()}
        style={{ backgroundColor: "#00c2f3" }}
        disabled={isDislabeled}
        className={`${
          isDislabeled ? "monkey-bg-gray" : "monkey-bg-blue"
        } btn cursor monkey-color-white`}
        id="tooltip-reset-drap-drop"
      >
        <i class="fa fa-repeat" aria-hidden="true"></i>
      </button>
      <Tooltip
        isOpen={tooltipOpen}
        target="tooltip-reset-drap-drop"
        toggle={toggle}
      >
        Làm lại
      </Tooltip>
    </div>
  );
};

export default ButtonReset;
