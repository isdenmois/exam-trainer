require('dotenv').config()
const { ApolloServer } = require('apollo-server')
const { importSchema } = require('graphql-import')
const typeDefs = importSchema('./schema.graphql')
const { db } = require('./db')

const resolvers = {
  Query: require('./query'),
  Mutation: require('./mutation'),
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { db },
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
