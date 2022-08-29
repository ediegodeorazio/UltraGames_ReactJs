import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import "./ItemCart.css";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

import ModalFormulario from "../Formulario/ModalFormulario";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <p>
          <span className="totalCart"> No hay elementos en el carrito</span>
        </p>
        <Link to="/"> Hacer Compras</Link>
      </>
    );
  }

  return (
    <div className="d-flex flex-column mt-5">
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Título</th>
              <th>Cantidad</th>
              <th>Precio U.</th>
              <th>Subtotal</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((juego) => (
              <ItemCart key={juego.id} juego={juego} />
            ))}
          </tbody>
        </Table>
      </Container>
      <p className="totalCart"> Total: ${totalPrice()}</p>
      <div>
        <ModalFormulario />
      </div>
      
    </div>
  );
};

export default Cart;
