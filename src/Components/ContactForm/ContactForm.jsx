import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const   ContactForm = ({setearNombre, setearEmail, setearTelefono, nombre, telefono, enviarDatos})=>{




  return (
    <div className="w-100 py-0" expand="lg" bg="light" variant="light"> 
                <form onSubmit={enviarDatos} >
                    <p className="mx-5">Ingresa tus datos para la entrega</p>
                    <input required type="text" placeholder="Nombre" onChange={e=>setearNombre(e.target.value)} name="nombre" value={nombre} className="m-5" />
                    <input required type="text" placeholder="telefono" onChange={e=>setearTelefono(e.target.value)} name="telefono" value={telefono} className="m-5"/>
                    <input required type="text" placeholder="email" onChange={e=>setearEmail(e.target.value)} name="email" className="m-5"/>
                    <Button variant="primary" as={Link} to={"/"}>Enviar</Button>{' '}
                
                </form> 
        </div>
  );

  };

export default ContactForm;