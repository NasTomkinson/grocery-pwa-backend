const typeDefs = `
    type User {
        id: Int!
        username: String!
        email: String!
        password: String!
        firstName: String!
        lastName: String!
    }

    type UserDetails {
        firstName: String!
        lastName: String!
        username: String!
    }

    type Query {
        user(email: String!): User
        userDetails: UserDetails
    }
`

export default typeDefs