import React, { useEffect, useState } from 'react';
import { fetchEntriesByContentType } from '../components/contentfulService';

const BlogPage = () => {
    const [landingPage, setLandingPage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const entries = await fetchEntriesByContentType('pageLanding');
                if (entries.length > 0) {
                    setLandingPage(entries[0].fields); 
                } else {
                    setError('No landing page content found.');
                }
            } catch (err) {
                console.error('Error fetching content:', err);
                setError('Failed to load content.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!landingPage) return <div>No landing page content found.</div>;

    return (
        <div className="blog-container">
        <div className="blog-header">
          <h1 className="blog-title">{landingPage.internalName}</h1>
          {/* Add SEO Information and other header details */}
        </div>
    
        {/* Render Featured Blog Post with Image */}
        {landingPage.featuredBlogPost && (
          <div className="featured-blog-post">
            <img
              src={landingPage.featuredBlogPost.fields.featuredImage.fields.file.url}
              alt={landingPage.featuredBlogPost.fields.featuredImage.fields.title || 'Featured Blog Post'}
            />
            <h2>{landingPage.featuredBlogPost.fields.title}</h2>
            <p>{landingPage.featuredBlogPost.fields.description}</p>
            {/* Render other parts of the blog post as needed */}
          </div>
        )}
    
        {/* Render additional sections like "Latest articles" */}
      </div>
    
    );
};

export default BlogPage;








