import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import CartItem from '../components/CartItem/CartItem';
import {Shop} from '../contexts/Shop';
import { Link } from "react-router-dom";
import generateOrderObject from '../services/generateOrderObject';
import { doc, getDoc, updateDoc, collection, addDoc } from "firebase/firestore";
import { db } from '../services/firebase';


    const CartContainer = () => {
    const {products, calculateTotal} = useContext(Shop)
    console.log(products);
       
    const confirmPurchase = () => {
        //Mostrar un formulario de compra, donde el usuario ingrese sus datos
        (async ()=> {

            const nombreComprador = "Sebas"
            const telefono = 111111111
            const email = "sebas@live.com"
    
            const generatedOrder = generateOrderObject(
                                            nombreComprador,
                                            email,
                                            telefono,
                                            products,
                                            calculateTotal())
            console.log(generatedOrder);
            
            let productOutOfStock = []
            //Chequear el stock de los productos en el carrito
            for (const productInCart of products) {
                const docRef = doc(db, "products", productInCart.id);
                const docSnap = await getDoc(docRef);
                console.log(docSnap);
                const productInFirebase = {...docSnap.data(), id: doc.id}
                if (productInCart.cantidad > productInFirebase.cantidad) productOutOfStock.push(productInCart)                
            }
    
            console.log(productOutOfStock);
    
            if (productOutOfStock.length === 0) {
                //Disminuir el stock existente
                console.log(products);
    
                for (const productInCart of products) {
                        const productRef = doc(db, "products", productInCart.id);
            
                        const docSnap = await getDoc(productRef);
                        const productInFirebase = {...docSnap.data(), id: doc.id}
            
                        // Set the "capital" field of the city 'DC'
                        await updateDoc(productRef, {
                            cantidad: productInFirebase.cantidad - productInCart.cantidad
                        });
                    }
                
                //Generar la orden
    
                // Add a new document with a generated id
                try {
                    const docRef = await addDoc(collection(db, "orders"), generatedOrder);
                    alert(`Se generó la order correctamente con ID: ${docRef.id}`)
                } catch (error) {
                    console.log(error)
                }
            }
            else {
                alert("Hay algún producto fuera de stock")
            }
        })()

    }


    
      
    return (
        <div>
          {products.map(product => {
                return <CartItem key={product.id} item={product}/>
            })}
            <div className='me-auto text-center'>
                              
               <Button as={Link} to={'/ContactForm'} onClick={confirmPurchase}>Confirmar Compra</Button>
            </div>
            <div>
               <Button as={Link}  to={"/"}>Seguir Comprando</Button>
            
            </div>
        </div>
                       
    
            
            
            
    
    );   
};
export default CartContainer;