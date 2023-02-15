import { ApolloServer } from 'apollo-server-lambda';

const resolvers = {
  Query: {
    hello: () => 'Hello, New World!',
  },
};

const server = ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

export const handler = server.createHandler();
