import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import CartItem from '../components/CartItem/CartItem';
import { Shop } from '../contexts/Shop';
import { Link } from "react-router-dom";


const CartContainer = () => {
          const {products, calculateTotal, emptyCart} = useContext(Shop)
    
       
   
          return (products.length>0 ?
            <div className="containerCart">
                {products.map((product) => {
                    return <CartItem key={product.id} item={product} />
                })}
                <p>El total de la compra es $ {calculateTotal()}</p>
                <div>
                    <Button as={Link} to={'/formulario'} onClick={calculateTotal}>Confirmar Compra</Button>
                    <Button className="botonCompra" onClick={emptyCart}>Vaciar Carrito</Button>
                </div>
            </div>
            :
            <div className="containerCart">
                <h2 className="texto">NO HAY PRODUCTOS EN EL CARRITO</h2>
                <Button as={Link}  to={"/"}>Seguir Comprando</Button>
            </div>
        );    
   
};

export default CartContainer;