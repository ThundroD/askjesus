import React, { useEffect, useState } from 'react';
import './WWJDPage.css';
import { Helmet } from 'react-helmet'; // Import Helmet

const WWJDPage = () => {
    const [conversations, setConversations] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchConversations = async () => {
            setIsLoading(true);
            setError(null);
            try {
                // apiUrl will be your backend URL in production
                const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5001';
                const response = await fetch(`${apiUrl}/api/conversation`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setConversations(data);
            } catch (error) {
                console.error('Error fetching conversations:', error);
                setError('Failed to load conversation history');
            } finally {
                setIsLoading(false);
            }
        };

        fetchConversations();
    }, []);

    return (
        <div className="container wwjd-container">
            <Helmet>
                <title>Explore Past Wisdom - WWJD Conversations Archive</title>
                <meta name="description" content="Dive into a comprehensive archive of past Q&As where users sought guidance from Jesus. Discover the wisdom shared on a variety of topics, reflecting Christian teachings and biblical insights." />
                <meta name="keywords" content="Jesus, WWJD, Christianity, Bible, Faith, Archive, Spiritual guidance, Christian advice" />
                {/* Open Graph Tags */}
                <meta property="og:title" content="Explore Past Wisdom - WWJD Conversations Archive" />
                <meta property="og:description" content="Browse through an extensive collection of questions and answers reflecting the wisdom of Jesus. Engage with the community's spiritual inquiries and the guidance provided." />
                <meta property="og:image" content="https://lustrous-bunny-ec58cf.netlify.app/pics/jesushome.png" /> {/* Replace with the URL to an image representing your page */}
                <meta property="og:url" content="https://lustrous-bunny-ec58cf.netlify.app/wwjd" /> {/* Replace with your page's URL */}
                <meta property="og:type" content="website" />
                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Explore Past Wisdom - WWJD Conversations Archive" />
                <meta name="twitter:description" content="Join a journey of spiritual discovery through past conversations with Jesus. Find answers and insights from a Christian perspective." />
                <meta name="twitter:image" content="https://lustrous-bunny-ec58cf.netlify.app/pics/jesushome.png" /> {/* Replace with the URL to an image representing your page */}
            </Helmet>
            <h1 className="text-center">What Would Jesus Do - Conversation History</h1>
            {isLoading && <p className="loading-text">Loading...</p>}
            {error && <p className="text-danger error-text">{error}</p>}
            <div>
                {conversations.map((conv, index) => (
                    <div key={index} className="conversation-card">
                        <p className="question"><strong>Question:</strong> {conv.question}</p>
                        <p className="answer"><strong>Answer:</strong> {conv.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WWJDPage;


