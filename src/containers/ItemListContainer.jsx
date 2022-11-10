import {customFetch} from "../utils/customFetch";
import products from "../utils/productos";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList/ItemList"
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    let { idCategory } = useParams();

    useEffect(() => {
        customFetch(2000, products.filter(product => {
            if (idCategory === undefined) return product;
            return product.categoryId === parseInt(idCategory)
        }))
        .then(result => setProductos(result))
        .catch(err => console.log(err))
    }, [idCategory]); 

    return (
        <Container className="containerProductos">
            <Row>
                <ItemList products={productos}/>
            </Row>
        </Container>
    );
};

export default ItemListContainer;