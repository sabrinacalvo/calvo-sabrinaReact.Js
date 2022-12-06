import { createContext, useState } from "react";
import React from "react";

export const Shop = createContext({});

const ShopProvider = ({ children }) => {
    const [products, setProducts] = useState([]);



    const addProduct = (productToAdd) => {
        console.log(productToAdd);
        const flagRepeated = isProductRepeated(productToAdd.id);
        if (flagRepeated) {
            const productoRepetidoModificado = products.find(
            (productInCart) => productInCart.id === productToAdd.id
            );
            productoRepetidoModificado.cantidad += productToAdd.cantidad;
            const productosCartSinRepetido = products.filter(
            (productsInCart) => productsInCart.id !== productToAdd.id
            );
            setProducts([
                ...productosCartSinRepetido,
                productoRepetidoModificado,
            ]);
        } else {
            setProducts([...products, productToAdd]);
        }
    }

    //Equivalente a isInCart
    const isProductRepeated = (id) => {
        return products.some((product) => product.id === id);
    }

    //Eliminar un producto
    const removeProduct = (id) => {
        const productosCart = products.filter(
            (productsInCart) => productsInCart.id !== id);
        setProducts(productosCart);
    }

    //Vaciar el carrito
    const emptyCart = () => {
        setProducts([]);
    }


    //Cálculo del total
    const calculateTotal = () => {
        const total = products.reduce(
            (acc, productoActual) =>
                acc += productoActual.cantidad * productoActual.price, 0)
                return total
    }
         
    //Cálculo del total de items del carrito
    const totalItemsCart = () => {
        let total = 0;
        products.forEach((product) => (total += product.cantidad));
        return total
    }

   

    return (
        <Shop.Provider
            value={{
                products,
                addProduct,
                removeProduct,
                emptyCart,
                calculateTotal,
                totalItemsCart,
               
            }}
        >
            {children}
        </Shop.Provider>
    );
};

export default ShopProvider;
