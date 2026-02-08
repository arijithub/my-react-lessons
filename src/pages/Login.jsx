import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { login, getUsers } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const demoUsers = getUsers();


  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const u = login(email, password);
        setEmail(u.email);
        setPassword(u.password);
        
        setMessage('Success! Redirecting...');
      setTimeout(() => navigate('/'), 400);
    } catch (err) {
      setMessage('Invalid email or password. Try one of the demo users below.');
    }
  }

  return (
    <div style={{ maxWidth: 520, margin: '40px auto', padding: 20, border: '1px solid #ddd', borderRadius: 8 }}>
      <h2 style={{ marginTop: 0 }}>Login (Demo)</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 10 }}>
          <label style={{ display: 'block', marginBottom: 6 }}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="demo@example.com"
            style={{ width: '100%', padding: 8, boxSizing: 'border-box' }}
            required
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <label style={{ display: 'block', marginBottom: 6 }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            style={{ width: '100%', padding: 8, boxSizing: 'border-box' }}
            required
          />
        </div>

        <button type="submit" style={{ padding: '8px 16px' }}>Login</button>
      </form>



      {message && (
        <div style={{ marginTop: 12, color: message && message.startsWith('Success') ? 'green' : 'red' }}>{message}</div>
      )}

    </div>
  );
}
