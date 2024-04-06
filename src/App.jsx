import ItemListComponents from './components/ItemListComponents';
import './App.css';
import NavBar from './components/NavBar';
import './main.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <>
      <ItemListComponents saludo="Bienvenidos a Oli's house"/>
      <NavBar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
