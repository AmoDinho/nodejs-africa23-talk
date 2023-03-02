import App from '../components/App';
import TripList from '../components/TripList';
import listings from '../payloads/listings.json';
const IndexPage = () => (
  <App>
    <div className="text-4xl text-black"> Generate Your Trip Invoices</div>
    <TripList tripPayload={props.listings} />
  </App>
);

export async function getStaticProps() {
  return {
    props: {
      listings: listings,
    },
  };
  // const apolloClient = initializeApollo()
  // await apolloClient.query({
  //   query: ALL_POSTS_QUERY,
  //   variables: allPostsQueryVars,
  // })
  // return addApolloState(apolloClient, {
  //   props: {},
  //   revalidate: 1,
  // })
}

export default IndexPage;
