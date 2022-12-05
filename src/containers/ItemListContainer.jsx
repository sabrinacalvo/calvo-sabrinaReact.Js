import React, { useEffect, useState } from "react";
import ItemList from "../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";
import { Container, Row } from "react-bootstrap";
import { CircularProgress } from "@mui/material";


export default function  ItemListContainer () {

    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)
    

    let { idCategory } = useParams();

    useEffect(() => {
        (async () => {
            try {  
                setLoading(true)         
                                             
               let q;
               console.log("idCategory", idCategory)
               

                if (idCategory) {
                   
                   q = query(collection(db, "products"), where( "categoryId", "==", parseInt(idCategory))
                      );
                 } else {
                    q = query(collection(db, "products"));
                 }

                const querySnapshot = await getDocs(q);
                const productosFirebase = [];
                querySnapshot.forEach((doc) => {
                
                    console.log(doc.id, " => ", doc.data());
                    productosFirebase.push({...doc.data(), id: doc.id})
                });
                setProducts(productosFirebase);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [idCategory]);

    console.log(products);

    

    return (
        <Container className="containerProductos">
            <Row>

            {loading ? (
        <div className="loarder-loader">
          {" "}
          <CircularProgress color="secondary" />
          <p className="ms-4 mt-1 ">Cargando...</p>
        </div>
            ) :
            ("")
        }
        
         <ItemList key={products.id} products={products}/> 
                
            </Row>
        </Container>
    );
};


