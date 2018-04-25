
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('shows', function (table) {
      table.integer('show_id').unsigned()
      table.foreign('show_id').references('users.id')
    }),
    knex.schema.createTable('users', function(table){
      table.increments('id').primary();
      table.string('name').notNullable().unique();

    })

  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('shows', function (table) {
      table.dropColumns('show_id');
      table.dropForeign('show_id');
    }),
    knex.schema.dropTable('users')
  ]);
};
