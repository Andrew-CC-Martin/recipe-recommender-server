const express = require('express')()
const bodyParser = require('body-parser')
// const { ApolloServer } = require('apollo-server');

const { User, Ingredient } = require('./data/models')
const { appConfig } = require('./constants')
// const typeDefs = require('./src/schema')

const port = process.env.PORT || appConfig.DEFAULT_PORT

// const server = new ApolloServer({
//   typeDefs, // type definitions
//   // resolvers
//   // dataSources
// });

//Binding express to a port
express.listen(port, () => {
  console.log(`Express server started at port ${port}`)
 })

express.use(bodyParser.json())
express.use(
  bodyParser.urlencoded({
    extended: true
  })
)

express.get('/', (_request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

express.get('/', (_request, response) => {
  response.send('Home page');
});

express.get('/about', (_request, response) => {
  response.send('About page');
});

express.get('/ingredients', async (_request, response) => {
  const ingredients = await Ingredient.findAll({
    attributes: ['id', 'name']
  })
  response.json(ingredients)
});

//express.use((_request, response) => {
//   response.type('text/plain');
//   response.status(505);
//   response.send('Error page');
// });
