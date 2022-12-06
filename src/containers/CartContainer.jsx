import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import CartItem from '../components/CartItem/CartItem';
import { Shop } from '../contexts/Shop';
import { Link } from "react-router-dom";
import { saveOrder } from "../services/saveOrder";





    const CartContainer = () => {
    const {products, calculateTotal, emptyCart} = useContext(Shop)
    
       
    const confirmPurchase = () => {
        

        //Mostrar un formulario de compra, donde el usuario ingrese sus datos
        (async () => {
            await saveOrder(
             "Sabrina",
             123456789,
             "calvo.sabrinas@gmail.com",
             products,
             calculateTotal()
            )
         })();
     };
      
    return (
        <div>
          {products.map(product => {
                return <CartItem key={product.id} item={product}/>
                
            })}
            <div className='me-auto text-center'>
                          
               <Button as={Link} to={'/ContactForm'} onClick={confirmPurchase}>Confirmar Compra</Button>
               <Button className="vaciarcarrito" onClick={emptyCart}>Vaciar Carrito</Button>
                               
            </div>


            <div>
               <Button as={Link}  to={"/"}>Seguir Comprando</Button>
            
            </div>
        </div>
                       
    
            
            
            
    
    );   
};
export default CartContainer;