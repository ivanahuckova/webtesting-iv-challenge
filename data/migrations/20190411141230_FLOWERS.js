exports.up = function(knex, Promise) {
  return knex.schema.createTable('flowers', function(table) {
    table.increments();
    table.string('flower');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('flowers');
};
