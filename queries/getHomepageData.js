import gql from 'graphql-tag';

const getHomepageData = gql`
query getHomepageData {
    entry(slug: "homepage") {
      ... on homepage_homepage_Entry {
        id
        headline
        businessesPriorities {
          ... on businessProbabilities_default_Entry {
            probability
            id
            title
          }
        }
      }
    }
  }
`;

export default getHomepageData;