const express = require('express')
const router = express.Router()
const User = require('../models/User')

/* GET home page */
router.get('/', (req, res, next) => {
  res.status(200).json({message: 'welcome to the bodorrio'})
})

router.post('/form', (req, res, next) => {
  const {confirm, numberPeople, alergies, specialDiet, comments} = req.body
  const { _id} = req.user

  User.findOneAndUpdate({ _id }, { confirm, numberPeople, alergies, specialDiet, comments} ).then( userUpdated =>{
    return res.status(200).json(userUpdated)
  }).catch(err => {
    return res.status(500).json(err)
  })

})

module.exports = router