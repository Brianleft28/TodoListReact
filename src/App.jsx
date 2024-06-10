import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Estadisticas from './pages/estadisticas';
import Header from './components/Header.jsx';
import React from 'react';
import SprintView from './pages/SprintView/SprintView.jsx';
import Settings from './pages/Settings.jsx';
import Login from './pages/auth/Login.jsx';
import Home from './pages/Home.jsx';

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
              <Route path="/stats" element={<Estadisticas />} />
              <Route path="/:sprintId" element={<SprintView />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/auth/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
