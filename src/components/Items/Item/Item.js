import "./Item.css"
import {React,} from "react";
import {Link} from 'react-router-dom'

const Item = ({info}) => {



    return (
        <div className="juegoMain">
            <div className="juego">
                <img src={info.image} alt=""/>
                <p className="textJuego">{info.title}</p>
            <Link to={`/detalle/${info.id}`}>
                <button className="botonDetalle"> Ver detalle </button>
            </Link>
            </div>
        </div>
    )
}

export default Item;