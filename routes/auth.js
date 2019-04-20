const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


router.post("/login", ()=> {

  passport.authenticate('local', (err, user, failureDetails) => {
    if(err){res.status(500).json({message: 'something went wrong'})}
    if(!user){res.status(401).json(failureDetails)}
  } )
});

router.post("/signup", (req, res, next) => {
  const username = req.body.username
  const password = req.body.password
  const role = 'guest'
  if (username === "" || password === "") {
    res.status(403).json({message:'no username and password provided'})
    return;
  }

  User.findOne({
    username
  }, "username", (err, user) => {
    if (user !== null) {
      res.json(req.body);
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt)
    const hashPass = bcrypt.hashSync(password, salt)

    const newUser = new User({
      username,
      password: hashPass,
      role
    });

    newUser.save()
      .then(() => {
        res.redirect("/");
      })
      .catch(err => {
        res.render("auth/signup", {
          message: "Something went wrong"
        });
      })
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;