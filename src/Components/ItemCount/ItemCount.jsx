 import React from "react";
 import { useState, useEffect } from "react";
 import Button from "react-bootstrap/Button";
 import ButtonGroup from "react-bootstrap/ButtonGroup";



 export const ItemCount = ({onAdd, stock, initial}) => {
     const [count, setCount] = useState(initial);

     useEffect(() => { },[count]);

     const sumo = () => {
         if (count < stock){
         setCount(count + 1);
     }};
    
     const resto = () => {
         if (count>0)
         setCount(count - 1);
     };
    

   return (
     <>
       <ButtonGroup className="mb-2">
         <Button onClick={resto} className="botonCount">-</Button>
         <Button className="count">{count}</Button>
         <Button onClick={sumo} className="botonCount">+</Button>
         <Button onClick={()=>onAdd(count)}>Agregar al Carrito</Button>
        
       </ButtonGroup>
     </>
   );
 };

 export default ItemCount;