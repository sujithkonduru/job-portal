import React, { createContext, useState, useContext, useEffect } from 'react';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          const user = {
            id: 1,
            email,
            name: email.split('@')[0],
            role: 'candidate',
            avatar: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=2563eb&color=fff`
          };
          setUser(user);
          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('token', 'mock-token-123');
          toast.success('Login successful!');
          resolve(user);
        } else {
          toast.error('Invalid credentials');
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  };

  const register = async (userData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userData.email && userData.password) {
          const user = {
            id: Date.now(),
            ...userData,
            role: 'candidate',
            avatar: `https://ui-avatars.com/api/?name=${userData.name}&background=2563eb&color=fff`
          };
          setUser(user);
          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('token', 'mock-token-123');
          toast.success('Registration successful!');
          resolve(user);
        } else {
          toast.error('Registration failed');
          reject(new Error('Registration failed'));
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    toast.success('Logged out successfully');
  };

  const updateUser = (updates) => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};