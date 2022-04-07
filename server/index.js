var express = require('express')
const http = require("http");
var app = express();
const server = http.createServer(app);

const socketIo = require("socket.io")(server, {
    cors: {
        origin: "*",
    }
  });


socketIo.on("connection", (socket) => {
  console.log("New client connected" + socket.id);

  socket.emit("getId", socket.id);

  //game dnd
  socket.on("sendDataListQuestion", function(data) {
    console.log(data)
    socketIo.emit("sendDataServerListQuestion", { data });
  })
  socket.on("sendDataListAnswer", function(data) {
    console.log(data)
    socketIo.emit("sendDataServerListAnswer", { data });
  })
  //end game dnd

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(3000, () => {
    console.log('Server đang chay tren cong 3000');
});