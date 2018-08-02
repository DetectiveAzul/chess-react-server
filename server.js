const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');

//This will allow to use this server on both local and herokuApp deploy
let port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('Server listening on port ', port);
});
