import ItemListContainer from './components/ItemListContainer';
import Item from './components/Item/Item.jsx';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import './main.jsx';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  

  return (
    <>
      <ItemListComponents saludo="Bienvenidos a Oli's house"/>
      <BrowserRouter>
      <NavBar/>
      <Router>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}></Route>
          <Route path='/category/:category' element={<ItemListContainer/>}></Route>
          <Route path='/producto/:id' element={<ItemDetailContainer/>}></Route>
        </Routes>
      </Router>
      </BrowserRouter>
    </>
  )
}

export default App
