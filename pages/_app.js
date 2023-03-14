import '../styles/globals.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'
import { ApolloLink } from 'apollo-link'

const myLink = new HttpLink({
  uri: 'http://localhost:8080/v1/graphql',
  // other link options...
})

const peterportalAPI = new HttpLink({
  uri: 'https://api.peterportal.org/graphql/',
})

const client = new ApolloClient({
  link: ApolloLink.split(
    (operation) => operation.getContext().clientName === 'peterportalAPI',
    // the string "third-party" can be anything you want,
    // we will use it in a bit
    peterportalAPI, // <= apollo will send to this if clientName is "third-party"
    myLink // <= otherwise will send to this
  ),
  cache: new InMemoryCache(),
})

// const client = new ApolloClient({
//   uri: 'https://api.peterportal.org/graphql/',
// })

const MyApp = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
