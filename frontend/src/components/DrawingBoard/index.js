import { useEffect, useState, useRef } from "react";
import { fabric } from "fabric";
import BookToolSketch from "components/BookTool/BookToolSketch";
import BookToolMenu from "components/BookTool/BookToolMenu";
// import { connect, useSelector, useDispatch } from "react-redux";
import socketIOClient from "socket.io-client";
const host = "http://localhost:3000";

function DrawingBoard() {

  const [draw, setDraw] = useState("")

  const socketRef = useRef();
  const messagesEnd = useRef();
  
  useEffect(() => {
    socketRef.current = socketIOClient.connect(host);

    socketRef.current.on("getId", (data) => {
    });

    socketRef.current.on("sendDataServerDashBoard", (dataGot) => {
      const a = JSON.parse(dataGot)
      console.log("dataGot", a)
      setDraw(a)
      // console.log("sendDataServerDashBoard", JSON.parse(dataGot))
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [draw]);

  const [bookTool, setBookTool] = useState({
    control: true,
    drawType: "pencil"
  })


  const saveCanvasObjects = (data) => {
    socketRef.current.emit("sendDataDashBoard", JSON.stringify(data));
  }

  const onChangeDrawType = (data) => {
    console.log("change", data)
    setBookTool({
      control: true,
      drawType: data
    })
  }

  return (
    <>
    <h1>test</h1>
    <BookToolMenu
            bookTool={bookTool}
            onChangeDrawType={onChangeDrawType}
            // onChangeLineColor={onChangeLineColor}
            // onChangeLineWidth={onChangeLineWidth}
            // onSwitchControl={onSwitchControl}
          />
       <BookToolSketch
          bookTool={bookTool}
          // objects={draw}
          saveCanvasObjects={saveCanvasObjects}
          newObjects={draw}
        />
    </>
  );
}

export default DrawingBoard;
