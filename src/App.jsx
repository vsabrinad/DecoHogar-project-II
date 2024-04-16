import ItemListContainer from './components/ItemListContainer.jsx';
import './App.css';
import NavBar from './components/NavBar.jsx';
import Counter from './components/Counter.jsx';
import './main.jsx';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Item from './components/Item.jsx';
import ItemList from './components/ItemList.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import ItemDetail from './components/ItemDetail.jsx';
import Home from './components/Home.jsx';


function App() {
  

  return (
    <div className='bg-beige-500'>
      <NavBar className="bg-beige-700"/>
      <ItemListContainer saludo="Bienvenidos a Oli's house"/>
      <ItemList/>
      <Item/>
      <ItemDetailContainer/>
      <ItemDetail/>
      <Counter/>
      <BrowserRouter>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/' element={<ItemListContainer/>}></Route>
          <Route path='/category/:id' element={<ItemListContainer/>}></Route>
          <Route path='/producto/:id' element={<ItemListContainer/>}></Route>
          <Route></Route>
        </Routes>
      </Router>
      </BrowserRouter>
    </div>
  )
}

export default App
