import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('Your answer will appear here...');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setError(null);
  };

  const validateInput = () => {
    if (inputValue.trim() === '') {
      setError('Please enter a question.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateInput()) {
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      // Use the environment variable REACT_APP_API_URL
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5001';
      const response = await fetch(`${apiUrl}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: inputValue })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setOutputValue(data.message);
      setInputValue('');
    } catch (error) {
      console.error('Error during API request:', error);
      setOutputValue('Sorry, there was an error processing your request.');
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="home-page">
      <h1 className="heading">What would Jesus Do?</h1>
      <div className="content">
        <div className="jesus-image">
          <img src="./pics/jesushome.png" alt="Cartoon Jesus" />
        </div>
        <div className={`speech-bubble ${outputValue !== 'Your answer will appear here...' ? 'no-tail' : ''}`}>
          <p>{outputValue}</p>
        </div>
      </div>
      <div className="input-section">
        <h1 className="input-prompt">Ask Jesus Anything</h1>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={inputValue} 
            onChange={handleInputChange} 
            maxLength="250" 
            placeholder="Enter your question..."
            className="input-field"
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="btn btn-primary btn-lg" disabled={isSubmitting}>
            {isSubmitting ? 'Thinking...' : 'Ask'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;




