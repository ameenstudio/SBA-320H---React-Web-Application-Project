import './App.css'
import { Routes, Route } from 'react-router-dom'
//Pages
import Homepage from './pages/Homepage'
import Characters from './pages/Characteres'
import Episodes from './pages/Episodes';
import Locations from './pages/Locations';
import NotFound from './pages/NotFound';
//components
import Nav from './components/Nav/Nav';

function App() {
  

  return (
    <>
    {/* {location.pathname !== '/' && <Nav />} no longer needed*/}
    <Nav />
    
      <Routes>
       <Route path="/" element={<Homepage />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
