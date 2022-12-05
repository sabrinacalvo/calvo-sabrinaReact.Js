const generateOrderObject = (nombre, email, telefono, cart, total) => {
   
     return {
        order: {
            nombre: nombre,
            email: email,
            telefono: telefono,
        },
        items: cart
        ,
        total: total,
        createdAt: new Date().toLocaleString()
     }
    }
    export default generateOrderObject;

