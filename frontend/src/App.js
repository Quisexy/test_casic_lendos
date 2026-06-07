import React, { useState } from 'react';
import axios from 'axios';
import './index.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    
    try {
      const response = await axios.post('/api/contact', formData);
      if (response.data.success) {
        setSuccess(response.data.message);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error:', error);
      setSuccess('Error sending message. Please try again.');
    } finally {
      setLoading(false);
      setTimeout(() => setSuccess(''), 3000);
    }
  };

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
