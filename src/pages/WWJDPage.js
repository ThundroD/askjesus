import React, { useEffect, useState } from 'react';
import './WWJDPage.css';

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

    return (
        <div className="container wwjd-container">
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

