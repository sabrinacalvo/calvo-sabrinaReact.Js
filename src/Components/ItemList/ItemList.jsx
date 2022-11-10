import React from "react";
import Item from "../Item/Item";

const ItemList = ({products})=> {
  return (
    <>
      {products.map(producto => <Item
          key={producto.id}
          id={producto.id}
          title={producto.name}
          price={producto.price}
          stock={producto.stock}
          category={producto.category}
          thumbnail={producto.images[0]}/>)          
      }
    </>
  );
};

export default ItemList;