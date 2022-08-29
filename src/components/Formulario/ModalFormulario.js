import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useCartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

const ModalFormulario = () => {
  const [capturaEmail, setCapturaEmail] = useState("");

  const { cart, totalPrice, clearCart } = useCartContext();
  //Modal Boostrap
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // fecha

  const tiempoTranscurrido = Date.now();
  const date = new Date(tiempoTranscurrido).toLocaleDateString();

  //finalizar compra
  const navigate = useNavigate();
  const [mostrarId, setMostrarId] = useState("");

  const handleClick = () => {
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then(({ id }) => setMostrarId(id));
    setTimeout(() => {
      clearCart();
      navigate("../../");
    }, 6000);
  };
  // Llevar datos de Input a firestore
  const [usuarios, setUsuarios] = useState({
    name: "",
    email: "",
    phone: "",
    adress: "",
  });

  const valor = (evento) => {
    setUsuarios({ ...usuarios, [evento.target.name]: evento.target.value });
  };
  // datos para firebase

  const order = {
    buyer: {
      ...usuarios,
    },
    items: cart.map((juego) => ({
      id: juego.id,
      title: juego.title,
      price: juego.price,
      cantidad: juego.cantidad,
    })),
    fecha: date,
    total: totalPrice(),
  };

  return (
    <>
      <Button  variant="primary" onClick={handleShow}>
        Generar pedido
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Estamos Generando tu pedido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {usuarios.email !== "" && usuarios.email === capturaEmail ? (
              <Alert variant="success"> Los email ingresados coinciden </Alert>
            ) : (
              <Alert variant="danger">
                {" "}
                Los email ingresados no coinciden{" "}
              </Alert>
            )}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre:</Form.Label>
              <Form.Control
                type="text"
                onChange={valor}
                name="name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                onChange={valor}
                name="email"
                placeholder="name@example.com"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Repetir email:</Form.Label>
              <Form.Control
                type="email"
                onChange={(captura) => setCapturaEmail(captura.target.value)}
                placeholder="name@example.com"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Telefono:</Form.Label>
              <Form.Control onChange={valor} name="phone" type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Dirección:</Form.Label>
              <Form.Control onChange={valor} name="adress" type="text" />
            </Form.Group>
            {mostrarId === "" ? (
              ""
            ) : (
              <Alert variant="success">
                {" "}
                Su numero pedido es: {mostrarId}{" "}
              </Alert>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {usuarios.name === "" ||
          usuarios.email === "" ||
          usuarios.phone === "" ||
          usuarios.adress === "" ? (
            ""
          ) : (
            <Button variant="primary" onClick={handleClick}>
              Confirmar Pedido
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalFormulario;
