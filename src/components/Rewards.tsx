import React from 'react';

const Rewards: React.FC = () => {
  const rewards = {
    points: 150,
    badges: ['🥇 Top Performer', '📅 Attendance Champion', '🚀 Rising Star', '🎯 Goal Achiever', '💡 Innovator'],
    bonuses: 500,
    totalValue: 2500,
  };

  const milestones = [
    { milestone: '50 Points', reward: 'Free Coffee', unlocked: true },
    { milestone: '100 Points', reward: 'Movie Voucher', unlocked: true },
    { milestone: '200 Points', reward: 'Premium Parking', unlocked: false },
    { milestone: '500 Points', reward: 'Weekend Off', unlocked: false },
  ];

  const recentRewards = [
    { date: '2024-05-07', type: 'Performance Bonus', points: 25 },
    { date: '2024-05-05', type: 'Attendance Streak', points: 15 },
    { date: '2024-05-03', type: 'Task Completion', points: 20 },
  ];

  return (
    <div className="container">
      <div className="page-inner">
        <div className="hero-section">
          <div className="hero-content">
            <h2>Rewards & Recognition 🎁</h2>
            <p>Your hard work deserves recognition! See your earned rewards, achievements, and unlock exclusive benefits.</p>
          </div>
          <div className="hero-image">🏆</div>
        </div>
        
        <div className="card-grid">
          <div className="stat-card">
            <div className="stat-number">{rewards.points}</div>
            <div className="stat-label">Reward Points</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">${rewards.bonuses}</div>
            <div className="stat-label">Earned Bonuses</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">5</div>
            <div className="stat-label">Badges Earned</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">${rewards.totalValue}</div>
            <div className="stat-label">Total Value</div>
          </div>
        </div>

        <div className="card full-width-card">
          <h3><span className="card-icon">🎖️</span>Earned Badges & Achievements</h3>
          <div className="badges-container">
            {rewards.badges.map((badge, index) => (
              <div key={index} className="badge-item">
                <div className="badge-icon">{badge.split(' ')[0]}</div>
                <div className="badge-text">{badge}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card full-width-card">
          <h3><span className="card-icon">🎯</span>Milestone Achievements</h3>
          <div className="milestones-container">
            {milestones.map((item, idx) => (
              <div key={idx} className={`milestone-item ${item.unlocked ? 'unlocked' : 'locked'}`}>
                <div className="milestone-status">{item.unlocked ? '✅' : '🔒'}</div>
                <div className="milestone-info">
                  <h4>{item.milestone}</h4>
                  <p className="milestone-reward">{item.reward}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card full-width-card">
          <h3><span className="card-icon">📅</span>Recent Rewards</h3>
          <ul>
            {recentRewards.map((reward, idx) => (
              <li key={idx}>
                <div className="reward-entry">
                  <div className="reward-info">
                    <strong>{reward.type}</strong>
                    <span className="reward-date">{reward.date}</span>
                  </div>
                  <div className="reward-points">+{reward.points} pts</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Rewards;