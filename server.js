import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    greeting: String
}`;

const resolver = {
    Query: {
        greeting: () => 'Hello World'
    },
};

const server = new ApolloServer({ typeDefs, resolver });
server.listen({ port: 9000 })