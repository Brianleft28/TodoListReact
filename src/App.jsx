import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Estadisticas from './pages/estadisticas';
import Board from './components/Task/TaskBoard/TaskBoard';
import Header from './components/Header.jsx';
import React from 'react';

function App() {
  return (
    <>
      <Router>
        <div className="layout h-screen overflow-hidden">
          <Header />
          <div className="bg-gradient-to-bl from-base-300 via-base-200 to-base-100 min-h-screen overflow-hidden">
            <div className="content-container overflow-auto mt-5">
              <Routes>
                <Route path="/" element={<Board />} />
                <Route path="/stats" element={<Estadisticas />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
