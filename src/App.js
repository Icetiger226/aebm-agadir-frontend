import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Layout
import MainLayout from './layouts/MainLayout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import News from './pages/News';
import Events from './pages/Events';
import Forum from './pages/Forum';
import Guide from './pages/Guide';
import Profile from './pages/Profile';
import Directory from './pages/Directory';
import Treasury from './pages/Treasury';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [, setUser] = useState(null);

  // Handle login
  const handleLogin = (loginData) => {
    setIsAuthenticated(true);
    setUser({
      firstName: 'Aminata',
      lastName: 'Ouedraogo',
      email: loginData.email,
      role: 'member' // or 'admin', 'treasurer', etc.
    });
  };

  // Handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  // Handle registration
  const handleRegister = (registerData) => {
    setIsAuthenticated(true);
    setUser({
      firstName: registerData.firstName,
      lastName: registerData.lastName,
      email: registerData.email,
      role: 'member'
    });
  };

  return (
    <Router>
      <MainLayout isAuthenticated={isAuthenticated} onLogout={handleLogout}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/events" element={<Events />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/guide" element={<Guide />} />
          
          {/* Auth Routes */}
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register onRegister={handleRegister} />} />
          
          {/* Protected Routes - Member */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/treasury" element={<Treasury />} />
          
          {/* Protected Routes - Admin */}
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
