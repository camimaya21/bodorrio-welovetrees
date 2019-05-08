const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const userSchema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  role: {type: String, enum: ['guest', 'admin'], default:'guest', required: true},
  confirm: {type: String, enum: ['yes', 'no'], default: 'no'},
  name: {type: String },
  numberPeople: {type: Number, default: 1},
  alergies: {type: String, default:'no'},
  specialDiet: {type: String, enum: ['no', 'vegan', 'vegetarian', 'celiaco', 'paleo']},
  comments: {type: String}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

const User = mongoose.model('User', userSchema)
module.exports = User
