import { useEffect, useState } from "react";
import styled from "styled-components";

export default function ProgressBar({
  strokeWidth,
  questions,
  activeQuestionIndex,
}) {
  const [countSelectedAnswer, setCountSelectedAnswer] = useState(0);

  useEffect(() => {
    const questionSelectd = questions.filter((question) => question?.isCorrect);
    setCountSelectedAnswer(questionSelectd.length);
  }, [questions]);

  const percentage = (countSelectedAnswer / questions?.length) * 100;
  const radius = 50 - strokeWidth / 2;
  const pathDescription = `
      M 50,50 m 0,-${radius}
      a ${radius},${radius} 0 1 1 0,${2 * radius}
      a ${radius},${radius} 0 1 1 0,-${2 * radius}
    `;

  const diameter = Math.PI * 2 * radius;
  const progressStyle = {
    stroke: "#2ecc71",
    strokeLinecap: "round",
    strokeDasharray: `${diameter}px ${diameter}px`,
    strokeDashoffset: `${((100 - percentage) / 100) * diameter}px`,
  };

  return (
    <div className="d-flex justify-content-end ">
      <ProcessCirle
        className={"CircularProgressbar"}
        viewBox="0 0 100 100"
        width={100}
        height={100}
      >
        <path
          className="CircularProgressbar-trail"
          d={pathDescription}
          strokeWidth={strokeWidth}
          fillOpacity={0}
          style={{
            stroke: "#d6d6d6",
          }}
        />

        <path
          className="CircularProgressbar-path"
          d={pathDescription}
          strokeWidth={strokeWidth}
          fillOpacity={0}
          style={progressStyle}
        />

        <text
          className="CircularProgressbar-text"
          x={50}
          y={50}
          style={{
            fill: "#007dbc",
            fontSize: "24px",
            dominantBaseline: "central",
            textAnchor: "middle",
          }}
        >
          {`${countSelectedAnswer}/${questions?.length}`}
        </text>
      </ProcessCirle>
    </div>
  );
}

const ProcessCirle = styled.svg`
  @media (max-width: 767px) {
    width: 40px;
    height: 40px;
  }
`;
