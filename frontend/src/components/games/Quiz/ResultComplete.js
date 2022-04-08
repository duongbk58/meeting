import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { RESULT } from "constants/type";

export default function ResultComplete({ questions, title }) {
  const history = useHistory();
  const [countAnswerCorrect, setCountAnswerCorrect] = useState(0);
  const [pass, setPass] = useState();
console.log("question", questions)
  useEffect(() => {
    let countCorrect = 0;
    questions.map((question) => {
      if (question?.isCorrect == 2) {
        countCorrect = countCorrect + 1;
      }
    });
    setCountAnswerCorrect(countCorrect);
  }, []);

  useEffect(() => {
    countAnswerCorrect / 7 >= 0.7
      ? setPass(true)
      : setPass(false);
  }, [countAnswerCorrect]);

  return (
    <>
      <div className="mt-5 ml-5">
        <div style={{ fontSize: 32 }} className="text-center font-weight-bold">
          {title}
        </div>
        <h2 className="text-center font-weight-bold mt-5">
          <span style={{ color: "#FF7707" }} className="mr-1">
            {countAnswerCorrect}
          </span>
          /
          <span className="ml-1 mr-2" style={{ color: "#FF7707" }}>
            7
          </span>
          câu trả lời đúng
        </h2>
        {pass ? (
          <h3 className="text-center font-weight-normal mt-5">
            Chúc mừng bạn, Hãy tiếp tục luyện tập các bộ đề khác nhé!
          </h3>
        ) : (
          <h3 className="text-center font-weight-normal mt-5">
            Hãy tiếp tục luyện tập nhé!
          </h3>
        )}
        <div className="d-flex justify-content-center">
          <div
            className="btn monkey-bg-question mt-5"
          >
            <span style={{ color: "white" }}>Kết thúc</span>
          </div>
        </div>
      </div>
    </>
  );
}
