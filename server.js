const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

//For heroku
let port = process.env.PORT || 8080;

// allows cross origin resource sharing
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

io.on('connection', function(socket){
  // socket.on('chat', (message) => {
  //   io.sockets.emit('chat', message);
  // });
});

const server = http.listen(port, () => {
  console.log('Example app at', port);
});
