import { createClient } from 'contentful';

const contentfulClient = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID, // Your Space ID
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN // Your Access Token
});

export default contentfulClient;