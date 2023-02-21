const typeDefs = `

type CustomerInput {
  name:String!
  guide:String!
  price:String!
  tripName:String!
}
type Mutation {
    generateInvoice(inpute:CustomerInput!):String!
}
  type Query {
    hello: String
  }
`;

export { typeDefs };
