import "./ItemCount.css";
import React, {useEffect, useState, } from "react";

export const ItemCount = ({initial, stock, onAdd}) => {
    const [conteo, setConteo] = useState(parseInt(initial));
    const resta = () => {
        setConteo(conteo - 1)
    }

    const suma = () => {
        setConteo(conteo + 1)
    }

    useEffect(() => {
        setConteo(parseInt(initial));
    },[initial])

    return (
        <div className="counter">
            <button className="boton1" disabled={conteo <= 1} onClick={resta}>-</button>
            <span className="numeroConteo">{conteo}</span>
            <button className="boton2" disabled={conteo >= stock} onClick={suma}>+</button>
            <div>
                <button className="agregarCarrito" disabled={stock <= 0} onClick={() => onAdd(conteo)}>Agregar al  Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;
