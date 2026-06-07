import React from 'react';
import './index.css';

function App() {
  const handleExternalLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="landing">
      <div className="hero">
        <h1>Welcome to Pragmatic Casino!</h1>
        <p>No Limit Play!</p>
        <button 
          className="cta-button"
          onClick={() => handleExternalLink('https://example.com')}
        >
          Get Started
        </button>
      </div>

      <div className="features">
        <div className="feature-card">
          <h3>🚀 Fastest withdrawal</h3>
          <p>Many ways to withdraw your money</p>
          <button 
            className="external-link"
            onClick={() => handleExternalLink('https://example.com')}
          >
            Learn More →
          </button>
        </div>

        <div className="feature-card">
          <h3>💫 High win rate</h3>
          <p>The win rate is 99.1%, we win!</p>
          <button 
            className="external-link"
            onClick={() => handleExternalLink('https://example.com')}
          >
            Learn More →
          </button>
        </div>

        <div className="feature-card">
          <h3>⚒️ Support</h3>
          <p>Support is always with you 24/7</p>
          <button 
            className="external-link"
            onClick={() => handleExternalLink('https://example.com')}
          >
            Learn More →
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;