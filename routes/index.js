var express = require('express');
var router = express.Router();
var knex = require('../knexConfig.js')
var passport = require('passport')
var userModel = require('../models/userModel')

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('user_tbl').then(user => res.json(user))
});

router.get('/login', (req, res, next) => {
  res.render('login', {message: ''})
})

router.post('/login',
  (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if(!user){
        return res.render('login', { message: info.message })
      } else {
        res.render('profile', {user: user.info})
        res.json(user.info)
      }
    })(req, res, next)
  })

router.route('/register')
  .get((req, res, next) => res.render('register'))
  .post((req, res, next) => {
    userModel.createUser(req.body).then(userResponse => res.redirect('/login'))
  })

module.exports = router;
