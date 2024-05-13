import './App.css'
import Board from './components/TaskBoard/TaskBoard.jsx'
import Header from './components/Header.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio.jsx'
import Pendientes from './pages/Pendientes.jsx'
import Completadas from './pages/Completadas.jsx'
import TaskAside from './components/TaskAside/TaskAside.jsx'

function App() {


  return (
    <>
    <BrowserRouter >
        <div className='layout'>
        <Header/>
        <div className=" content-container min-h-full"  style={{ height: 'calc(100vh - 120px)' }}>
        <Routes>
        <Route path='/' Component={Inicio} />
        <Route path='/board' Component={Board} />
        <Route path='/pending' Component={Pendientes} />
        <Route path='/complete' Component={Completadas} />
        </Routes>

        </div>
    </div>  
    </BrowserRouter>
    </>
  )
}

export default App
