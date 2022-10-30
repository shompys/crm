import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { typeDefs } from './db/schema'
import { resolvers } from './db/resolvers'
import { connectDB } from './config/db'
import * as dotenv from 'dotenv'
dotenv.config()

void connectDB().then(() => {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  })
  void startStandaloneServer(server, { listen: { port: 4000 } })
    .then(({ url }) => console.log(`Server ready at: ${url}`))
})
