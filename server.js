const express = require('express')
const expressGraphQL = require('express-graphql')
const schema = require('./schema.js')

const app = express();

app.use('/graphiql', expressGraphQL({
schema: schema,
graphiql: true
})) 

app.listen(4000, () => {
console.log('running on http://localhost:4000/graphiql')
})


