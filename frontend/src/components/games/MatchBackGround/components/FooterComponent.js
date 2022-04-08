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
      <div
        className="text-right position-relative pr-3 d-flex justify-content-end align-items-center"
        style={{ zIndex: "12" }}
      >
        <button
          className={`${
            isDislabeledResult ? "monkey-bg-gray" : "monkey-bg-blue"
          } btn monkey-color-white pr-3 pl-3 pt-2 pb-2 monkey-fz-20`}
          onClick={onCheckAnswer}
        >
          Lam lai
        </button>
      </div>
    </Footer>
  );
};
export default FooterComponent;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
