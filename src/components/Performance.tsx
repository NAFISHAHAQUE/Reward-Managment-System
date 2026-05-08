import React from 'react';

const Performance: React.FC = () => {
  const performance = {
    score: 85,
    tasksCompleted: 120,
    averageRating: 4.2,
    monthlyGrowth: 12,
    qualityScore: 92,
    deadlinesMet: 98,
  };

  const monthlyBreakdown = [
    { month: 'Jan', score: 72 },
    { month: 'Feb', score: 76 },
    { month: 'Mar', score: 81 },
    { month: 'Apr', score: 85 },
  ];

  const goals = [
    { title: 'Reach 90% Performance', current: 85, target: 90, status: 'In Progress' },
    { title: 'Complete 150 Tasks', current: 120, target: 150, status: 'In Progress' },
    { title: 'Maintain 4.5+ Rating', current: 4.2, target: 4.5, status: 'In Progress' },
  ];

  return (
    <div className="container">
      <div className="page-inner">
        <div className="hero-section">
          <div className="hero-content">
            <h2>Performance Analytics</h2>
            <p>Track your productivity with comprehensive metrics. Monitor growth, set ambitious goals, and celebrate milestones.</p>
          </div>
          <div className="hero-image">📈</div>
        </div>
        
        <div className="card-grid">
          <div className="stat-card">
            <div className="stat-number">{performance.score}%</div>
            <div className="stat-label">Overall Score</div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${performance.score}%` }}></div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{performance.tasksCompleted}</div>
            <div className="stat-label">Tasks Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{performance.averageRating}⭐</div>
            <div className="stat-label">Average Rating</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">+{performance.monthlyGrowth}%</div>
            <div className="stat-label">Monthly Growth</div>
          </div>
        </div>

        <div className="card full-width-card">
          <h3><span className="card-icon">🎯</span>Performance Goals</h3>
          <div className="goals-container">
            {goals.map((goal, idx) => (
              <div key={idx} className="goal-item">
                <div className="goal-header">
                  <h4>{goal.title}</h4>
                  <span className="goal-status">{goal.status}</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${(goal.current / goal.target) * 100}%` }}></div>
                </div>
                <div className="goal-footer">
                  <span>{goal.current} / {goal.target}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card-grid">
          <div className="card full-width-card">
            <h3><span className="card-icon">📊</span>Monthly Trend</h3>
            <div className="trend-container">
              {monthlyBreakdown.map((item, idx) => (
                <div key={idx} className="trend-item">
                  <div className="trend-label">{item.month}</div>
                  <div className="trend-bar" style={{ height: `${item.score}%` }}>
                    <span className="trend-value">{item.score}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card-grid">
          <div className="stat-card">
            <div className="stat-number">{performance.qualityScore}%</div>
            <div className="stat-label">Quality Score</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{performance.deadlinesMet}%</div>
            <div className="stat-label">Deadlines Met</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;