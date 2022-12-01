import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

 const Cart = () => {


  return (
    <div>
      <h3>SOY UN CARRITO</h3>;
      <h2>Productos</h2>
      <h2>Carrito vacío 😱</h2>
      <Link to={`/`}>
                   <Button className="regresar"> Regresar al Home </Button>
         </Link>

   </div>
   

       );
  };

export default Cart;


    



