import React, { useContext, useState } from 'react'
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    
    const addJuego = (item, cantidad) => {
        if (isInCart(item.id)) {
            setCart(cart.map(juego => {
                return juego.id === item.id ? { ...juego, cantidad: juego.cantidad + cantidad} : juego
            }));
        }else {
            setCart([...cart, {...item, cantidad}])   
            
        }
    }
        console.log ("carrito ", cart)
       

    const totalPrice = ( ) => {
        return cart.reduce ((prev, act) => prev +act.cantidad * act.price, 0)
    }
        
    const totalJuegos = () => cart.reduce ((acumulador, juegoActual) => acumulador + juegoActual.cantidad, 0 )
        
    const clearCart = () => setCart([])

    const isInCart = (id) => {return cart.some(juego => juego.id === id) ? true : false}

    const removeJuego = (id) => setCart(cart.filter(juego => juego.id !== id))

  return (
    <CartContext.Provider value={{
        clearCart,
        isInCart,
        removeJuego,
        addJuego,
        totalPrice,
        totalJuegos,
        cart
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider