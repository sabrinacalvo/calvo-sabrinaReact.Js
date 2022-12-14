import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
import generateOrderObject from "./generateOrderObject";

export const saveOrder = async (nombre, telefono, email, products, total) => {
    try {
        const generatedOrder = generateOrderObject(
            nombre,
            email,
            telefono,
            products,
            total
        );
    
        const productOutOfStock = [];
        const productsInFirebase = [];
        //Chequear el stock de los productos en el carrito
        for (const productInCart of products) {
            const docRef = doc(db, "products", productInCart.id);
            const docSnap = await getDoc(docRef);
            const productInFirebase = { ...docSnap.data(), id: docSnap.id };
            productsInFirebase.push(productInFirebase);
            if (productInCart.cantidad > productInFirebase.cantidad)
                productOutOfStock.push(productInCart);
        }
    
        console.log(productOutOfStock);
        console.log(productsInFirebase);
    
        if (productOutOfStock.length === 0) {
            //Disminuir el stock existente
            console.log(products);
    
            for (const productInCart of products) {
                const productInFirebase = productsInFirebase.find(
                    (product) => product.id === productInCart.id
                );
                const productRef = doc(
                    db,
                    "products",
                    productInCart.id
                );
                // Actualizo el stock del producto
                await updateDoc(productRef, {
                    quantity:
                        productInFirebase.cantidad -
                        productInCart.cantidad,
                });
            }
    
            //Generar la orden
            const docRef = await addDoc(
                collection(db, "orders"),
                generatedOrder
            );
            alert(
                `Se generó la order correctamente con ID: ${docRef.id}`
            );
        } else {
            let mensaje = "";
            for (const product of productOutOfStock) {
                const productInFirebase = productsInFirebase.find(
                    (productFirebase) => productFirebase.id === product.id
                );
                console.log(productInFirebase);
                mensaje += `${product.name}, stock disponible: ${productInFirebase.cantidad}, cantidad pedida: ${product.cantidad}\n`;
            }
            alert(`Hay producto/s fuera de stock: \n${mensaje}`);
        }
    } catch (error) {
        console.log(error);
    }
}
        