import React, { useContext } from 'react';
import { Shop } from '../../contexts/Shop';
import TrashIcon from '../TrashIcon/TrashIcon';



const CartItem = ({item}) => {

    const {removeProduct} = useContext(Shop);
  
    const handleRemove = () => {
      removeProduct(item.id)
    }
  
    return (        
          <div className="d-flex flex-row justify-content-evenly align-items-center">
                          
               <img variant="top" className="imagenProduct" src={item.images} width={150} alt='cart-item'/>
               <h2 className='text-center fs-6- fs-md-5'>{item.name}</h2>
                <p className='text-dark'>Cantidad {item.cantidad}</p>
               <p className='text-dark'>Precio {item.price}</p>
               
               <p>subtotal ${item.stock*item.price}</p>
               <div className="remove" style={{width: 30, cursor:'pointer'}} onClick={handleRemove}>
               <TrashIcon />
               </div>
              
          </div>
        
    );
};
    
  
  export default CartItem;