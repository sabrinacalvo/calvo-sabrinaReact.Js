import React from 'react';




const   ContactForm = ({nombre, telefono, email, enviarDatos})=>{


  return (
               
    <div className="w-100 py-0" expand="lg" bg="light" variant="light"> 
                <form onSubmit={enviarDatos} >
                    <p className="mx-5">Ingresa tus datos para la entrega</p>
                    <input required type="text" placeholder="Nombre" onChange={e=>nombre(e.target.value)} name="nombre" value={nombre} className="m-5" />
                    <input required type="text" placeholder="telefono" onChange={e=>telefono(e.target.value)} name="telefono" value={telefono} className="m-5"/>
                    <input required type="text" placeholder="email" onChange={e=>email(e.target.value)} name="email" className="m-5"/>
                  
                
                </form> 
        </div>
  );

  };

export default ContactForm;