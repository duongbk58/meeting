import React, { useState, useEffect, useRef } from "react";
import Timer from "./Timer";
import ProgressBar from "./ProcessBar";
import CheckAnswer from "./CheckAnswer";
import MultipleChoice from "../MultipleChoice";
import { data } from "./dataQuiz";
import { onFormatDataGameConfig } from "../MatchBackGround/selection";

const Quiz = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(data);
  }, [data]);

  const onChangeQuestion = (index) => {
    setActiveQuestionIndex(index);
  };

  const onComplete = () => {};

  const onPlaying = () => {};

  return (
    <>
      <div className="row" style={{ minHeight: "65vh" }}>
        <div className="col-md-9" style={{ borderRight: "1px solid" }}>
          <MultipleChoice
            data={questions[activeQuestionIndex]}
            onComplete={onComplete}
            onPlaying={onPlaying}
            questions={questions}
            setQuestions={setQuestions}
            activeQuestionIndex={activeQuestionIndex}
          />
        </div>
        <div className="col-md-3">
          <Timer />
          <ProgressBar strokeWidth={10} questions={questions} />
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
