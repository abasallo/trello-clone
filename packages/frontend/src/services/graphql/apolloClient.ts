import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import constants from '../../modules/constants'

export const apolloClient = new ApolloClient({
  link: createHttpLink({ uri: constants.GRAPHQL_BACKEND_URL }),
  cache: new InMemoryCache()
})
