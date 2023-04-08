import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
    type schema {
        query: Query
    }
    type Query {
        greeting: String
    }
`;

const resolvers = {
  Query: {
    greeting() {
        return "Hello World"
        },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
const serverInfo = await server.listen({ port: 3001 })
console.log(`Server running at ${serverInfo.url}`);