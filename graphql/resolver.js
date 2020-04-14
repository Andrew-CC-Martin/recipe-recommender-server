const IngredientResolver = require('./resolvers/ingredient')

module.exports = {
  Query: {
    ingredients: async () => await IngredientResolver.getAll()
  }
}