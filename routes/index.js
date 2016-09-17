var express = require('express');
var router = express.Router();
var knex = require('../knexConfig.js')
var passport = require('passport')

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('user_tbl').then(user => res.json(user))
});

router.get('/login', (req, res, next) => {
  res.render('login')
})

router.post('/login', passport.authenticate('local', {
  failureRedirect: '/'
}), (req, res, next) => {
  res.send("woot")
})

module.exports = router;
