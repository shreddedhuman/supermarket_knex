exports.up = function(knex) {
    return knex.schema.createTable('customers', function(table) {
      table.increments('customer_id').primary(); 
      table.string('first_name').notNullable();
      table.string('last_name').notNullable(); 
      table.string('email').notNullable().unique(); 
      table.string('phone').notNullable(); 
      table.string('street').notNullable(); 
      table.string('postal_code').notNullable(); 
      table.string('neighborhood').notNullable(); 
      table.string('city').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('customers');
  };
  