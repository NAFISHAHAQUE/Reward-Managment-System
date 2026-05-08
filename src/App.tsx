import { BrowserRouter as Router, Routes, Route, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Attendance from './components/Attendance';
import Performance from './components/Performance';
import Rewards from './components/Rewards';
import Feedback from './components/Feedback';
import AIAnalysis from './components/AIAnalysis';
import './App.css';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = localStorage.getItem('user');

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  if (location.pathname === '/') {
    return null;
  }

  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="logo">🏆 Reward System</div>
        <ul className="navbar-links">
          <li>
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/attendance" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Attendance</NavLink>
          </li>
          <li>
            <NavLink to="/performance" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Performance</NavLink>
          </li>
          <li>
            <NavLink to="/rewards" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Rewards</NavLink>
          </li>
          <li>
            <NavLink to="/feedback" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Feedback</NavLink>
          </li>
          <li>
            <NavLink to="/ai-analysis" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>AI Insights</NavLink>
          </li>
          {user && (
            <>
              <li><span className="user-welcome">Welcome, {user}</span></li>
              <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="wave-bg">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <div className="floating-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/ai-analysis" element={<AIAnalysis />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
