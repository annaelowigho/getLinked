import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Layout/Nav'
import Footer from './components/Layout/Footer'
import Homepage from './pages/Homepage/Homepage'

function App() {
  
  return (
    <>
      <Nav/>
      <Homepage />
      <Footer/>
    </>
  )
}

export default App
