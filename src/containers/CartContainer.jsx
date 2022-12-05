import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import CartItem from '../components/CartItem/CartItem';
import {Shop} from '../contexts/Shop';
import { Link } from "react-router-dom";


    const CartContainer = () => {
    const {products} = useContext(Shop)
    console.log(products);
       

    
      
    return (
        <div>
          {products.map(product => {
                return <CartItem key={product.id} item={product}/>
            })}
            <div className='me-auto text-center'>
                              
               <Button as={Link} to={'/ContactForm'}> Confirmar Compra </Button>
               <Button as={Link}  to={"/"}>Seguir Comprando</Button>
             
            </div>
        </div>
                       
    
            
            
            
    
    );   
};
export default CartContainer;