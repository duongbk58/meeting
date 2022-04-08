import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import ProgressBar from "./ProcessBar";
import CheckAnswer from "./CheckAnswer";
import MultipleChoice from "../MultipleChoice";
import { data } from "./dataQuiz";

const Quiz = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  console.log("getValueuestions", questions);

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
        <div className="col-md-9 mt-2 " style={{ borderRight: "1px solid" }}>
          <ProgressBar
            strokeWidth={10}
            questions={questions}
            activeQuestionIndex={activeQuestionIndex}
          />

          <MultipleChoice
            data={questions[activeQuestionIndex]}
            onComplete={onComplete}
            onPlaying={onPlaying}
            questions={questions}
            setQuestions={setQuestions}
            activeQuestionIndex={activeQuestionIndex}
            handleToNextQuestion={onChangeQuestion}
          />
        </div>
        <div className="col-md-3">
          <Timer />
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
