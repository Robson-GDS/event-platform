import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ocz3yx1wwb01xxf9ss63i5/master',
  cache: new InMemoryCache()
})