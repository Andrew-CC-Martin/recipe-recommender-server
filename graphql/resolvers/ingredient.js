const { Ingredient } = require('../../data/models')

module.exports = {
  getAll: () => Ingredient.findAll({
    attributes: ['id', 'name']
  })
}
