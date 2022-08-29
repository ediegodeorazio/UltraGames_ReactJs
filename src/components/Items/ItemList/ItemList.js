import Item from "../Item/Item";
import React from "react";

const ItemList = ({data = []}) => {
    return(
        data.map(juegos => <Item key={juegos.id} info={juegos} />)
    );
}

export default ItemList;