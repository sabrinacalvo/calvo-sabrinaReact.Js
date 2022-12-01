 import React from "react";
 import Card from "react-bootstrap/Card";
 import ItemCount from "../ItemCount/ItemCount";
 import Col from "react-bootstrap/Col";
 import { Container } from "react-bootstrap";
 import Row from "react-bootstrap/Row";
 import Button from 'react-bootstrap/Button';
 import { Link } from "react-router-dom";
 import { useState } from "react";
 import { useContext } from "react";
 import { Shop } from "../../contexts/Shop";


  const ItemDetail = ({item}) => {

  const {addProduct} = useContext(Shop);

  const [quantifyItemDetail, setQuantifyItemDetail] = useState(0)
      
  const confirmPurchase = (quantifyItemDetail) => {
    console.log("cantidad item", quantifyItemDetail)
     addProduct({...item, quantifyItemDetail})
     setQuantifyItemDetail(quantifyItemDetail);
   };

   console.log("Detalles de item: ", item)

   return (
    <Card>
       <Container>
         <Row>
           <Col xs={12} md={6} sm={6} lg={6}>
             <Card.Img variant="top" className="imagenProduct" src={item.images} />
           </Col>
          
           <Col xs={12} md={6} sm={6} lg={6}>
             <Card.Body>
               <Card.Title className="tituloProductoDetalle">{item.name}</Card.Title>
               <Card.Text> {item.detail}</Card.Text>
               <Card.Text className="stockProducto"> Stock: {item.stock} u.</Card.Text>
               <Card.Text className="precioProducto"> Precio: {item.price}</Card.Text>
               <div>{quantifyItemDetail}</div>
                {quantifyItemDetail ? 
                <div>
                <Button as={Link} to={'/Cart'} onClick={5} variant="outline-primary">Terminar Compra</Button>
                
                <Button as={Link} to={'/'}>Seguir Comprando</Button>
                </div>
                :
                <div>
                <ItemCount 
                 onAdd={confirmPurchase} 
                 initial={0} 
                 stock={item.stock} 
                 />
                 
                 </div>
                 }  
                        
                 
               
              
               
            
             </Card.Body>            
           </Col>
          
         </Row>
       </Container>
     </Card>

   ); 
  
 };

 export default ItemDetail;