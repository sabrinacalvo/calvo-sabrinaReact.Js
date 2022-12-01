
 import React from "react";
 import {createContext, useState} from "react";


 export const Shop = createContext({});

 const ShopProvider = ({ children }) => {
    
      const [products, setProducts] = useState([]);

      const addProduct = (productToAdd) => {
         console.log(productToAdd);

         const flagRepeated = isProductRepeated(productToAdd.id)
        
         if (flagRepeated) {

             //Lógica para agregar la quantity y no agregar el producto entero
         } else {
             setProducts([...products, productToAdd])
         }
       }
           //Equivalente a isInCart
       const isProductRepeated = (id) => {
         return products.some(product => product.id === id);
     }       
   
     

     return  <Shop.Provider value={{products, addProduct}}>
                 {children}
              </Shop.Provider>;
 };

 export default ShopProvider;