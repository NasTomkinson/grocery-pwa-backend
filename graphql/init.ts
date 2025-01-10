import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

import typeDefs from "./typedefs.ts"
import resolvers from './resolvers.ts'

async function startServer (_CONNECTION: any) {

    const apollo = new ApolloServer({
        typeDefs,
        resolvers
    })

    const { url } = await startStandaloneServer(apollo, {
        listen: { 
            port: 4000, 
            host: "localhost" 
        },
        context: async({req, res}) => ({
            db: _CONNECTION
        })
    })

    console.log(`GQL server ready at ${url}`)
}

export { startServer }
