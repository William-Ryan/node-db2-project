
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        
        tbl
          .string('VIN', 17)
          .notNullable()
          .unique()
          .index();
  
        tbl
          .string('Make', 50)
          .notNullable();
  
        tbl
          .string('Model', 50)
          .notNullable();
  
        tbl
          .integer('Mileage')
          .notNullable();
  
        tbl
          .text('Transmission');
  
        tbl
          .text('Title Status');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars')
  };
  