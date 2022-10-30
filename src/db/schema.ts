export const typeDefs = `
    
    type Client {
        _id: ID
        firstname: String
        lastname: String
        email: String
        createAt: String
        updatedAt: String
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
    type Product {
        _id: ID
        name: String
        price: Int
        stock: Int
        createdAt: String
        updatedAt: String
    }
    input ProductInput {
        name: String!
        price: Float!
        stock: Int!
    }

    type Query {
        getClient(token: String!): Client
        getProducts: [Product]
    }
    type Mutation {
        # Client
        createClient(input: ClientInput!) : Client
        authenticateClient(input: AuthenticateClientInput!): Token
        # Product
        createProduct(input: ProductInput): Product
    }


`
