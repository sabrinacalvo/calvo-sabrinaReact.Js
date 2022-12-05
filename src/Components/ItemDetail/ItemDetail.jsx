import React, { useContext, useState} from "react";
import Card from "react-bootstrap/Card";
import ItemCount from "../ItemCount/ItemCount";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { Shop } from "../../contexts/Shop";


const ItemDetail = ({ item }) => {
  const [itemCount, setItemCount] = useState(0);
  const {addProduct} = useContext(Shop);

  const onAdd = (cantidad) => {
      alert("tu seleccionaste " + cantidad + " items.");
      addProduct({...item, cantidad})
      setItemCount(cantidad);
  }

  return (
    <>
       {item && item.images
        ?  
        <Card className="cardDetalle">
          <Container> 
                <Col xs={12} md={6} sm={6} lg={6}>
                     <Card.Img variant="top" className="imagenProduct" src={item.images}/>
                 </Col>
                <Col xs={12} md={6} sm={6} lg={6}>
                <Card.Body>
                  <Card.Title className="tituloProductoDetalle">{item.name}</Card.Title>
                  <Card.Text> {item.detail}</Card.Text>
                  <Card.Text className="stockProducto"> Stock: {item.stock} u.</Card.Text>
                  <Card.Text className="precioProducto"> Precio: {item.price} ARS</Card.Text>
                  {
                    itemCount === 0
                    ? <ItemCount stock={item.stock} init={itemCount} onAdd={onAdd}/>
                    : <Link to={`/cart`}><Button variant="outline-primary">Ir al Carrito</Button></Link>
                  }
                </Card.Body>
                </Col>
            
          </Container>
        </Card>
      : 'Cargando...'}
    </>
  );
};

export default ItemDetail;