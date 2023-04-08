# GraphQL Project
## Requirements
1. Node.js
2. Apollo-server
3. GraphQL
## Notes
1. Setup schemas in server.js
2. Setup resolvers in server.js - resolvers are functions that return data
3. Create ApolloServer instance in server.js. This is where you pass in the schema and resolvers as an object
4. Start the server by using the listen method on the ApolloServer instance. Listen takes in a port number as an argument. Also note that the listen method is asynchronous and returns a promise so you need to use await.