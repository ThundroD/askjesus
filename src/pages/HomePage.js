import React, { useEffect, useState } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const HomePage = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('Your answer will appear here...');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Script integration for ads
    window.ezstandalone = window.ezstandalone || {};
    window.ezstandalone.cmd = window.ezstandalone.cmd || [];
    window.ezstandalone.cmd.push(function() {
      window.ezstandalone.define(103);
      window.ezstandalone.enable();
      window.ezstandalone.display();
    });
  }, []);

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
      <Helmet>
        <title>What Would Jesus Do? - Biblical Guidance & Spiritual Wisdom</title>
        <meta name="description" content="Discover personalized, biblical wisdom with the 'What Would Jesus Do?' app. Ask any question and receive insights drawn directly from the teachings of Jesus and Christian principles. Begin your spiritual journey today and find guidance for life's challenges." />
        <meta name="keywords" content="Jesus, Christian advice, Spiritual guidance, Biblical wisdom, Faith questions, Christian living, Scripture insights, Ask Jesus, Christian faith, Religious guidance" />
        <meta property="og:title" content="What Would Jesus Do? - Biblical Guidance & Spiritual Wisdom" />
        <meta property="og:description" content="Seeking answers? Ask any question and receive guidance inspired by the teachings of Jesus. Explore biblical wisdom and strengthen your faith journey." />
        <meta property="og:image" content="https://lustrous-bunny-ec58cf.netlify.app/pics/jesushome.png" />
        <meta property="og:url" content="https://lustrous-bunny-ec58cf.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="What Would Jesus Do? - Biblical Guidance & Spiritual Wisdom" />
        <meta name="twitter:description" content="Dive into the teachings of Jesus and find answers and guidance for your life's questions. Explore now." />
        <meta name="twitter:image" content="https://lustrous-bunny-ec58cf.netlify.app/pics/jesushome.png" />
        <script async src="//www.ezojs.com/ezoic/sa.min.js"></script>
      </Helmet>
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
      <div id="ezoic-pub-ad-placeholder-103"> </div>
      <div id="humix-vid-nZuOoBtIWJf" style="width:560px;height:315px;" props="autoplay=1&s=p" float><script async="" src="https://www.humix.com/video.js"></script></div>
      <div className="footer-links" style={{ marginTop: '100px' }}>
        <Link to="/terms-and-conditions">Terms & Conditions</Link> |{' '}
        <Link to="/privacy-policy">Privacy Policy</Link>
      </div>
    </div>
  );
};

export default HomePage;







