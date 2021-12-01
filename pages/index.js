import BuisinessPriorities from '../components/buisinessPriorities';
import getHomepageData from '../queries/getHomepageData';
import client from '../pages/api/apolloClient';

export default function Home(props) {
  return (BuisinessPriorities(props));
}

// pages/index.js
export async function getStaticProps() {

  const { data } = await client.query({
    query: getHomepageData
  });

  return {
    props: {
      page: data,
    },
  };
}