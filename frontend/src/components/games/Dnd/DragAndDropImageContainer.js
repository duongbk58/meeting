import React, { useState, useEffect } from "react";
import _ from "lodash";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import styled from "styled-components";
import Example from "./example";
import { formatListDataAnswer, formatListDataQuestion } from "./selection";
import ButtonReset from "./components/ButtonReset";
import ReactAudioPlayer from "react-audio-player";
import { AUDIO_ERROR, AUDIO_SUCCESS } from "../../../constants/type";
import TitleQuestion from "./components/TitleQuestion";
import { formatQuestionTitle } from "../Dnd/selection";
import AlertReportGameComponent from "./components/AlertReportGameComponent";

const DrapAndDropImageContainer = ({ data, objectId }) => {
  const [listAnswer, setStateListAnswer] = useState(formatListDataAnswer(data));
  const [listQuestion, setStateListQuestion] = useState(
    formatListDataQuestion(data)
  );
  const [defaultListAnswer] = useState(formatListDataAnswer(data));
  const [srcAudio, setStateSrcAudio] = useState("");
  const [questionTitle] = useState(formatQuestionTitle(data));
  const [typeQuestion] = useState(data.game_config.type_question);
  const [fontSizeTitle] = useState(data.game_config.fontSizeTitle);
  const [numberInRow] = useState(data.game_config.number_in_row);
  const [widthImage] = useState(data.game_config.width_image);
  const [countAnswerCorrect, setStateCountAnswerCorrect] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  const [inputData, setInputData] = useState({});
  useEffect(() => {}, [data, listAnswer, listQuestion]);

  useEffect(() => {
    setInputData({ ...data.game_config });
  }, [data]);

  useEffect(() => {
    if (inputData.results) {
      let dataPost = {
        objectId: objectId,
        gameId: data.game_id,
        data: JSON.stringify(inputData),
      };
    }
  }, [inputData]);

  const onResetData = () => {
    setShowAlert(false);
    setStateListAnswer(formatListDataAnswer(data));
    setStateListQuestion(formatListDataQuestion(data));
    setStateCountAnswerCorrect(0);
  };

  const onHandleDrop = (index, item) => {
    const dataListAnswer = listAnswer.filter(
      (answer) => answer.icon_id_answer != item.icon[0].icon_id
    );

    let checkResult = false;

    listQuestion.map((question, indexQuestion) => {
      if (index === indexQuestion) {
        const dataAnswer = listAnswer.filter(
          (answer) => answer.icon_id_answer === item.icon[0].icon_id
        );
        if (question.icon_id == dataAnswer[0].icon_id_question) {
          checkResult = true;
        }
      }
    });

    if (checkResult) {
      setStateCountAnswerCorrect(countAnswerCorrect + 1);
    }

    checkResult
      ? setStateSrcAudio(AUDIO_SUCCESS)
      : setStateSrcAudio(AUDIO_ERROR);

    const dataListQuestion = listQuestion.map((question, indexQuestion) => {
      if (index === indexQuestion) {
        item.checkResult = checkResult;
        return {
          ...question,
          lastDroppedItem: [...question.lastDroppedItem, item],
        };
      } else {
        return { ...question };
      }
    });
    if (dataListAnswer.length == 0) {
      setShowAlert(true);
      setInputData({ ...inputData, results: dataListQuestion });
    }
    setStateListQuestion(dataListQuestion);
    setStateListAnswer(dataListAnswer);

    setTimeout(function () {
      setStateSrcAudio("");
    }, 1000);
  };
  return (
    <>
      <TitleQuestion
        questionTitle={questionTitle}
        fontSizeTitle={fontSizeTitle}
      />
      <AlertReportGameComponent
        show={showAlert}
        setShowAlert={setShowAlert}
        totalQuestion={defaultListAnswer.length}
        countCorrect={countAnswerCorrect}
      />
      <DndProvider backend={HTML5Backend}>
        <Example
          typeQuestion={typeQuestion}
          numberInRow={numberInRow}
          widthImage={widthImage}
          listAnswer={listAnswer}
          listQuestion={listQuestion}
          onHandleDrop={onHandleDrop}
        />
      </DndProvider>
      <ReactAudioPlayer
        src={srcAudio}
        className="d-none"
        autoPlay={true}
        controls={true}
      />
      <WrapperButtonReset>
        <ButtonReset
          isDislabeled={false}
          onResetData={onResetData}
          className=""
        />
      </WrapperButtonReset>
    </>
  );
};

const WrapperButtonReset = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 20;
`;

export default DrapAndDropImageContainer;
