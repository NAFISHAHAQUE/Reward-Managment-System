import React, { useState, useEffect } from 'react';

const Attendance: React.FC = () => {
  const [attendance, setAttendance] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('attendance');
    if (stored) {
      setAttendance(JSON.parse(stored));
    }
  }, []);

  const markAttendance = () => {
    const today = new Date().toDateString();
    if (!attendance.includes(today)) {
      const newAttendance = [...attendance, today];
      setAttendance(newAttendance);
      localStorage.setItem('attendance', JSON.stringify(newAttendance));
    }
  };

  const attendanceRate = Math.min(Math.round((attendance.length / 30) * 100), 100);
  const currentStreak = Math.floor(Math.random() * 20) + 5;
  const monthlyTarget = 22;

  const recommendations = [
    '✅ Excellent attendance rate! Maintain this consistency for bonus eligibility.',
    '📈 You\'re on track to exceed monthly targets.',
    '🎯 Perfect attendance leads to better performance reviews and advancement opportunities.',
  ];

  return (
    <div className="container">
      <div className="page-inner">
        <div className="hero-section">
          <div className="hero-content">
            <h2>Attendance Tracking 📅</h2>
            <p>Consistency is key to success. Track your attendance, maintain streaks, and stay accountable to your commitments.</p>
          </div>
          <div className="hero-image">📅</div>
        </div>
        
        <div className="card-grid">
          <div className="stat-card">
            <div className="stat-number">{attendance.length}</div>
            <div className="stat-label">Days Present</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{attendanceRate}%</div>
            <div className="stat-label">Attendance Rate</div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${attendanceRate}%` }}></div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{currentStreak}</div>
            <div className="stat-label">Current Streak 🔥</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{monthlyTarget}</div>
            <div className="stat-label">Monthly Target</div>
          </div>
        </div>

        <div className="card full-width-card">
          <h3><span className="card-icon">✅</span>Mark Today's Attendance</h3>
          <button className="primary-btn" onClick={markAttendance}>Mark Attendance</button>
        </div>

        <div className="card full-width-card">
          <h3><span className="card-icon">💡</span>Productivity Tips</h3>
          <ul>
            {recommendations.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>

        <div className="card full-width-card">
          <h3><span className="card-icon">📋</span>Your Attendance History</h3>
          <ul>
            {attendance.length === 0 ? (
              <li>No attendance marked yet. Start today!</li>
            ) : (
              attendance.slice(-10).reverse().map((date, index) => (
                <li key={index}>{date}</li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Attendance;