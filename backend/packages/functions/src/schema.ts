const typeDefs = `

input CustomerInput {
  name:String!
  guide:String!
  price:String!
  tripName:String!
}
type Mutation {
    generateInvoice(input:CustomerInput!):String!
}
  type Query {
    hello: String
  }
`;

export { typeDefs };
