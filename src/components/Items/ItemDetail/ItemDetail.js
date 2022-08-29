import React, {useState} from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'
import { useCartContext } from "../../../context/CartContext";


export const ItemDetail = ({data}) => {
    const [irAlCarrito, setIrAlCarrito ] = useState(false)
    const {addJuego} = useCartContext()
    const onAdd = (unidades) => {
        setIrAlCarrito(true);
        addJuego(data, unidades)
    }
    return (
        <div className="container">
            <div className="detail box2">
                <img className="detail_image" src={data.image} alt="" />
                <div className="content">
                    <h1>{data.title}</h1>
                    <p><strong>Descripcion: </strong>{data.detalle}</p>
                    <p>- <strong>Género: </strong>{data.genero}</p>
                    <p>- <strong>Desarollador: </strong>{data.desarrollador}</p>
                    <p>- <strong>lanzamiento: </strong>{data.lanzamiento}</p>
                    {
                        irAlCarrito ? <Link to='/Cart'><div className="counter2"><button className="agregarCarrito">Ir al Carrito</button></div></Link>:<ItemCount initial={1} stock={data.stock} onAdd={onAdd} />
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;