import _ from "lodash";
import styled from "styled-components";
import { TypeGameMultipleChoice } from "components/games/selection";
import styles from "./DoingExercise.module.scss";

export default function AnswerItem({
  data,
  answer,
  checked,
  onClickAudio,
  register,
  handlePlaying,
}) {
  const isSelected = checked && data.selectedAnswer == answer.answer_id;
  const isCorrect = checked && Boolean(answer?.is_correct);

  return (
    <div className="col-md-6 mt-4">
      <label className="d-block h-100 m-0 cursor" htmlFor={answer.answer_id}>
        <PAnswer
          className="h-100 position-relative"
          fillBorder={isSelected}
          correctAnswer={isCorrect}
        >
          <div className="ml-3">
            <Checkbox
              className="container d-flex cursor pr-0 mb-0"
              fillCheckbox={isSelected}
              correctAnswer={isCorrect}
            >
              <input
                id={answer.answer_id}
                ref={register({ required: true })}
                type="radio"
                value={answer.answer_id}
                name="selectedAnswer"
                onChange={() => {
                  handlePlaying();
                }}
              />
              {answer?.icon[0]?.props && answer?.icon[0]?.props[0]?.text}
              <span className="checkmark"></span>
            </Checkbox>
          </div>
        </PAnswer>
      </label>
    </div>
  );
}

const PAnswer = styled.div`
  min-height: 48px;
  background: ${(props) =>
    !props.fillBorder ? "#fff" : props.correctAnswer ? "#E2FFD6" : "#FDE0CD"};
  border: 2px solid
    ${(props) =>
      !props.fillBorder ? "#eaeced" : props.correctAnswer ? "#23BF2D" : "red"};
  border-radius: 10px;
  margin: 5px;
`;
const Checkbox = styled.label`
  font-size: 26px;
  margin-top: 10px;
  &.container {
    position: relative;
    padding-left: 35px;
    input {
      display: none;
      &:checked ~ .checkmark {
        background-color: ${(props) =>
          !props.fillCheckbox
            ? "#f70"
            : props.correctAnswer
            ? "#23BF2D"
            : "red"};
      }
      &:checked ~ .checkmark:after {
        display: block;
      }
    }
    .checkmark {
      position: absolute;
      top: 20px;
      transform: translateY(-50%);
      left: 8px;
      height: 20px;
      width: 20px;
      background-color: #eee;
      border-radius: 50%;
      &:after {
        content: "";
        position: absolute;
        display: none;
        width: 5px;
        height: 5px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background-color: white;
      }
    }
  }
`;
