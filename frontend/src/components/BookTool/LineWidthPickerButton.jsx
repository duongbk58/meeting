import React, { useState } from "react";
import styled from "styled-components";
import Select from "react-select";
import BookToolMenuItem from "./BookToolMenuItem";
import { LINEWIDTHS } from "../../constants/type";

const Wrapper = styled.div`
  position: relative;
`;

const Popover = styled.div`
  position: absolute;
  z-index: 2;
  width: 130px;
  left: 42px;
  top: 0;
  background-color: #e2e6ea;
  padding: 10px 5px;
  border-radius: 0.2rem;
`;

const Cover = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const LineWidthPickerButton = ({
  lineWidth,
  onChange,
  props,
  controlBookTool,
}) => {
  const [displayLineWidthPicker, setDisplayLineWidthPicker] = useState(false);

  const handleClick = () => {
    setDisplayLineWidthPicker(!displayLineWidthPicker);
  };

  const handleClose = () => {
    setDisplayLineWidthPicker(false);
  };

  const selectedItem = LINEWIDTHS.find(({ value }) => value === lineWidth);

  return (
    <Wrapper {...props}>
      <BookToolMenuItem
        item={{
          id: "lineWidth",
          placement: "left",
          text: "Chọn nét vẽ ",
          icon: "fa fa-barcode",
        }}
        onClick={handleClick}
        controlBookTool={controlBookTool}
      />
      {displayLineWidthPicker ? (
        <Popover>
          <Cover onClick={handleClose} />
          <div>
            <p className="mb-1">Độ dày nét vẽ: </p>
            <Select
              defaultValue={selectedItem}
              options={LINEWIDTHS}
              name="number"
              onChange={({ value }) => {
                onChange(value);
              }}
            />
          </div>
        </Popover>
      ) : null}
    </Wrapper>
  );
};

export default LineWidthPickerButton;
