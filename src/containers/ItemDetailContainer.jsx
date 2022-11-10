import React, { useEffect,useState } from "react"
import ItemDetail from "../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {customFetch} from "../utils/customFetch";
import products from "../utils/productos";

const ItemDetailContainer = () => {

  const [detalle, setDetalle] = useState([]);
  let { idItem } = useParams();

  useEffect(() => {
    customFetch(2000, products.find(product => {
      return product.id === parseInt(idItem);
    }))
    .then(result => setDetalle(result))
    .catch(err => console.log(err))
  }, [idItem]);

  return (
    <ItemDetail item={detalle}/>
  );
};

export default ItemDetailContainer;