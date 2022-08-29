import React from "react";
import { useCartContext } from "../../context/CartContext";
import "./ItemCart.css";
import { BsFillTrash2Fill, BsFillBagPlusFill } from "react-icons/bs";
import {Link} from 'react-router-dom'

const ItemCart = ({ juego }) => {
  const { removeJuego } = useCartContext();
  return (
    <tr className="itemCart">
      <td>{juego.title}</td>
      <td>{juego.cantidad}</td>
      <td>${juego.price}</td>
      <td>${juego.cantidad * juego.price}</td>
      <td className="d-flex gap-4 justify-content-center align-items-center">
        <button className="botonAccion" onClick={() => removeJuego(juego.id)}>
          <BsFillTrash2Fill />
        </button>
        <Link to={`/detalle/${juego.id}`}>
        <button className="botonAccion">
          <BsFillBagPlusFill />
        </button>
        </Link>
      </td>
    </tr>
  );
};

export default ItemCart;
