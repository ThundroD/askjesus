import React, { useEffect, useState } from 'react';
import './WWJDPage.css';
import { Helmet } from 'react-helmet';

const WWJDPage = () => {
    const [conversations, setConversations] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchConversations = async () => {
            setIsLoading(true);
            setError(null);
            try {
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

    const renderConversations = () => {
        const elements = [];
        const placeholderStart = 104;
        const placeholderEnd = 114;
        const placeholderRange = placeholderEnd - placeholderStart + 1;

        conversations.forEach((conv, index) => {
            elements.push(
                <div key={index} className="conversation-card">
                    <p className="question"><strong>Question:</strong> {conv.question}</p>
                    <p className="answer"><strong>Answer:</strong> {conv.answer}</p>
                </div>
            );

            if ((index + 1) % 3 === 0) {
                const placeholderIndex = (Math.floor(index / 3) % placeholderRange) + placeholderStart;
                elements.push(
                    <div key={`ad-${placeholderIndex}`} id={`ezoic-pub-ad-placeholder-${placeholderIndex}`}></div>
                );
            }
        });

        return elements;
    };

    return (
        <div className="container wwjd-container">
            <Helmet>
                {/* ... Helmet content ... */}
            </Helmet>
            <h1 className="text-center">What Would Jesus Do - Conversation History</h1>
            {isLoading && <p className="loading-text">Loading...</p>}
            {error && <p className="text-danger error-text">{error}</p>}
            <div>
                {renderConversations()}
            </div>
        </div>
    );
};

export default WWJDPage;



