import  React from 'react';
import { useCartContext } from '../../context/CartContext'
import './CartWidget.css'

function CartWidget () {
    const {totalJuegos} = useCartContext()

    return(
        <div>
            <img src='https://i.ibb.co/VjCSQ19/cart.png' className='icono' alt='cart icon' />
            <span className='valueCart'>{totalJuegos() || '' }</span>
        </div>
    );
}


export default CartWidget;