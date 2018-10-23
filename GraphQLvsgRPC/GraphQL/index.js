const { ApolloServer, gql } = require('apollo-server');

const data = [
    {
    testint: 1234,
    teststring: "helloworldstring",
    testdate: Date(),
    teststring2: "1234567890",
    testbool: true
    }
];

const typeDefs = gql`
  type Data {
    testint: Int
    teststring: String
    testdate: String
    teststring2: String
    testbool: Boolean
  }

  type Query {
    data: [Data]
  }
`;

const resolvers = {
  Query: {
    data: () => data,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server running at ${url}`);
});
