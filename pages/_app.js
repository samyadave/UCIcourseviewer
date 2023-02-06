import '../styles/globals.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../globals.js'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://api.peterportal.org/graphql/',
  cache: new InMemoryCache(),
})

const MyApp = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
