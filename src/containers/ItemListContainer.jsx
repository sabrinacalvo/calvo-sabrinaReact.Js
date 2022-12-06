import React from "react";
import ItemList from "../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import {  Container, Row } from "react-bootstrap";
import { CircularProgress } from "@mui/material";
import useFirebase from "../hoooks/useFirebase";



export default function  ItemListContainer () {

    
    const { idCategory } = useParams();
    const [data, error, loading] = useFirebase(idCategory)

     

    return (
        <Container className="containerProductos">
            <Row>
                <div>

                  {(data.length && !loading &&!error) 
                  ?
                  <ItemList products={data} /> 
                : error 
                  ? 
                  <h1>{error}</h1>
                  :                  
                  loading
                  ?
                  <div className="loarder-loader">
                  {" "}
                  <CircularProgress color="secondary" />
                  <p className="ms-4 mt-1">Cargando...</p>
                   </div>
                                  
                  : null
                }            
             </div>
                 
             </Row>
        </Container>
    );
};


