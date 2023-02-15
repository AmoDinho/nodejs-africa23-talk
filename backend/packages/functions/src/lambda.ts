import { ApolloServer } from 'apollo-server-lambda';
import { typeDefs } from './schema';
const resolvers = {
  Query: {
    hello: () => 'Hello, New World!',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

export const handler = server.createHandler();
