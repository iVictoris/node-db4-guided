exports.up = async function(knex) {
  await knex.schema.createTable('zoos', (table) => {
    table.increment('id')
    table.string('name').notNullable()
    table.string('address').notNullable()
  })
  
  await knex.schema.createTable('animals', (table) => {
    table.increment('id')
    table.string('name').notNullable()
    table.integer('species_id')
      .notNullable()
      .references('id')
      .inTable('species');
  })

  await knex.schema.createTable('species', (table) => {
    table.increment('id');
    table.string('name').notNullable();
  })

  
};

exports.down = async function(knex) {

};
