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
              <Route path="/" element={<Board />} />
              <Route path="/stats" element={<Estadisticas />} />
              <Route path="/:sprintId" element={<SprintView />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
