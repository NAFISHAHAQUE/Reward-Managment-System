import React, { useState } from 'react';

const Feedback: React.FC = () => {
  const [feedback, setFeedback] = useState('');

  const submitFeedback = () => {
    if (feedback.trim()) {
      alert('Thank you! Your feedback has been submitted successfully.');
      setFeedback('');
    }
  };

  return (
    <div className="container">
      <div className="page-inner">
        <div className="hero-section">
          <div className="hero-content">
            <h2>Share Your Feedback</h2>
            <p>We value your perspective! Your feedback helps us continuously improve the reward system and better support your success.</p>
          </div>
          <div className="hero-image">💬</div>
        </div>
        <div className="feedback-panel">
          <div className="card">
            <h3><span className="card-icon">📝</span>We'd Love to Hear From You</h3>
            <div className="form-group">
              <label htmlFor="feedback">Your Feedback</label>
              <textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Share your thoughts, suggestions, and ideas..."
                rows={6}
              />
            </div>
            <button className="primary-btn" onClick={submitFeedback}>Submit Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;