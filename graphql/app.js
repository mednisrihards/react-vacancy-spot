const Koa = require('koa')
const { ApolloServer } = require('apollo-server-koa')
const { makeExecutableSchema } = require('graphql-tools')
const { resolvers, typeDefs } = require('./schemas')
const server = new ApolloServer({
    schema: makeExecutableSchema({ typeDefs, resolvers})
})

const app = new Koa()
server.applyMiddleware({ app })

app.listen({ port: process.env.PORT || 4000 }, () => {
    console.log(`🚀 Server ready on http://localhost:${process.env.PORT || 4000 + server.graphqlPath}`)
})