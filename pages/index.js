import BaseLayout from '../layouts/baseLayout';
import getHomepageData from '../queries/getHomepageData';
import client from '../pages/api/apolloClient';

export default function Home(props) {
  return (BaseLayout(props));
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