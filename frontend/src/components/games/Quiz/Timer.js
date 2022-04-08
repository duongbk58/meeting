import { useEffect, useState } from "react";
import styled from "styled-components";
import Ratings from "./Ratings";

export default function Timer() {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);

  useEffect(() => {
    if (second < 60) {
      const timer = setTimeout(() => setSecond((pre) => pre + 1), 1000);
      return () => {
        clearTimeout(timer);
      };
    } else {
      setMinute((pre) => pre + 1);
      setSecond(0);
    }
  }, [second]);
  useEffect(() => {
    if (minute >= 60) {
      setHour((pre) => pre + 1);
      setMinute(0);
    }
  }, [minute]);
  return (
    <>
      <TimerWrapper className="mx-auto my-3 d-flex justify-content-center align-items-center">
        <Time className="d-block text-center">
          <Span>{hour >= 10 ? hour : "0" + hour}</Span> :
          <Span>{minute >= 10 ? minute : "0" + minute}</Span> :
          <Span>{second >= 10 ? second : "0" + second}</Span>
        </Time>
      </TimerWrapper>
      <Ratings />
    </>
  );
}
const TimerWrapper = styled.div`
  height: 80px;
  border: 2px solid #ff7707;
  border-radius: 10px;
  background-color: #fcba03;
  width: 160px;
  @media (max-width: 767px) {
    height: 40px;
  }
`;
const Time = styled.div`
  color: white;
  font-size: 28px;
  font-weight: bold;
  @media (max-width: 767px) {
    font-size: 18px;
  }
`;
const Span = styled.span`
  display: inline-block;
  width: 35px;
  margin-left: 5px;
`;
