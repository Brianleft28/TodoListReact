import './App.css'
import Board from './components/TaskBoard/TaskBoard.jsx'
import Header from './components/Header.jsx'

function App() {

  return (
    <>
        <div className='layout bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950'>
        <Header/>
        <div className=" content-container min-h-full"  style={{ height: 'calc(100vh - 120px)' }}>
        <Board/>
        </div>
    </div>  
    </>
  )
}

export default App
