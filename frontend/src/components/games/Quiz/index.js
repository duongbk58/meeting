import React, { useState, useEffect, useRef } from "react";
import Timer from "./Timer";
import ProgressBar from "./ProcessBar";
import CheckAnswer from "./CheckAnswer";
import MultipleChoice from "../MultipleChoice";
import { data } from "./dataQuiz";
import socketIOClient from "socket.io-client";
import ResultComplete from "./ResultComplete";
const host = "https://api.meeting.hoc10.vn/";

const Quiz = ({ name }) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [listRank, setListRank] = useState([]);

  useEffect(() => {
    setQuestions(data);
  }, [data]);

  const socketRef = useRef();
  const messagesEnd = useRef();

  useEffect(() => {
    socketRef.current = socketIOClient.connect(host);

    socketRef.current.on("getId", (data) => {});

    socketRef.current.on("sendDataServerListQuiz", (dataGot) => {
      setListRank((oldMsgs) => [...oldMsgs, dataGot.data]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const onChangeQuestion = (index) => {
    setActiveQuestionIndex(index);
  };

  const onComplete = () => {};

  const onPlaying = () => {};

  return (
    <>
      <div className="row" style={{ minHeight: "65vh" }}>
        <div className="col-md-9 mt-2 " style={{ borderRight: "1px solid" }}>
          {activeQuestionIndex <= 6 && (
            <ProgressBar
              strokeWidth={10}
              questions={questions}
              activeQuestionIndex={activeQuestionIndex}
            />
          )}
          {activeQuestionIndex <= 6 ? (
            <MultipleChoice
              data={questions[activeQuestionIndex]}
              onComplete={onComplete}
              onPlaying={onPlaying}
              questions={questions}
              setQuestions={setQuestions}
              activeQuestionIndex={activeQuestionIndex}
              handleToNextQuestion={onChangeQuestion}
              name={name}
            />
          ) : (
            <ResultComplete questions={questions} />
          )}
        </div>
        <div className="col-md-3">
          <Timer listRank={listRank} />
          <CheckAnswer
            questions={questions}
            onChangeQuestion={onChangeQuestion}
            activeQuestionIndex={activeQuestionIndex}
          />
        </div>
      </div>
    </>
  );
};

export default Quiz;
