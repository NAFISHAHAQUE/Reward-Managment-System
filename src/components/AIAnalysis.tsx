import React from 'react';

const AIAnalysis: React.FC = () => {
  const aiInsights = [
    {
      icon: '📊',
      title: 'Performance Analysis',
      content: 'Your overall performance has improved by 15% this quarter. You\'re showing strong consistency in task completion and quality metrics.'
    },
    {
      icon: '💰',
      title: 'Bonus Eligibility',
      content: 'Based on your attendance (95%) and performance score (85%), you are eligible for a performance bonus of $500.'
    },
    {
      icon: '🚀',
      title: 'Growth Opportunity',
      content: 'You\'re in the top 10% of performers. Consider taking on leadership roles to accelerate career growth.'
    },
  ];

  const recommendations = [
    { priority: 'High', action: 'Maintain current attendance streak to secure quarterly bonus', impact: '+$250' },
    { priority: 'High', action: 'Focus on quality over quantity - improve average rating from 4.2 to 4.5', impact: '+50 pts' },
    { priority: 'Medium', action: 'Complete remaining 30 tasks to hit monthly target', impact: '+100 pts' },
    { priority: 'Medium', action: 'Participate in team feedback sessions for skill development', impact: '+25 pts' },
  ];

  const trendData = [
    { month: 'Jan', performance: 72, attendance: 90 },
    { month: 'Feb', performance: 76, attendance: 92 },
    { month: 'Mar', performance: 81, attendance: 94 },
    { month: 'Apr', performance: 85, attendance: 95 },
  ];

  const aiTools = [
    {
      name: 'Microsoft Copilot',
      description: 'Advanced performance analysis & predictive modeling using AI-powered insights',
      features: ['Real-time performance tracking', 'Predictive analytics', 'Automated recommendations']
    },
    {
      name: 'Power BI',
      description: 'Real-time data visualization & business intelligence for transparent reporting',
      features: ['Interactive dashboards', 'Data-driven decisions', 'Performance metrics visualization']
    },
    {
      name: 'Canva AI',
      description: 'Design insights & optimization for professional presentation materials',
      features: ['Automated design suggestions', 'Brand consistency', 'Visual analytics']
    },
    {
      name: 'Python/ML Models',
      description: 'Machine learning algorithms for fair and efficient reward decisions',
      features: ['Bias-free evaluation', 'Predictive modeling', 'Automated scoring systems']
    }
  ];

  const innovationFeatures = [
    {
      icon: '🔍',
      title: 'Transparent Decision Making',
      description: 'All reward decisions are based on clear, data-driven criteria visible to all employees.'
    },
    {
      icon: '⚖️',
      title: 'Fair & Efficient Rewards',
      description: 'AI algorithms ensure equitable distribution based on objective performance metrics.'
    },
    {
      icon: '📈',
      title: 'Real-time Analytics',
      description: 'Continuous monitoring and instant feedback for immediate performance improvement.'
    },
    {
      icon: '🎯',
      title: 'Personalized Growth Paths',
      description: 'Tailored recommendations based on individual strengths and areas for development.'
    }
  ];

  return (
    <div className="container">
      <div className="page-inner">
        <div className="hero-section">
          <div className="hero-content">
            <h2>🤖 AI-Powered Insights & Innovation</h2>
            <p>Experience cutting-edge AI integration with Microsoft Copilot, Power BI, Canva AI, and Python/ML models. Our transparent, data-driven approach ensures fair and efficient reward decisions that drive employee motivation and productivity.</p>
          </div>
          <div className="hero-image">🚀</div>
        </div>

        <div className="card-grid">
          {aiInsights.map((insight, idx) => (
            <div key={idx} className="card" style={{ animation: `slideInLeft 0.6s ease-out ${idx * 0.2}s both` }}>
              <h3><span className="card-icon">{insight.icon}</span>{insight.title}</h3>
              <p>{insight.content}</p>
            </div>
          ))}
        </div>

        <div className="card full-width-card" style={{ animation: 'slideInRight 0.8s ease-out 0.4s both' }}>
          <h3><span className="card-icon">🎯</span>Actionable Recommendations</h3>
          <div className="recommendations-container">
            {recommendations.map((rec, idx) => (
              <div key={idx} className={`recommendation-item priority-${rec.priority.toLowerCase()}`} style={{ animation: `bounce 0.6s ease-out ${0.6 + idx * 0.1}s both` }}>
                <div className="recommendation-header">
                  <span className="priority-badge">{rec.priority}</span>
                  <span className="impact-badge">{rec.impact}</span>
                </div>
                <p className="recommendation-action">{rec.action}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card full-width-card" style={{ animation: 'slideInLeft 0.8s ease-out 0.8s both' }}>
          <h3><span className="card-icon">📈</span>Trending Analysis</h3>
          <div className="trend-data-container">
            {trendData.map((item, idx) => (
              <div key={idx} className="trend-data-item" style={{ animation: `fadeIn 0.6s ease-out ${1 + idx * 0.1}s both` }}>
                <h4>{item.month}</h4>
                <div className="metric">
                  <span>Performance: {item.performance}%</span>
                  <div className="mini-bar" style={{ width: `${item.performance}%` }}></div>
                </div>
                <div className="metric">
                  <span>Attendance: {item.attendance}%</span>
                  <div className="mini-bar" style={{ width: `${item.attendance}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card full-width-card" style={{ animation: 'slideInRight 0.8s ease-out 1.2s both' }}>
          <h3><span className="card-icon">🔧</span>AI Tools Integration</h3>
          <div className="ai-tools-grid">
            {aiTools.map((tool, idx) => (
              <div key={idx} className="ai-tool-card" style={{ animation: `pulse 2s ease-in-out infinite ${1.4 + idx * 0.2}s both` }}>
                <h4>{tool.name}</h4>
                <p>{tool.description}</p>
                <ul>
                  {tool.features.map((feature, fidx) => (
                    <li key={fidx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="card-grid">
          {innovationFeatures.map((feature, idx) => (
            <div key={idx} className="card" style={{ animation: `slideInLeft 0.6s ease-out ${1.6 + idx * 0.2}s both` }}>
              <h3><span className="card-icon">{feature.icon}</span>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="card full-width-card" style={{ animation: 'glow 3s ease-in-out infinite 2s both' }}>
          <h3><span className="card-icon">✨</span>Innovation & Transparency Commitment</h3>
          <div className="commitment-grid">
            <div className="commitment-item">
              <h4>Data-Driven Decisions</h4>
              <p>All rewards and performance evaluations are based on objective, measurable data points, ensuring fairness and eliminating bias.</p>
            </div>
            <div className="commitment-item">
              <h4>Real-Time Transparency</h4>
              <p>Employees have full visibility into how their performance metrics translate to rewards and recognition opportunities.</p>
            </div>
            <div className="commitment-item">
              <h4>Continuous Innovation</h4>
              <p>Regular updates with cutting-edge AI technologies to provide the most accurate and helpful insights for employee development.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAnalysis;