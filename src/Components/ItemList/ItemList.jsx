import React from "react";
import Item from "../Item/Item";


const ItemList = ({products})=> {
  return (
    <section className="containerProductos pb-5">
      {products.map(products => <Item
          key={products.id}
          id={products.id}
          title={products.name}
          price={products.price}
          stock={products.stock}
          category={products.category}
          thumbnail={products.images}/>)          
      }
   </section>
  );
};

export default ItemList;