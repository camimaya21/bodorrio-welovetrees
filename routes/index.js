const express = require('express')
const router = express.Router()
const User = require('../models/User')

/* GET home page */
router.get('/', (req, res, next) => {
  res.status(200).json({message: 'welcome to the bodorrio'})
})

// router.post('/form', (req, res, err) => {
//   const {username, confirm, numberPeople, alergies, specialDiet} = req.body

//   User.findByIdAndUpdate(id, {


//   })

// })

module.exports = router