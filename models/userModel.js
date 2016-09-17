'use strict'
const knex = require('../knexConfig')
const bcrypt = require('bcrypt')

module.exports = {
  getUser: user => knex('user_tbl').where(user).first(),
  createUser: user => {
    return knex('user_tbl').insert({
      username: user.username,
      password: bcrypt.hashSync(user.password, 10)
    })
  }
}
