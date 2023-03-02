'use client';
import App from '../components/App';
import InfoBox from '../components/InfoBox';
import Header from '../components/Header';
import Submit from '../components/Submit';
import PostList, {
  ALL_POSTS_QUERY,
  allPostsQueryVars,
} from '../components/PostList';
import { initializeApollo, addApolloState } from '../lib/apolloClient';

const SSRPage = () => (
  <App>
    <Header />
    <InfoBox>ℹ️ This page shows how to use SSR with Apollo.</InfoBox>

    {/* <Submit />
    <PostList /> */}
  </App>
);

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default SSRPage;
