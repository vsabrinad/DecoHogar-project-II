import ItemListContainer from './components/ItemListContainer.jsx';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import './main.jsx';
//import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
//import Item from './components/Item/Item.jsx';

function App() {
  

  return (
    <div>
      <ItemListComponents saludo="Bienvenidos a Oli's house"/>
      <BrowserRouter>
      <NavBar className="bg-beige-700"/>
      <Router>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}></Route>
          <Route path='/category/:category' element={<ItemListContainer/>}></Route>
          <Route path='/producto/:id' element={<ItemDetailContainer/>}></Route>
        </Routes>
      </Router>
      </BrowserRouter>
    </div>
  )
}

export default App
