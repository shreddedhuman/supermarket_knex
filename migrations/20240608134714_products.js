exports.up = function(knex) {
    return knex.schema.createTable('products', function(table) {
      table.increments('product_id').primary(); 
      table.string('name').notNullable(); 
      table.text('description'); 
      table.decimal('price', 8, 2).notNullable(); 
      table.string('sku').notNullable().unique();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('products');
  };
  