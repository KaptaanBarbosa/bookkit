var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bookshop');
let Books = require('./models/books')

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'public','index.html'))
})
// Here the crud apis starts
// --- POST ---
app.post('/savebooks',(req,res)=>{
  const bookdata = req.body;
  console.log("inside the post book functionality ************",bookdata)
  Books.create(bookdata,(err,books)=>{
    if(err){
      console.log("I am inside the error \n \n ::::::::::::::::::::::::: \n",err);
      throw err;      
    } 
    res.json(books);
  })
})  
//Here the crud apis ends



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
  res.json({
    message: err.message,
    error: err
  });
  res.render('error');
});
app.use(express.static('public'));

app.listen(2003,()=>{
  console.log("code is working fine ..... on 2003");
})
module.exports = app;
