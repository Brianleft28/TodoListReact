import Board from './components/TaskBoard/TaskBoard.jsx';
import Header from './components/Header.jsx';
import { TaskProvider } from './context/TaskContext.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Estadisticas from './pages/estadisticas.jsx';

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
            <TaskProvider>
              <Routes>
                <Route path="/" element={<Board />} />
                <Route path="/stats" element={<Estadisticas />} />
              </Routes>
            </TaskProvider>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
