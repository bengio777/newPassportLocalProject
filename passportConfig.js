var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var knex = require('./knexConfig.js')

passport.use(
  new LocalStrategy((username, password, done) => {
    console.log(username, password);
    done(null, true)
  })
)
