import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
    type schema {
        query: Query
    }
    type Query {
        greeting: String
    }
`;

const resolver = {
  Query: {
    greeting() {
        return "Hello World"
        },
  },
};

const server = new ApolloServer({ typeDefs, resolver });
const serverInfo = await server.listen({ port: 9000 })
console.log(`Server running at ${serverInfo.url}`);