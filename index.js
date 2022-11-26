const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");

const { initializeDBConnection } = require("./db/db.connect");
const pageNotFound = require('./middleware/pageNotFound');
const internalSeverError = require('./middleware/internalServerError');
const userRouter = require('./routes/user.route');
const analyserRouter = require('./routes/analyser.route');
const authVerify = require('./middleware/authVerify');

const app = express();

app.use(cors());
app.use(bodyParser.json())

initializeDBConnection();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.use('/user', userRouter);
app.use('/analyser', authVerify, analyserRouter);

// ** Note: DO NOT MOVE (This should be last Route) **

// 404 error route Handler
app.use(pageNotFound);

// 500 server error handler
app.use(internalSeverError);


app.listen(3000, () => {
  console.log('server started');
});