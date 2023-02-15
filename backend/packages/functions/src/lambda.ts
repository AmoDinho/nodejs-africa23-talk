import { ApolloServer } from 'apollo-server-lambda';
import { typeDefs } from './schema';
import { Query } from './resolvers/query';
import { Mutation } from './resolvers/mutation';
const resolvers = {
  Query,
  Mutation,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

export const handler = server.createHandler();
