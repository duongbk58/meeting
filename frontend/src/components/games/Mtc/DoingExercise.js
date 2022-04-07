import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import "./Mtc.css";
// import {
//   AUDIO_ERROR,
//   AUDIO_SUCCESS,
//   TypeGameMultipleChoice,
//   URL_AUDIO,
//   URL_IMAGE_QUESTION,
// } from "../../../constants/type";
import _ from "lodash";
// import ReactAudioPlayer from "react-audio-player";

import useSound from "use-sound";
// import UseSound from "components/UseSound";
import {
  onFormatDataGameConfig,
  onFormatListAnswer,
  onFormatQuestion,
} from "./selection";

export default function DoingExercise({ data, src }) {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const [question, setQuestion] = useState(onFormatQuestion(data));
  // const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [srcAudio, setStateSrcAudio] = useState("");
  const [showButtonNext, setShowButtonNext] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [countAnswerCorrect, setCountAnswerCorrect] = useState(0);
  const [listAnswer, setListAnswer] = useState(onFormatListAnswer(data));

  // console.log("question", question.question.props[0].text);
  console.log("listanswer", listAnswer);
  useEffect(() => {
    setQuestion(data);
  }, [data]);

  // const questions = [
  //   { title: "Câu 1", value: "1" },
  //   { title: "Câu 2", value: "2" },
  //   { title: "Câu 3", value: "3" },
  //   { title: "Câu 4", value: "4" },
  // ];

  // const goToQuestion = () => {
  //   // let index = activeQuestionIndex + 1;
  //   // if (index > questions.length - 1) {
  //   let countAnswerCorrect = 0;
  //   question.forEach((question) => {
  //     if (
  //       parseInt(question.correct_answer) === parseInt(question.selectedAnswer)
  //     ) {
  //       countAnswerCorrect = countAnswerCorrect + 1;
  //     }
  //   });
  //   setCountAnswerCorrect(countAnswerCorrect);
  //   setShowResult(true);
  //   // }
  //   // else {
  //   //   setActiveQuestionIndex(index);
  //   //   const nextQuestion = questions.find((_item, _index) => _index === index);
  //   //   setValue("selectedAnswer", nextQuestion.selectedAnswer);
  //   //   setShowButtonNext(false);
  //   // }
  // };

  const onCheck = (data) => {
    // setQuestions(
    //   questions.map((question, _index) =>
    //     _index === activeQuestionIndex
    //       ? { ...question, selectedAnswer: data.selectedAnswer }
    //       : question
    //   )
    // );
    // if (
    //   parseInt(data.selectedAnswer) ===
    //   parseInt(questions[activeQuestionIndex].correct_answer)
    // ) {
    //   setStateSrcAudio(AUDIO_SUCCESS);
    // } else {
    //   setStateSrcAudio(AUDIO_ERROR);
    // }

    setTimeout(function () {
      setStateSrcAudio("");
    }, 1000);
    setShowButtonNext(true);
  };

  // const activeQuestion = questions[activeQuestionIndex];
  // const [play] = useSound(src);

  if (!question) {
    return <div>Chon cau hoi</div>;
  }

  return (
    <>
      {showResult ? (
        <div>
          <h1>
            Số câu trả lời đúng là: {countAnswerCorrect} / {question.length}
          </h1>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onCheck)}>
          <div className="content pb-5">
            <div style={{ marginRight: 0 }} className="col mt-3 mb-5">
              <PQuestion className="d-flex justify-content-between align-items-center">
                Tieu de cau hoi
                {/* {question.question?.props[0]?.text} */}
                {/* <div className="text-center">
                  {_.includes(
                    question?.data?.game_config?.type_question,
                    TypeGameMultipleChoice.TEXT
                  ) &&
                    question?.question?.props && (
                      <p className="text-left" style={{ marginLeft: 25 }}>
                        <LatextComponent
                          typeText={question.data.game_config.type_text}
                          data={question?.question?.props[0]?.text}
                        />
                        {question?.question?.props[0]?.text}
                      </p>
                    )}
                </div>  */}
              </PQuestion>
            </div>
          </div>
          <div style={{ margin: 0 }} className="row mt-2">
            {listAnswer.map((question, index) => {
              return (
                <div
                  className="col-md-6 mb-5"
                  key={index}
                  style={{ height: "100px" }}
                >
                  <label className="d-block h-100 m-0 cursor ">
                    <PAnswer className="h-100 position-relative ">
                      <div className="ml-3">
                        <Checkbox className="container d-flex cursor pr-0 mb-0">
                          <input
                            type="radio"
                            name="lname"
                            // id="answer"
                            // value={answer.answer_id}
                          />
                          <span className="checkmark"></span>
                          {question.title}
                        </Checkbox>
                      </div>
                    </PAnswer>
                  </label>
                </div>
              );
            })}
          </div>

          <DivFooter className="d-flex align-items-center justify-content-around mt-3">
            <div></div>

            <div className="d-flex justify-content-center">
              {!showButtonNext ? (
                <ButtonCheck
                  className="btn monkey-bg-question mr-1 pl-5 pr-5"
                  type="submit"
                >
                  <span style={{ color: "white" }}>Kiểm tra</span>
                </ButtonCheck>
              ) : (
                <div
                  className="btn monkey-bg-question pl-5 pr-5"
                  // onClick={() => goToQuestion()}
                >
                  <span
                    // onClick={() => onPageClick}
                    style={{ color: "white" }}
                  >
                    Tiếp tục
                  </span>
                </div>
              )}
            </div>
            {/* <ReactAudioPlayer
              src={srcAudio}
              className="d-none"
              autoPlay={true}
              controls={true}
            /> */}
          </DivFooter>
        </form>
      )}
    </>
  );
}

const DivNumberAnswer = styled.div`
  height: 25px;
  width: 25px;
  background-color: #606e78;
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
  cursor: pointer;
  &:active {
    background-color: #ff7707;
  }
`;

const DivFooter = styled.div`
  background-color: #eaeced;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 80px;
`;

const PQuestion = styled.p`
  color: black;
  padding: 0.7rem 1.5rem;
  border-radius: 10px;
  margin: 30px 5px 5px 5px;
  position: relative;
  font-size: 25px;
`;

const PAnswer = styled.div`
  min-height: 48px;
  color: black;
  padding: 0.7rem 1.5rem;
  /* background: ${(props) =>
    !props.selectedAnswer
      ? "#fff"
      : props.correctAnswer
      ? "#E2FFD6"
      : "#FDE0CD"}; */
  background: #fff;
  border: 2px solid #ccc;
  /* ${(props) =>
    !props.selectedAnswer
      ? "#eaeced"
      : props.correctAnswer
      ? "#23BF2D"
      : "red"}; */
  border-radius: 10px;
  margin: 5px;
  position: relative;
`;
const PImage = styled.p`
  text-align: center;
`;
const PImage1 = styled.div`
  flex: 1;
`;
const Checkbox = styled.label`
  margin-top: 20px;
  &.container {
    position: relative;
    padding-left: 35px;
    input {
      display: none;
      &:checked ~ .checkmark {
        background-color: #ff7707;
      }
      &:checked ~ .checkmark:after {
        display: block;
      }
    }
    .checkmark {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      height: 25px;
      width: 25px;
      background-color: #eee;
      border-radius: 50%;
      &:after {
        content: "";
        position: absolute;
        display: none;
        width: 8px;
        height: 8px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background-color: white;
      }
    }
  }
`;
const ButtonCheck = styled.button`
  color: white;
  background-color: rgb(255, 119, 7);
  border-radius: 7px;
  height: 40px;
`;
