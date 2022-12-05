import React, { useEffect,useState } from "react"
import ItemDetail from "../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";


const ItemDetailContainer = () => {

  const [detalle, setDetalle] = useState([]);
  
  let { idItem } = useParams();

  useEffect(() => {

    const getItemDetail = async () => {

           const docRef = doc(db, "products", idItem);

           const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setDetalle({...docSnap.data(), id: docSnap.id})
            } else {
                
                console.log("No such document!");
            }
        }

        getItemDetail()
        
    }, [idItem])

  return (
        
    <ItemDetail item={detalle}/>
  );
};

export default ItemDetailContainer;