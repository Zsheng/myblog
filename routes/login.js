const express = require('express');

const router = express.Router();

const User = require('../models/user');

/* Get login page */
router.get('/', (req, res) => {
  if (req.cookies.logIn) {
    res.render('index');
  } else {
    res.render('login');
  }
});

router.post('/', (req, res) => {
  const logIn = 0;
  const email = req.body.email;
  const passwd = req.body.password;
  const isRemember = req.body.isRemember;

  if (isRemember) {
    res.cookie('logIn', logIn + 1);
  }
  User.find({ email, passwd }, (err, user) => {
    if (err) res.send(err.message);
    res.render('index', { user });
  });
});

module.exports = router;