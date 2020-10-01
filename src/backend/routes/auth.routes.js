const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const passport = require('passport');


/* POST login. */
router.post('/login', function (req, res, next) {

  passport.authenticate('local', { session: false }, (err, user, info) => {
    // console.log(err);
    if (err || !user) {
      return res.status(400).json({
        message: info ? info.message : 'Login failed',
        user: user
      });
    }

    req.login(user, { session: false }, (err) => {
      if (err) {
        res.send(err);
      }

      const token = jwt.sign(user, 'secretKeyA$D');

      res.cookie('asdtoken', token, { maxAge: 604800, httpOnly: true, signed: true });
      return res.json({ user, token });
    });
  })
    (req, res);

});

module.exports = router;