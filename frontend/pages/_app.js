import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';
import { ChakraProvider } from '@chakra-ui/react';
export default function App({ Component, pageProps }) {
  // const apolloClient = useApollo(pageProps);

  return;
  <ChakraProvider>
    <Component {...pageProps} />;
  </ChakraProvider>;
}
// <ApolloProvider client={apolloClient}>

// </ApolloProvider>
