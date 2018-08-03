const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
const parser = require('body-parser');
const indexRouter = require('./routers/index_router.js');

//For heroku
// let port = process.env.PORT || 8080;

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));

// allows cross origin resource sharing
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//socket conections
io.on('connection', function(socket){

  socket.on('chat', (message) => {
    io.sockets.emit('chat', message);
  });

  socket.on('chess-moved', (newPos) => {
    io.sockets.emit('chess-received', newPos);
  });


});


app.use(parser.json());
app.use(indexRouter);

const server = http.listen(3001, () => {
  console.log('Example app at', 3001);
});
