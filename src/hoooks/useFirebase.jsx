import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../services/firebase';



const useFirebase = (idCategory) => {

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
       
    useEffect(() => {
        (async () => {
            try {  
               setLoading(true);                                              
               let q; 
               if (idCategory) {
                   q = query(collection(db, "products"), where( "categoryId", "==", parseInt(idCategory))
                      );
                 } else {
                    q = query(collection(db, "products"));
                 }

                const querySnapshot = await getDocs(q);
                const productosFirebase = [];
                querySnapshot.forEach((doc) => {                               
                    productosFirebase.push({...doc.data(), id: doc.id})
                });
                setData(productosFirebase);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false)
            }
        })();
    }, [idCategory]);

   


    return [data, error, loading]
    
 
  
}
export default useFirebase


