
exports.seed = async function(knex) {

  const testData = [
    {VIN: 'MS74JFUTP2LASUR45', Make: 'Ford', Model: 'Silverado', Mileage: 20000, Transmission: 'Automatic',},
    {VIN: 'L2K4JFSUT783S0R43', Make: 'Dodge', Model: 'Durango', Mileage: 5000, Transmission: 'Automatic Manual'}
  ]
  await knex('cars').truncate()

  return knex('cars').insert(testData)
}