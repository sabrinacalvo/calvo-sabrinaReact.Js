import React from 'react';
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";

  
/**
 * card que muestra el producto
 * @property {object} product recibe el producto en formato de objeto 
 * @returns  jsx con el renderizado del producto
 */

const Item = ({ id, title, stock, price, thumbnail }) => {

  

  return (
    <Col xs={12} md={4} sm={6} lg={3}>
      <Link to={`/item/${id}`}>
        <Card as="article" className="cardProducto">                
            <Card.Body  className=' d-flex flex-column justify-content-center align-items-center px-0'>
              <div className='cardImagenProducto'>
              <Card.Img variant="top" src={thumbnail} alt="foro producto"/>
              </div>
              <Card.Title className="text-center item__nombre">{title}</Card.Title>
              <Card.Text className="stock">Stock: {stock} u.</Card.Text>
              <Card.Text className="precio"> Precio: {price}</Card.Text>
            </Card.Body>
        </Card>
      </Link>
      </Col>
      
    
  );
};
  export default Item;
