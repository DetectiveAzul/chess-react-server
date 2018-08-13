# xChess 1.0

**xChess** is a learning project I have developed in order to learn the tricks and secrets behind React JS. In a few fancy buzzword, **xChess** is a **React Single-Page** web application for playing chess powered with **Socket.IO** for network play, **Express** to handle **RESTful** routes that help the app to store/retrieve games on a **MongoDB** database and allowing multiple players to play multiple games at the same time, against other Human players or even a basic IA. 

I have some libraries to ease a bit the process of creating the Chessboard and integrating it with Chess moves. If you are interested specifically on the source of this libraries, I totally recommend you to visit their own documentation: 

* [Chess.js](https://github.com/jhlywa/chess.js/blob/master/README.md)
* [Chessboard.js](http://chessboardjs.com/)
* [Chessboard.js REACT](https://github.com/siansell/react-chessboardjs)

For the notification system I used a React Component available from NPM itself:

* [React Browser Notifications](https://www.npmjs.com/package/react-browser-notifications)

And, of course, the more wide-known: 

* [React](https://github.com/facebook/create-react-app)
* [Express](http://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Socket.io](https://socket.io/)

![Chess APP screenshot](
https://github.com/DetectiveAzul/xChess/blob/master/Screen%20Shot%202018-08-13%20at%2012.24.23.png?raw=true)

* [General REPO](https://github.com/DetectiveAzul/xChess)
* [Client REPO](https://github.com/DetectiveAzul/chess-react)
* [Server REPO](https://github.com/DetectiveAzul/chess-react-server)

## Instructions

To install a local version of xChess you need first to have installed NPM and MongoDB. 

* Install npm: `$ brew install npm`
* Install mongodb: `$ brew install mongodb`
* If prompted, install node
* Download server `$ git clone https://github.com/DetectiveAzul/chess-react-server`
* Go into the folder `$ cd chess-react-server`
* Run npm packager `$ npm install`
* Create development database: `$ mongod`
* Run server on a new tab: `$ npm start`
* `$cd ..`
* Download client `$ git clone https://github.com/DetectiveAzul/chess-react`
* Run npm packager `$ npm install`
* Run client `$ npm start`

## Run
* Open Google Chrome and go to `http://localhost:3000`

## About playing against Humans
* Lobby only loads the list of games when mounting the components and when deleting games, so if you don't see your friends game, just reload the page. 
