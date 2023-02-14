import { GraphQLHandler } from '@serverless-stack/node/graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';

const typeDefs = `
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello, New World!',
  },
};

const server = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export const handler = GraphQLHandler({
  schema: server,
});
