import "./ItemListContainer.css";
import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import Title from "../../Title/Title";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


// 1 - Traer el servicio de firebase
// 2 - Crear un puntero al dato que queremos traer
// 3 - Traer ek dato con una promesa

export const ItemListContainer = ({ texto }) => {
  const [data, setData] = useState([]);
  const { juegosId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "juegos");

     if(juegosId){
        const queryFilter = query(queryCollection, where('modo', '==', juegosId ))
        getDocs(queryFilter)
            .then(res => setData(res.docs.map(juego => ({ id: juego.id, ...juego.data() }))));
     }else {
        getDocs(queryCollection)
        .then (res => setData(res.docs.map(juego => ({ id: juego.id, ...juego.data() }))))

     }
  }, [juegosId]);

  return (
    <>
      <Title greeting={texto} />
          <div className="box">
            <ItemList data={data} />
          </div>
    
    </>
  );
};

export default ItemListContainer;
