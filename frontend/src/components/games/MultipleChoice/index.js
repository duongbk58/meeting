import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { onFormatDataGameConfig } from "../MatchBackGround/selection";
import AnswerItem from "./AnswerItem";
import QuestionContent from "./QuestionContent";
import styled from "styled-components";

const MultipleChoice = ({
  data,
  activeQuestionIndex,
  questions,
  setQuestions,
}) => {
  const { register, handleSubmit, setValue, getValues } = useForm();

  useEffect(() => {
    setValue("selectedAnswer", data?.selectedAnswer);
  }, [data]);

  console.log("question", data);

  console.log("activeQuestionIndex", activeQuestionIndex);

  const [checked, setChecked] = useState(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  const _handleSubmit = (data) => {
    console.log("submit", data);
    const selected = data;
    setQuestions(
      questions.map((question, _index) =>
        _index === activeQuestionIndex ? { ...question, ...selected } : question
      )
    );
  };

  const handlePlaying = () => {};

  return (
    <>
      <form onSubmit={handleSubmit(_handleSubmit)}>
        <div className="content mb-5 pb-5 monkey-color-black">
          <QuestionContent data={data} />
          <div>
            <div style={{ margin: 0 }} className="row">
              {data?.answers?.map((answer, index) => {
                return (
                  <AnswerItem
                    data={data}
                    answer={answer}
                    checked={checked}
                    key={index}
                    register={register}
                    handlePlaying={handlePlaying}
                  />
                );
              })}
            </div>
          </div>
          <ButtonCheck type="submit">Kiểm tra</ButtonCheck>
        </div>
      </form>
    </>
  );
};

const ButtonCheck = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  background: #ff7707;
  padding: 10px 20px;
  border-radius: 10px;
  margin-right: 10px;
`;

export default MultipleChoice;
