var express = require('express')
const http = require("http");
require('dotenv').config()
const bodyParser = require('body-parser')
const crypto = require('crypto')
const cors = require('cors')
var app = express();
const server = http.createServer(app);

app.use(bodyParser.json(), cors())
app.options('*', cors());

app.post('/', (req, res) => {

  const timestamp = new Date().getTime() - 30000
  const msg = Buffer.from(process.env.ZOOM_JWT_API_KEY + req.body.meetingNumber + timestamp + req.body.role).toString('base64')
  const hash = crypto.createHmac('sha256', process.env.ZOOM_JWT_API_SECRET).update(msg).digest('base64')
  const signature = Buffer.from(`${process.env.ZOOM_JWT_API_KEY}.${req.body.meetingNumber}.${timestamp}.${req.body.role}.${hash}`).toString('base64')

  res.json({
    signature: signature
  })
})


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

  //dash board
  socket.on("sendDataDashBoard", function(data) {
    console.log(data)
    socketIo.emit("sendDataServerDashBoard", data );
  })
  //end dash board

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(4000, () => {
    console.log('Server đang chay tren cong 3000');
});