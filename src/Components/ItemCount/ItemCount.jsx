 import React from "react";
 import { useState } from "react";
 import Button from "react-bootstrap/Button";
 import ButtonGroup from "react-bootstrap/ButtonGroup";



 export const ItemCount = ({stock, onAdd}) => {
     
         const [count, setCount] = useState(0)

            

     const sumo = () =>{
         if (count < stock)
         setCount(count + 1)
     }
    
     const resto = () => {
         if (count > 0)
         setCount(count - 1);
        
     }

     const agregarAlCarrito = () => {
        if (count <= stock && count > 0) {
        onAdd(count);
      }
     }
    

   return (
    <div>
     
       <ButtonGroup className="d-flex flex-direction-row justify-content-evenly">
         <Button variant="secondary" onClick={resto} className="botonCount btn-sm">-</Button>
         <Button className="count text-center"> {count}</Button>
         <Button onClick={sumo} className="botonCount">+</Button>
        </ButtonGroup>
        <p className='text-center'>Stock disponible: {stock - count}</p>
        <Button variant="secondary" size="sm" onClick={agregarAlCarrito} className="mx-5 d-inline text-center" >Agregar al carrito</Button>
             
     </div>
   );
 };

 export default ItemCount;