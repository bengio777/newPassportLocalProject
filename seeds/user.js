
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_tbl').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('user_tbl').insert({ username: 'rowValue1', password:"kitty"}),
        knex('user_tbl').insert({ username: 'rowValue2', password:"kitty"}),
        knex('user_tbl').insert({ username: 'rowValue2', password:"kitty"}),
        knex('user_tbl').insert({ username: 'rowValue3', password:"kitty"})
      ]);
    });
};
