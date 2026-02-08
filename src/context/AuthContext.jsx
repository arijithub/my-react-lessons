import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const demoUsersKey = 'demo_users_v1';
const authUserKey = 'auth_user_v1';

const initialDemoUsers = [
  { id: 1, name: 'Arijit', email: 'arijit@gmail.com', password: '1234' },
  { id: 2, name: 'Bappa', email: 'bappa@gmail.com', password: '1234' },
];





export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    try {
      const v = localStorage.getItem(authUserKey);
      return v ? JSON.parse(v) : null;
    } catch (e) { return null; }
  });

  useEffect(() => {
  // Overwrite demo users in localStorage with the canonical dev set (Arijit/Bappa)
  try {
    localStorage.setItem(demoUsersKey, JSON.stringify(initialDemoUsers));
  } catch (e) {}
}, []);

  useEffect(() => {
    // Ensure demo users exist in localStorage
    try {
      const raw = localStorage.getItem(demoUsersKey);
      if (!raw) localStorage.setItem(demoUsersKey, JSON.stringify(initialDemoUsers));
    } catch (e) {}
  }, []);

  useEffect(() => {
    if (user) localStorage.setItem(authUserKey, JSON.stringify(user));
    else localStorage.removeItem(authUserKey);
  }, [user]);

  function getUsers() {
    try {
      const raw = localStorage.getItem(demoUsersKey);
      return raw ? JSON.parse(raw) : [];
    } catch (e) { return [] }
  }

  function addUser({ name, email, password }) {
    const users = getUsers();
    if (users.find(u => u.email === email)) throw new Error('Email already registered');
    const newUser = { id: Date.now(), name, email, password };
    users.push(newUser);
    localStorage.setItem(demoUsersKey, JSON.stringify(users));
    setUser(newUser);
    return newUser;
  }

  function login(email, password) {
    const users = getUsers();
    const match = users.find(u => u.email === email && u.password === password);
    if (!match) throw new Error('Invalid credentials');
    setUser(match);
    return match;
  }

  function logout() {
    setUser(null);
    navigate('/');
  }

  return (
    <AuthContext.Provider value={{ user, getUsers, addUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
