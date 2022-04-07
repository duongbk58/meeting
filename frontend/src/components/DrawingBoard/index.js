import { useEffect, useState } from "react";
import { fabric } from "fabric";
import BookToolSketch from "components/BookTool/BookToolSketch";
import BookToolMenu from "components/BookTool/BookToolMenu";
// import { connect, useSelector, useDispatch } from "react-redux";

function DrawingBoard() {

  // const bookTool = useSelector(
  //   (state) => state.readingBookReducers.bookTool.game
  // );

  const bookTool = 
  {
    control: true,
    drawType: "pencil"
  }
  // const draw = (currentPage?.draws || []).find(
  //   (draw) =>
  //     draw.object_id === objectId &&
  //     draw.object_layer === (isShowQuestion ? "main" : "background")
  // );
  const draw = ""

  const saveCanvasObjects = (data) => {
    console.log("data", data)
  }

  useEffect(() => {}, []);

  return (
    <>
    <h1>test</h1>
    <BookToolMenu
            bookTool={bookTool}
            // onChangeDrawType={onChangeDrawType}
            // onChangeLineColor={onChangeLineColor}
            // onChangeLineWidth={onChangeLineWidth}
            // onSwitchControl={onSwitchControl}
          />
       <BookToolSketch
          bookTool={bookTool}
          // draw={draw}
          saveCanvasObjects={saveCanvasObjects}
        />
    </>
  );
}

export default DrawingBoard;
