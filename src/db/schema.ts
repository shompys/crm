export const typeDefs = `
    type Query {
        getCourse: String
    }
    type Client {
        id: ID
        firstname: String
        lastname: String
        email: String
        createAt: String
    }
    type Token {
        token: String
    }
    input ClientInput {
        firstname: String!
        lastname: String!
        email: String!
        password: String!
    }

    input AuthenticateClientInput {
        email: String!
        password: String!
    }

    type Mutation {
        createClient(input: ClientInput!) : Client
        authenticateClient(input: AuthenticateClientInput!): Token
    }
`
