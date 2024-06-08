exports.up = function(knex) {
    return knex.schema.createTable('sales', function(table) {
      table.increments('sale_id').primary(); 
      table.integer('customer_id').notNullable(); 
      table.foreign('customer_id').references('customer_id').inTable('customers'); 
      table.date('date').notNullable();
      table.decimal('total', 8, 2).notNullable(); 
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('sales');
  };
  