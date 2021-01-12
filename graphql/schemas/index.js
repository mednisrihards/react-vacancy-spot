const vacanciesSchema = require('./vacancies')

const resolvers = [
    vacanciesSchema.resolvers
]

const typeDefs = [
    vacanciesSchema.schema
]

module.exports = {
    resolvers,
    typeDefs
}