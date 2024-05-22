import Board from './components/TaskBoard/TaskBoard.jsx';
import Header from './components/Header.jsx';
import { TaskProvider } from './context/TaskContext.jsx';

function App() {
  return (
    <>
      <div className="layout bg-gradient-to-br from-base-100 via-base-200 to-base-300">
        <Header />
        <div
          className=" content-container min-h-full"
          style={{ height: 'calc(100vh - 120px)' }}
        >
          <TaskProvider>
            <Board />
          </TaskProvider>
        </div>
      </div>
    </>
  );
}

export default App;
