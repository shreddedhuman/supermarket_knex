exports.up = function(knex) {
    return knex.schema.createTable('sale_details', function(table) {
      table.increments('sale_detail_id').primary();
      table.integer('sale_id').notNullable(); 
      table.foreign('sale_id').references('sale_id').inTable('sales'); 
      table.integer('product_id').notNullable(); 
      table.foreign('product_id').references('product_id').inTable('products'); 
      table.integer('quantity').notNullable(); 
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('sale_details');
  };
  