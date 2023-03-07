import App from '../components/App';
import TripList from '../components/TripList';
import listings from '../payloads/listings.json';
const IndexPage = (props) => {
  return (
    <App>
      <TripList tripPayload={props.listings} />
    </App>
  );
};

export async function getStaticProps() {
  return {
    props: {
      listings: listings,
    },
  };
}

export default IndexPage;
