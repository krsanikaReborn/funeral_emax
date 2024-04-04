const express = require('express');
const path = require('path');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const {connPool} = require('./config/dbConnect');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const obituaryRouter = require('./routes/obituary');
const consultRouter = require('./routes/consult');
const supportRouter = require('./routes/support');


class App{
  constructor(){
    this.app = express();
    this.setViewEngine();
    this.setMiddleWare();
    this.setStatic();
    this.getRouting();
    this.setLocals();
    this.errorHandler();
    this.setDBConnection();
  }

  setMiddleWare(){
    // HTTP -> HTTPS Redirection
    /*
    this.app.use((req, res, next) => {
      if (req.secure) {
        next();
      } else {
        const to = `https://${req.hostname}${req.url}`;
        res.redirect(to);
      }
    });
    */
    this.app.use(cors());
    this.app.use(logger('dev'));
    this.app.use(cookieParser());
//    this.app.use(passport.initialize());
//    passportConfig();

  }

  setViewEngine(){
    // view engine setup
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.set('view engine', 'ejs');
    this.app.set('views', path.join(__dirname, 'views'));
  }

  setStatic(){
    this.app.use(express.static(path.join(__dirname, 'public')));
  }

  setLocals(){
    this.app.use((req, res, next) => {
      this.app.locals.isLogin = true;
      next();
    });
          
  }

  getRouting(){
//    this.app.use(routes);
    this.app.use('/', indexRouter);
    this.app.use("/api/user", usersRouter);
    this.app.use("/api/obituary", obituaryRouter);
    this.app.use("/api/consult", consultRouter);
    this.app.use("/api/support", supportRouter);
  }

  errorHandler(){
    // catch 404 and forward to error handler
    this.app.use(function(req, res, next) {
      next(createError(404));
    });

    // error handler
    this.app.use(function(err, req, res, next) {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};

      // render the error page
      res.status(err.status || 500);
      res.render('error');
    });
  }
  
  setDBConnection(){
    connPool;
    
  }
}


module.exports = new App().app;
