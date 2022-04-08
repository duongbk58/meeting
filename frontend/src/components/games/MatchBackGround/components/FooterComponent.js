import React from "react";
import ButtonReset from "./ButtonReset";
import styled from "styled-components";
import { BOOK_LANGUAGE } from "../../../../constants/type";

const FooterComponent = ({
  isDislabeledResult,
  disabledBoxItem,
  onResetData,
  onCheckAnswer,
  alert,
  languageBook,
  handleDispatchDataAlert,
  totalQuestion,
  countCorrect,
}) => {
  return (
    <Footer>
      <div style={{ zIndex: "12" }}>
        <button
          style={{ backgroundColor: "#00c2f3" }}
          className={`${
            isDislabeledResult ? "monkey-bg-gray" : "monkey-bg-blue"
          } btn monkey-color-white pr-3 pl-3 pt-2 pb-2 monkey-fz-20`}
          onClick={onCheckAnswer}
        >
          Kiểm tra
        </button>
      </div>
    </Footer>
  );
};
export default FooterComponent;

const Footer = styled.div`
  position: absolute;
  bottom: -50px;
  right: 0;
  /* padding: 15px; */
  display: flex;
  justify-content: end;
  align-items: center;
`;
