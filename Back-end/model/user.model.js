const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {
      type: String,
      required: true,
      unique: true
  },
  password: {
      type: String,
      required: true
  },
});


  userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    try {
      next();
    } catch (error) {
      next(error);
    }
  });



  module.exports = mongoose.model('User', userSchema);