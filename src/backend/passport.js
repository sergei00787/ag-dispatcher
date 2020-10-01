const db = require("./models/");
const User = db.user;
const Op = db.Sequelize.Op;

const passport = require('passport');
const passportJWT = require("passport-jwt");

const ExtractJWT = passportJWT.ExtractJwt;

const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = passportJWT.Strategy;

const bcrypt = require("bcryptjs");


function getHash(pwd) {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(pwd, salt);
}


passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
},
  function (username, password, cb) {

    //Assume there is a DB module pproviding a global UserModel
    return User.findOne(
      {
        where: { username: username }
      }
    )
      .then(user => {
        if (!user || !bcrypt.compareSync(password, user.password)) {

          return cb(null, false, { message: 'Incorrect email or password.' });
        }
        return cb(null, user.dataValues, {
          message: 'Logged In Successfully'
        });
      })
      .catch(err => {
        return cb(err);
      });
  }
));

let cookieExtractor = function(req) {
  var token = null;
  if (req && req.cookies) token = req.cookies['asdtoken'];
  return token;
};

passport.use(new JWTStrategy({
  //jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  // jwtFromRequest: ExtractJWT.fromHeader('asdtoken'),
  jwtFromRequest: cookieExtractor,
  secretOrKey: 'secretKeyA$D'
},
  function (jwtPayload, cb) {

    //find the user in db if needed
    return User.findOne({ id: jwtPayload.id })
      .then(user => {
        return cb(null, user);
      })
      .catch(err => {
        return cb(err);
      });
  }
));