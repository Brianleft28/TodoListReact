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
          <div
            className="bg-base-200 overflow-x-hidden overflow-y-auto"
            style={{ height: 'calc(100vh - 68px)' }}
          >
            <div
              className="content-container bg-base-200 min-h-full"
              style={{
                height: '100%',
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
        </div>
      </Router>
    </>
  );
}

export default App;
