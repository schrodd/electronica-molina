import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext/CartContext'

function App() {

  return (
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/detail/:productSku' element={<ItemDetailContainer/>} />
            <Route path='/category/:productCat' element={<ItemListContainer/>} />
            <Route path='/cart' element={<Cart/>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
  )
} 

export default App;
