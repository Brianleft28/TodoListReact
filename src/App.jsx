import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Estadisticas from './pages/estadisticas';
import Board from './components/Task/TaskBoard/TaskBoard';
import Header from './components/Header.jsx';
import React from 'react';

function App() {
  return (
    <>
      <div className="layout bg-gradient-to-br from-base-100 via-base-200 to-base-300">
        <Router>
          <Header />
          <div
            className=" content-container min-h-full"
            style={{ height: 'calc(100vh - 120px)' }}
          >
            <Routes>
              <Route path="/" element={<Board />} />
              <Route path="/stats" element={<Estadisticas />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
