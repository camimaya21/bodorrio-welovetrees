const express = require("express")
const passport = require("passport")
const router = express.Router()
const User = require("../models/User")

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt")
const bcryptSalt = 10

let loginPromise = (req, user) => {
  return new Promise((resolve, reject) => {
    req.login(user, e => e? reject(e):resolve(user))
  })
}

router.post("/login", (req, res, next) => {

  passport.authenticate("local",(err, user, failureDetails) => {
    if (err) return res.status(500).json({ message: 'Something went wrong' })
    if (!user) return res.status(401).json(failureDetails)
    loginPromise(req, user)
      .then(user => {
        const {username, name, confirm, alergies, numberPeople, specialDiet, comments } = user
        res.status(200).json({username, name, confirm, alergies, numberPeople, specialDiet, comments})
      })
      .catch(e => res.status(500).json({ message: e.message }))
  })(req,res,next)
})

router.post("/signup", (req, res, next) => {
  const {
    username,
    password,
    name,
    numberPeople,
    alergies,
    specialDiet,
    comments
  } = req.body

  const role = "guest"
  if (username === "" || password === "") {
    res.status(403).json({ message: "no username and password provided" })
    return
  }

  User.findOne({ username }, "username", (err, user) => {
      if (user !== null) {
        res.json(req.body)
        return
      }

      const salt = bcrypt.genSaltSync(bcryptSalt)
      const hashPass = bcrypt.hashSync(password, salt)

      const newUser = new User({
        username,
        password: hashPass,
        role,
        name,
        numberPeople,
        alergies,
        specialDiet,
        comments
      })

      newUser.save()
        .then(() => {
          res.status(200).json({ message: "OK", user })
        })
        .catch(err => {
          res.status(500).json({ message: "Something went wrong"})
        })
    }
  )
})

router.get("/loggedin", (req, res, next) => {
  const { user } = req
  if (req.isAuthenticated()) {
    res.status(200).json(user);
    return
  }
  res.status(403).json({ message: 'Unauthorized' })
})

router.get("/logout", (req, res, err) => {
  req.session.destroy(
    (err) => {
    err
    ? res.status(500).json({ message: "couldn't log out" })
    : res.status(200).json({ message: "OK" })
    }
  )
})

module.exports = router
