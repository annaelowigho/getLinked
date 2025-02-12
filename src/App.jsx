import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Layout/Nav'
import Footer from './components/Layout/Footer'
import Homepage from './pages/Homepage/Homepage'
import Contact from './pages/SubSections/Contact'

function App() {
  
  return (
    <>
      <Nav/>
      <div>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>        
      </div>

      <Footer/>
      
    </>
  )
}

export default App
