import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import item from '../components/Item';

const saveProductsFirebase = async () => {

    try {    
        
       item.forEach(async (item) => {
            const docRef = await addDoc(collection(db, "products"), {
                name: item.name,
                price: item.price,
                images: item.images,
                stock: item.stock,
                
            });
            console.log("Document written with ID: ", docRef.id);
        })
        
    } catch (error) {
        console.log(error)
    }
}

export default saveProductsFirebase;