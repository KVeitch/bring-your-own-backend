exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('teams', table => {
      table.increments('id').primary();
      table.string('teamName')
      table.unique('teamName');
      table.string('stadium');
      table.string('logoUrl');
      table.string('city');
      table.timestamp(true, true);
    }),

    knex.schema.createTable('players', table => {
      table.increments('id').primary();
      table.string('name');
      table.string('photoUrl');
      table.string('nationality');
      table.string('preferedFoot');
      table.integer('age').unsigned();
      table.string('team');
      table.foreign('team').references('teams.teamName');

      table.timestamp(true, true);
    })
  ]);
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('players'),
    knex.schema.dropTable('teams')
  ]);
};
