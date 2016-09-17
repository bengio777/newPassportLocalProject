var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var knex = require('./knexConfig.js')
var bcrypt = require('bcrypt')
var userModel = require('./models/userModel')

passport.use(
  new LocalStrategy((username, password, done) => {
    userModel.getUser({ username })
    .then((userResponse) => {
      if(bcrypt.compareSync(password, userResponse.password)){
        done(null, {info: userResponse})
      } else {
        done(null, false, { message: "your password is wrong" })
      }
    })
  })
)

passport.serializeUser(function(user, done) {
  done(null, user);
})

passport.deserializeUser(function(user, done) {
  done(null, user);
})
