exports.seed = function(knex) {
  return knex('customers').del()
    .then(function () {
      return knex('customers').insert([
        { customer_id: 1, first_name: 'Juan', last_name: 'Hernández', email: 'juan@mail.com', phone: '555-1234', street: 'Av. Juárez 123', postal_code: '12345', neighborhood: 'Centro', city: 'Ciudad de México' },
        { customer_id: 2, first_name: 'María', last_name: 'García', email: 'maria@mail.com', phone: '555-5678', street: 'Calle Hidalgo 456', postal_code: '67890', neighborhood: 'Reforma', city: 'Guadalajara' },
        { customer_id: 3, first_name: 'José', last_name: 'Martínez', email: 'jose@mail.com', phone: '555-9876', street: 'Av. Benito Juárez 789', postal_code: '54321', neighborhood: 'Condesa', city: 'Monterrey' },
        { customer_id: 4, first_name: 'Guadalupe', last_name: 'López', email: 'lupita@mail.com', phone: '555-4321', street: 'Av. Reforma 101', postal_code: '13579', neighborhood: 'Polanco', city: 'Puebla' },
        { customer_id: 5, first_name: 'Francisco', last_name: 'González', email: 'pancho@mail.com', phone: '555-8765', street: 'Calle Morelos 210', postal_code: '97531', neighborhood: 'Zona Centro', city: 'Tijuana' },
        { customer_id: 6, first_name: 'María', last_name: 'Rodríguez', email: 'maria.rodriguez@mail.com', phone: '555-2109', street: 'Av. Constitución 354', postal_code: '24680', neighborhood: 'Las Américas', city: 'León' },
        { customer_id: 7, first_name: 'Juan', last_name: 'Pérez', email: 'jperez@mail.com', phone: '555-1029', street: 'Av. López Mateos 789', postal_code: '86420', neighborhood: 'Del Valle', city: 'Cancún' },
        { customer_id: 8, first_name: 'Ana', last_name: 'Sánchez', email: 'ana.sanchez@mail.com', phone: '555-7689', street: 'Calle Bravo 456', postal_code: '12321', neighborhood: 'Lomas de Chapultepec', city: 'Mérida' },
        { customer_id: 9, first_name: 'Pedro', last_name: 'Gómez', email: 'pedro.gomez@mail.com', phone: '555-3210', street: 'Av. Miguel Hidalgo 753', postal_code: '54321', neighborhood: 'San Ángel', city: 'Querétaro' },
        { customer_id: 10, first_name: 'Rosa', last_name: 'Morales', email: 'rosa.morales@mail.com', phone: '555-9870', street: 'Calle Allende 890', postal_code: '13579', neighborhood: 'Juárez', city: 'Acapulco' },
        { customer_id: 11, first_name: 'Javier', last_name: 'Díaz', email: 'javier.diaz@mail.com', phone: '555-6543', street: 'Av. Zaragoza 159', postal_code: '97531', neighborhood: 'Centro Histórico', city: 'Hermosillo' },
        { customer_id: 12, first_name: 'Laura', last_name: 'Torres', email: 'laura.torres@mail.com', phone: '555-1098', street: 'Calle Guerrero 987', postal_code: '24680', neighborhood: 'La Paz', city: 'Toluca' },
        { customer_id: 13, first_name: 'Roberto', last_name: 'Ortiz', email: 'roberto.ortiz@mail.com', phone: '555-2109', street: 'Av. Revolución 456', postal_code: '86420', neighborhood: 'Cuauhtémoc', city: 'Culiacán' },
        { customer_id: 14, first_name: 'Verónica', last_name: 'Flores', email: 'veronica.flores@mail.com', phone: '555-7689', street: 'Av. Independencia 753', postal_code: '12321', neighborhood: 'Del Valle', city: 'Chihuahua' },
        { customer_id: 15, first_name: 'Carlos', last_name: 'Ramírez', email: 'carlos.ramirez@mail.com', phone: '555-3210', street: 'Calle Morelos 210', postal_code: '54321', neighborhood: 'San Jerónimo', city: 'Ciudad Juárez' }
      ]);
    })

    .then(function() {
      return knex('products').del();
    })
    .then(function () {
      return knex('products').insert([
        { product_id: 1, name: 'Apple', description: 'Fresh and juicy apple', price: '25.00', sku: 'APL001' },
        { product_id: 2, name: 'Banana', description: 'Ripe and sweet banana', price: '17.50', sku: 'BAN002' },
        { product_id: 3, name: 'Orange', description: 'Tangy and refreshing orange', price: '30.00', sku: 'ORG003' },
        { product_id: 4, name: 'Milk', description: 'Fresh dairy milk', price: '35.00', sku: 'MLK004' },
        { product_id: 5, name: 'Bread', description: 'Soft and fluffy bread loaf', price: '20.00', sku: 'BRD005' },
        { product_id: 6, name: 'Eggs', description: 'Farm-fresh eggs', price: '45.00', sku: 'EGG006' },
        { product_id: 7, name: 'Pasta', description: 'Imported Italian pasta', price: '40.00', sku: 'PST007' },
        { product_id: 8, name: 'Rice', description: 'Long-grain premium rice', price: '50.00', sku: 'RIC008' },
        { product_id: 9, name: 'Chicken', description: 'Boneless skinless chicken breast', price: '80.00', sku: 'CHN009' },
        { product_id: 10, name: 'Tomato', description: 'Ripe vine tomato', price: '10.00', sku: 'TMT010' },
        { product_id: 11, name: 'Potato', description: 'Fresh Idaho potato', price: '10.00', sku: 'POT011' },
        { product_id: 12, name: 'Salmon', description: 'Wild-caught Alaskan salmon fillet', price: '10.00', sku: 'SLM012' },
        { product_id: 13, name: 'Yogurt', description: 'Creamy Greek yogurt', price: '20.00', sku: 'YGT013' },
        { product_id: 14, name: 'Broccoli', description: 'Nutritious green broccoli crown', price: '15.00', sku: 'BRC014' },
        { product_id: 15, name: 'Coffee', description: 'Rich and aromatic coffee beans', price: '60.00', sku: 'COF015' }
      ]);
    })

    .then(function() {
      return knex('sales').del();
    })
    .then(function () {
      return knex('sales').insert([
        { sale_id: 136, customer_id: 1, date: '2024-06-01', total: '50.00' },
        { sale_id: 137, customer_id: 2, date: '2024-06-02', total: '75.00' },
        { sale_id: 138, customer_id: 3, date: '2024-06-03', total: '100.00' },
        { sale_id: 139, customer_id: 4, date: '2024-06-04', total: '25.00' },
        { sale_id: 140, customer_id: 5, date: '2024-06-05', total: '150.00' },
        { sale_id: 141, customer_id: 6, date: '2024-06-06', total: '80.00' },
        { sale_id: 142, customer_id: 7, date: '2024-06-07', total: '45.00' },
        { sale_id: 143, customer_id: 8, date: '2024-06-08', total: '60.00' },
        { sale_id: 144, customer_id: 9, date: '2024-06-09', total: '95.00' },
        { sale_id: 145, customer_id: 10, date: '2024-06-10', total: '120.00' },
        { sale_id: 146, customer_id: 11, date: '2024-06-11', total: '70.00' },
        { sale_id: 147, customer_id: 12, date: '2024-06-12', total: '55.00' },
        { sale_id: 148, customer_id: 13, date: '2024-06-13', total: '85.00' },
        { sale_id: 149, customer_id: 14, date: '2024-06-14', total: '40.00' },
        { sale_id: 150, customer_id: 15, date: '2024-06-15', total: '110.00' }
    ]);
    })

    .then(function() {
      return knex('sales_details').del();
    })
    .then(function () {
      return knex('sales_details').insert([
        { sale_detail_id: 31, sale_id: 1, product_id: 2, quantity: 1 },
        { sale_detail_id: 32, sale_id: 2, product_id: 3, quantity: 2 },
        { sale_detail_id: 33, sale_id: 3, product_id: 1, quantity: 3 },
        { sale_detail_id: 34, sale_id: 4, product_id: 2, quantity: 1 },
        { sale_detail_id: 35, sale_id: 5, product_id: 1, quantity: 2 },
        { sale_detail_id: 36, sale_id: 6, product_id: 4, quantity: 4 },
        { sale_detail_id: 37, sale_id: 7, product_id: 3, quantity: 3 },
        { sale_detail_id: 38, sale_id: 8, product_id: 1, quantity: 1 },
        { sale_detail_id: 39, sale_id: 9, product_id: 2, quantity: 2 },
        { sale_detail_id: 40, sale_id: 10, product_id: 3, quantity: 3 },
        { sale_detail_id: 41, sale_id: 11, product_id: 1, quantity: 1 },
        { sale_detail_id: 42, sale_id: 12, product_id: 2, quantity: 2 },
        { sale_detail_id: 43, sale_id: 13, product_id: 2, quantity: 2 },
        { sale_detail_id: 44, sale_id: 14, product_id: 1, quantity: 1 },
        { sale_detail_id: 45, sale_id: 15, product_id: 3, quantity: 3 }
    ]);
    });
};
