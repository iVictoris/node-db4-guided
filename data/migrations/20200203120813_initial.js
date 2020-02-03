exports.up = async function(knex) {
  await knex.schema.createTable('zoos', (table) => {
    table.increment('id')
    table.string('name').notNullable()
    table.string('address').notNullable()
  })
  
  await knex.schema.createTable('animals', (table) => {
    
  })

  await knex.schema.createTable('species', (table) => {
    
  })

  
};

exports.down = async function(knex) {
  
};
