var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var firebase = require('firebase');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var salesRouter = require('./routes/sales');
var servicesRouter = require('./routes/services');
var custRouter = require('./routes/customers');
var reportsRouter = require('./routes/reports');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const firebaseConfig = {
    apiKey: "AIzaSyAACwgHogpnn7wurmlzydwMfK4L_Y1XNHM",
    authDomain: "car-services-ebe6e.firebaseapp.com",
    databaseURL: "https://car-services-ebe6e.firebaseio.com",
    projectId: "car-services-ebe6e",
    storageBucket: "car-services-ebe6e.appspot.com",
    messagingSenderId: "489088253961",
    appId: "1:489088253961:web:cf8b2365424688100cb8d8",
    measurementId: "G-XY8GXL5YET"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  // var userId = firebase.auth().currentUser.uid;
 




app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/sales', salesRouter);
app.use('/services', servicesRouter);
app.use('/customers', custRouter);
app.use('/reports', reportsRouter);

app.post('/services/add', (req, res) => {
  
  var sid,cid;
  sid = req.body.showroomId;
  cid = req.body.customerId;
  addServices(sid,cid);
  res.redirect('/services');
})

async function addServices(sid,cid){
  await firebase.database().ref('/customers/cusid').once('value').then( function(snapshot) {
    console.log(snapshot.val().fname);
    // ...
  });
  console.log("Form Data is :",sid,cid);

}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
