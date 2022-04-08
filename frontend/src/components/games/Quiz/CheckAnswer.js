import styled from "styled-components";
import { RESULT } from "constants/type";

export default function CheckAnswer({
  questions,
  onChangeQuestion,
  activeQuestionIndex,
  showCorrectAnswer,
}) {
  const getColor = (showResult, status) => {
    if (showResult) {
      if (status) {
        return status === RESULT._TRUE ? "green" : "red";
      } else {
        return "gray";
      }
    } else {
      return status ? "#2288DD" : "gray";
    }
  };

  return (
    <CheckQuestionWrapper>
      {questions?.map((question, index) => {
        const color = getColor(showCorrectAnswer, question?.isCorrect);
        return (
          <span className="mx-3">
            <Button
              type="button"
              onClick={() => onChangeQuestion(index)}
              backgroundColor={color}
              style={{
                backgroundColor: activeQuestionIndex === index ? "#ff7707" : "",
              }}
            >
              {index + 1}
            </Button>
          </span>
        );
      })}
    </CheckQuestionWrapper>
  );
}

const CheckQuestionWrapper = styled.div`
  font-size: 14px;
  @media (max-width: 767px) {
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
  }
`;
const Button = styled.button`
  background-color: ${(props) => props.backgroundColor};
  &:hover {
    background-color: #dba87d;
  }
  color: white;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  margin-bottom: 10px;
`;
