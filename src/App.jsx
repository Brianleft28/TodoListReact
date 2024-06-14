import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import React from 'react';
import Settings from './pages/Settings.jsx';
import Login from './pages/auth/Login.jsx';
import Home from './pages/Home.jsx';
import Register from './pages/auth/Register.jsx';

function App() {
  return (
    <>
      <Router>
        <div className="layout overflow-hidden">
          <Header />

          <div
            className="content-container "
            style={{
              overflowY: 'none',
              scrollbarWidth: 'none' /* For Firefox */,
              msOverflowStyle: 'none' /* For Internet Explorer and Edge */,
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/auth/login" element={<Login />} />
              <Route path="/auth/register" element={<Register />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
