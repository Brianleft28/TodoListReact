import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Estadisticas from './pages/estadisticas';
import Board from './components/Task/TaskBoard/TaskBoard';
import Header from './components/Header.jsx';
import React from 'react';
import SprintView from './pages/SprintView/SprintView.jsx';

function App() {
  return (
    <>
      <Router>
        <div className="layout h-screen overflow-hidden">
          <Header />
          <div className="bg-base-100 min-h-screen overflow-hidden">
            <div className="content-container overflow-auto mt-5 bg-base-100  min-h-screen">
              <Routes>
                <Route path="/" element={<Board />} />
                <Route path="/stats" element={<Estadisticas />} />
                <Route path="/:sprintId" element={<SprintView />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
