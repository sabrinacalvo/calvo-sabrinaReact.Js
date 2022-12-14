import React, { useState, useContext } from 'react';
import { Shop } from "../../contexts/Shop";
import { saveOrder } from "../../services/saveOrder";
import { useNavigate } from "react-router-dom";
import { Button, Container } from 'react-bootstrap';


const Formulario = () => {

const {products, calculateTotal, emptyCart} = useContext(Shop);
const navigate = useNavigate();
    
       
    const confirmPurchase = () => {   
      (async () => {
            await saveOrder(
             datos.name,
             datos.email,
             datos.phone,
             products,
             calculateTotal()
            )
         })();
        };
        const [datos, setDatos] = useState({
            name: '',
            email: '',
            phone: ''
        });
        const handleInputChange = (event) => {
            
            setDatos({
                ...datos,
                [event.target.name] : event.target.value
            })
           
        };
        const enviarDatos = (event) => {
            event.preventDefault();  
            event.target.reset(); 
            emptyCart()
            navigate('/')     
        };


  return (
               
        <Container className="mx-5" expand="lg"> 
                    
                  <form className='formulario'onSubmit={enviarDatos}>
                            <input className='input' name="name" type="text" placeholder='Ingresar Nombre'  onChange={handleInputChange}/>
                            <input className='input' name="email" type="email" placeholder='Ingresar Email'  onChange={handleInputChange}/>
                            <input className='input' name="phone" type="tel" placeholder='Ingresar Teléfono'  onChange={handleInputChange}/>
                            <Button className='boton' onClick={confirmPurchase} type="submit">Enviar</Button>
                  </form>
        </Container>
            
  );

  };

export default Formulario;