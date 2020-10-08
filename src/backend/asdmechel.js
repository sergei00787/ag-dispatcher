const express = require('express');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const cors = require("cors");
const passport = require('passport');

const userRouter = require("./routes/user.routes.js");
const authRouter = require('./routes/auth.routes.js');

require('./passport.js');

const app = express();
const port = 3001;

let corsOptions = {
  // origin: "http://localhost:3000"
  origin: "http://localhost",
  // credentials: true
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser("asdtoken"));

app.get('/', (req, res) => {
  res.json({ message: "Welcome to API Asd-Mechel" });
})

// app.use('/', index);

app.use('/auth', authRouter);
app.use("/users", passport.authenticate('jwt',{ session: false }) , userRouter);
// app.use("/users", userRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})

module.exports = app;