import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    const accounts = JSON.parse(localStorage.getItem('accounts') || '[]');

    if (!username || !password) {
      alert('Please enter both username and password.');
      return;
    }

    if (accounts.length === 0) {
      localStorage.setItem('user', username);
      navigate('/dashboard');
      return;
    }

    const matchedAccount = accounts.find((account: any) => account.username === username && account.password === password);
    if (matchedAccount) {
      localStorage.setItem('user', username);
      navigate('/dashboard');
    } else {
      alert('Invalid username or password. Please try again or create an account.');
    }
  };

  const handleRegister = () => {
    const accounts = JSON.parse(localStorage.getItem('accounts') || '[]');

    if (!name || !email || !username || !password || !confirmPassword) {
      alert('Please complete all fields to create an account.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords must match.');
      return;
    }

    const accountExists = accounts.some((account: any) => account.username === username || account.email === email);
    if (accountExists) {
      alert('An account with this username or email already exists.');
      return;
    }

    accounts.push({ name, email, username, password });
    localStorage.setItem('accounts', JSON.stringify(accounts));
    localStorage.setItem('user', username);
    navigate('/dashboard');
  };

  return (
    <div className="auth-page">
      <div className="container">
        <div className="page-inner">
          <div className="hero-section">
            <div className="hero-content">
              <h2>{isRegistering ? 'Create your employee account' : 'Rewards System'}</h2>
              <p>{isRegistering ? 'Register now and start tracking your performance, attendance, and rewards with ease.' : 'Sign in to review your progress, claim rewards, and access personalized insights.'}</p>
            </div>
            <div className="hero-image">🚀</div>
          </div>
          <div className="login-card">
            <h2>{isRegistering ? 'Create Account' : 'Employee Login'}</h2>
            <p>{isRegistering ? 'Securely register your profile and join the rewards platform.' : 'Enter your credentials to continue.'}</p>
            {isRegistering && (
              <>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </>
            )}
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (isRegistering ? handleRegister() : handleLogin())}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (isRegistering ? handleRegister() : handleLogin())}
              />
            </div>
            {isRegistering && (
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Repeat your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleRegister()}
                />
              </div>
            )}
            <button className="primary-btn" onClick={isRegistering ? handleRegister : handleLogin}>
              {isRegistering ? 'Create Account' : 'Sign In'}
            </button>
            <div className="toggle-actions">
              <span>{isRegistering ? 'Already have an account?' : 'New here?'}</span>
              <button className="secondary-btn" onClick={() => setIsRegistering(!isRegistering)}>
                {isRegistering ? 'Sign In' : 'Create Account'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
