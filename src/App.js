import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/Items/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/Items/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartContext';




function App() {
    return ( 
    <div className = "App">
        <BrowserRouter>
            <CartProvider>
                <NavBar />
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/juegos/:juegosId' element={<ItemListContainer  />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
                    <Route path='*' element={<Navigate to="/" />} />
                </Routes>
            </CartProvider>
      </BrowserRouter>
    </div>);
}

export default App;