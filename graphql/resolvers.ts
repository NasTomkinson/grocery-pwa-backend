import { getUsers, getUser } from '../api/users/index.ts'

const resolvers = {
    Query: {
        user: (_:unknown, args: { email: string }, contextValue: any): Object => getUser(contextValue.db, args.email)
        // userDetails: (_:unknown, args: { username: string }): UserDetails => getUserDetails(username)
    }
}

export default resolvers