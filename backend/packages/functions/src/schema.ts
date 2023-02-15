const typeDefs = `

type Mutation {
    generateInvoice(name:String!):String!
}
  type Query {
    hello: String
  }
`;

export { typeDefs };
