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
  handleToNextQuestion,
}) => {
  const { register, handleSubmit, setValue, getValues, reset } = useForm();

  useEffect(() => {
    console.log(data);
    // setValue("selectedAnswer", data?.selectedAnswer);
  }, [data]);
  console.log("getValue", getValues());

  // const [checked, setChecked] = useState(data.selectedAnswer);
  const [checked, setChecked] = useState(false);

  const [showNext, setShowNext] = useState(false);

  const _handleSubmit = (dataForm) => {
    let isCorrect = 1;
    setChecked(true);
    const check = data.answers.find((pre) => pre.is_correct).answer_id;
    if (check == dataForm.selectedAnswer) {
      isCorrect = 2;
    } else {
    }
    const selected = dataForm;
    setQuestions(
      questions.map((question, _index) =>
        _index === activeQuestionIndex
          ? { ...question, ...selected, isCorrect: isCorrect }
          : question
      )
    );
    setShowNext(true);
  };
  const goToNextQuestion = () => {
    handleToNextQuestion(activeQuestionIndex + 1);
    setShowNext(false);
    reset();
  };
  const handlePlaying = () => {
    const formValues = getValues();
    setChecked(false);
    // onPlaying(formValues.selectedAnswer === data?.selectedAnswer);
  };

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
          {!showNext ? (
            <ButtonCheck type="submit">Kiểm tra</ButtonCheck>
          ) : (
            <ButtonCheck onClick={() => goToNextQuestion()}>
              Tiếp tục
            </ButtonCheck>
          )}
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
