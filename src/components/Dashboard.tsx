import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const user = localStorage.getItem('user') || 'Employee';
  const accountData = JSON.parse(localStorage.getItem('accounts') || '[]');
  const userData = accountData.find((acc: any) => acc.username === user);

  const stats = {
    attendance: 95,
    performance: 85,
    rewards: 150,
    tasksCompleted: 120,
    monthlyProgress: 78,
  };

  const recentAchievements = [
    { icon: '🌟', title: 'Streak Maintained', desc: 'Perfect attendance for 10 days' },
    { icon: '🚀', title: 'Performance Peak', desc: 'Reached 85% performance score' },
    { icon: '🎯', title: 'Task Master', desc: 'Completed 120 tasks this month' },
  ];

  return (
    <div className="container">
      <div className="page-inner">
        <div className="hero-section">
          <div className="hero-content">
            <h2>Welcome back, {userData?.name || user}! 👋</h2>
            <p>Your comprehensive performance dashboard. Track your progress, celebrate achievements, and unlock new rewards.</p>
          </div>
          <div className="hero-image">📊</div>
        </div>
        <nav className="page-nav">
          <Link className="nav-link" to="/attendance">📅 Attendance</Link>
          <Link className="nav-link" to="/performance">📈 Performance</Link>
          <Link className="nav-link" to="/rewards">🏆 Rewards</Link>
          <Link className="nav-link" to="/feedback">💬 Feedback</Link>
          <Link className="nav-link" to="/ai-analysis">🤖 AI Insights</Link>
        </nav>
        
        <div className="card-grid">
          <div className="stat-card" style={{ animation: 'slideInLeft 0.6s ease-out 0.2s both' }}>
            <div className="stat-number">{stats.attendance}%</div>
            <div className="stat-label">Attendance Rate</div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${stats.attendance}%` }}></div>
            </div>
          </div>
          <div className="stat-card" style={{ animation: 'slideInLeft 0.6s ease-out 0.4s both' }}>
            <div className="stat-number">{stats.performance}</div>
            <div className="stat-label">Performance Score</div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${stats.performance}%` }}></div>
            </div>
          </div>
          <div className="stat-card" style={{ animation: 'slideInRight 0.6s ease-out 0.6s both' }}>
            <div className="stat-number">{stats.rewards}</div>
            <div className="stat-label">Total Reward Points</div>
          </div>
          <div className="stat-card" style={{ animation: 'slideInRight 0.6s ease-out 0.8s both' }}>
            <div className="stat-number">{stats.tasksCompleted}</div>
            <div className="stat-label">Tasks Completed</div>
          </div>
        </div>

        <div className="card full-width-card" style={{ animation: 'slideInLeft 0.8s ease-out 1s both' }}>
          <h3><span className="card-icon">⭐</span>Recent Achievements</h3>
          <div className="achievements-grid">
            {recentAchievements.map((achievement, idx) => (
              <div key={idx} className="achievement-item" style={{ animation: `bounce 0.6s ease-out ${1.2 + idx * 0.2}s both` }}>
                <div className="achievement-icon">{achievement.icon}</div>
                <div className="achievement-content">
                  <h4>{achievement.title}</h4>
                  <p>{achievement.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card full-width-card" style={{ animation: 'glow 3s ease-in-out infinite 1.4s both' }}>
          <h3><span className="card-icon">🎯</span>Monthly Progress</h3>
          <div className="progress-card-large">
            <div className="progress-container">
              <div className="progress-bar-large">
                <div className="progress-fill-large" style={{ width: `${stats.monthlyProgress}%` }}></div>
              </div>
              <div className="progress-text">
                <span className="progress-percentage">{stats.monthlyProgress}%</span>
                <span className="progress-description">Keep up the momentum! 22% to excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;