var passport = require('passport');
var LocalStrategy = require('passport-local');
const Users = require('../model/user.model');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');


passport.serializeUser((user, Done) => {

    Done(null, user._id);
});


passport.deserializeUser(async (id, Done) => {
    try {
    
        const user = await Users.findById(id);

        if (!user) {
            return Done(null, false, { message: 'User not found.' });
        }

        Done(null, user);


    } catch (error) {
        Done(error, null);
    }
});



async function authUser(username, password, Done) {
  try {
      const user = await Users.findOne({ username: username });

      if (!user) {
          return Done(null, false, { message: 'Incorrect username.' });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
          return Done(null, false, { message: 'Incorrect password.' });
      }

      return Done(null, user);

  } catch (error) {
      return Done(error);
  }
}


passport.use(new LocalStrategy(authUser));

module.exports = passport;