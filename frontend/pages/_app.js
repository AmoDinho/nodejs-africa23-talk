import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';

export default function App({ Component, pageProps }) {
  // const apolloClient = useApollo(pageProps);

  return <Component {...pageProps} />;
}
// <ApolloProvider client={apolloClient}>

// </ApolloProvider>
