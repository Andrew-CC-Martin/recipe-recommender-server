// todo - figure out if I actually need express for anything
// const app = require('express')()
// const bodyParser = require('body-parser')
const { ApolloServer } = require('apollo-server');

// const { User, Ingredient } = require('./data/models')
// const { appConfig } = require('./constants')
const typeDefs = require('./graphql/schema')
const resolvers = require('./graphql/resolver')

// const port = process.env.PORT || appConfig.DEFAULT_PORT

const gqlServer = new ApolloServer({
  typeDefs,
  resolvers
  // dataSources
});

gqlServer.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

// //Binding express to a port
// app.listen(port, () => {
//   console.log(`Express server started at port ${port}`)
//  })

// app.use(bodyParser.json())
// app.use(
//   bodyParser.urlencoded({
//     extended: true
//   })
// )

// app.get('/', (_request, response) => {
//   response.json({ info: 'Node.js, Express, and Postgres API' })
// })

// app.get('/', (_request, response) => {
//   response.send('Home page');
// });

// app.get('/about', (_request, response) => {
//   response.send('About page');
// });

// app.get('/ingredients', async (_request, response) => {
//   const ingredients = await Ingredient.findAll({
//     attributes: ['id', 'name']
//   })
//   response.json(ingredients)
// });

//app.use((_request, response) => {
//   response.type('text/plain');
//   response.status(505);
//   response.send('Error page');
// });
