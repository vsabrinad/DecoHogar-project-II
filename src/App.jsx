import ItemListContainer from './components/ItemListContainer.jsx';
import './App.css'; 
import NavBar from './components/NavBar.jsx'; 
import './main.jsx';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import { CartContext, CartProvider } from './context/CartContext';
import CartPage from './components/CartPage';



function App() {
  

  return (
    <div className='bg-beige-500'>
    <CartProvider>
      <Router>
      <NavBar className="bg-beige-700"/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}></Route>
          <Route path="/cart" element={<CartPage />}/>
          <Route path='/items' element={<ItemDetailContainer />}/>
          <Route path='/category/:id' element={<ItemListContainer/>}></Route>
          <Route path='/producto/:id' element={<ItemDetailContainer/>}></Route>
        </Routes>
      </BrowserRouter>
      </Router>
      </CartProvider>
    </div>
  )
}

export default App
