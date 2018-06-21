let express = require('express');
let path = require('path');
let reqLogger = require('morgan');
let rfs = require('rotating-file-stream');
const http_status_codes = require('http-status-codes');
let fs = require('fs');
let compression = require('compression');
const logger =require('./utils/Logger');


let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let bookRouter = require('./routes/book');


let app = express();


var logDirectory = path.join(__dirname, 'log')

fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
 
var accessLogStream = rfs('access.log', {
  interval: '1d', 
  path: logDirectory
});

app.use(reqLogger('combined', {stream: accessLogStream}))
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use( (req, res, next) => {  // CORS support for development
      res.header('Access-Control-Allow-Origin', "http://localhost:3001");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin");
    
        if ('OPTIONS' === req.method) {
          res.sendStatus(http_status_codes.OK);
        }
        else {
          next();
        }
    }
);


app.use(  (err, req, res, next) => { //exception handling
  let msg ="";
  if(req && req.username) msg += "User : "+ req.username;
  if(err && err.message) msg += " Error :"+ err.message;
  logger.error(msg, err);
  res.status(http_status_codes.INTERNAL_SERVER_ERROR).json(err);
});


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/book', bookRouter);

module.exports = app;
