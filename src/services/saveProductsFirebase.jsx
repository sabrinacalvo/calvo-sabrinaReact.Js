import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";
import item from '../Data/Data.json';


const saveProductsFirebase = async () => {

    try {    
        
       item.forEach(async (item) => {
            const docRef = await addDoc(collection(db, "products"), {
                name: item.name,
                images: item.images,
                detail: item.detail,
                categoryId: item.categoryId,
                category: item.category,
                price: item.price,
                stock: item.stock,
                
                

                
            });
            console.log("Document written with ID: ", docRef.id);
        })
        
    } catch (error) {
        console.log(error)
    }
}

export default saveProductsFirebase;