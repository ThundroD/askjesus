import contentfulClient from './ContentfulClient';

export const fetchPageLandingContent = async () => {
  console.log("Fetching content from Contentful");
  console.log("Space ID:", process.env.REACT_APP_CONTENTFUL_SPACE_ID);
  console.log("Access Token:", process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN);

  try {
    const response = await contentfulClient.getEntries({
      content_type: 'pageLanding' // Replace with your Content Model ID
    });
    console.log("Contentful response:", response.items);
    return response.items; // Returns an array of entries for pageLanding
  } catch (error) {
    console.error("Error fetching Contentful data:", error);
    return [];
  }
};

export const fetchSpecificEntry = async (entryId) => {
  try {
    const response = await contentfulClient.getEntry(entryId);
    return response; // Returns the specific entry
  } catch (error) {
    console.error("Error fetching specific entry from Contentful:", error);
    return null;
  }
};

export const fetchEntriesByContentType = async (contentType) => {
    try {
      const response = await contentfulClient.getEntries({
        content_type: contentType, // Filters entries by content type
        include: 3, // Includes linked entries and assets up to 2 levels deep
      });
      return response.items; // Returns an array of entries
    } catch (error) {
      console.error("Error fetching entries by content type from Contentful:", error);
      return null;
    }
  };
  
  

