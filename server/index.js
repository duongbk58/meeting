var express = require("express");
const http = require("http");
var app = express();
const server = http.createServer(app);

const socketIo = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

socketIo.on("connection", (socket) => {
  console.log("New client connected" + socket.id);

  socket.emit("getId", socket.id);
  //canvas
  socketIo.on("connection", (socket) => {
    console.log("User Online");

    socket.on("canvas-data", (data) => {
      socket.emit("canvas-data", data);
    });
  });
  //game dnd
  socket.on("sendDataListQuestion", function (data) {
    console.log(data);
    socketIo.emit("sendDataServerListQuestion", { data });
  });
  socket.on("sendDataListAnswer", function (data) {
    console.log(data);
    socketIo.emit("sendDataServerListAnswer", { data });
  });
  //end game dnd

  //game matching
  socket.on("sendDataListLine", function (data) {
    console.log(data);
    socketIo.emit("sendDataServerListLine", { data });
  });
  //end game matching

  //dash board
  socket.on("sendDataDashBoard", function (data) {
    console.log(data);
    socketIo.emit("sendDataServerDashBoard", data);
  });
  //end dash board

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(3000, () => {
  console.log("Server đang chay tren cong 3000");
});
