const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  role: {type: String, enum: ['guest', 'admin'], default:'guest', required: true},
  name: {type: String },
  numberPeople: {type: Number, default: 1, enum: [1, 2, 3]},
  alergies: {type: String, default:'no'},
  specialDiet: {type: String, enum: ['no', 'vegan', 'vegetarian', 'celiaco', 'paleo']},
  img: {type: String, default:'https://bit.ly/2SKt4Qg'}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
