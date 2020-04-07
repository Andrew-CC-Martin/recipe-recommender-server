const app = require('express')()
const { ApolloServer } = require('apollo-server');

const typeDefs = require('./src/schema')

// const server = new ApolloServer({ typeDefs });

app.set('port', process.env.PORT || 4000)

app.get('/', (_request, response) => {
  response.send('Home page');
});

app.get('/about', (_request, response) => {
  response.send('About page');
});

app.use((_request, response) => {
  response.type('text/plain');
  response.status(505);
  response.send('Error page');
});

//Binding to a port
const port = process.env.PORT || 4000
app.listen(port, ()=>{
 console.log(`Express server started at port ${port}`);
});

//   const server = http.createServer(serverDefinition)
// server.listen(3000, () => {
//   console.log("Node server created at port 3000")
// })
