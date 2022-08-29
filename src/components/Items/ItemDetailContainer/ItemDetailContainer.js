import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'
import React, {useState, useEffect} from "react";
import {doc, getDoc, getFirestore} from 'firebase/firestore';
import { useParams } from "react-router-dom";

// 1 - Traer el servicio de firebase
// 2 - Crear un puntero al dato que queremos traer
// 3 - Traer ek dato con una promesa
 



export const ItemDetailContainer = () => {

    const [data, setData] = useState({});

    const {detalleId} = useParams();
    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, "juegos", detalleId)
        getDoc(queryDoc)
            .then(res => setData({id: res.id, ...res.data() }))
    },[detalleId])
    

    return (
        
           <ItemDetail data={data}/> 
        
    )
}

export default ItemDetailContainer;