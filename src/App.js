import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import { Theme }  from "./contexts/Theme";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import CartContainer from "./containers/CartContainer";
import ContactForm from "./components/ContactForm/ContactForm";




const App = () => {

    const {themeColor} = useContext(Theme)

return(
    
    <div className={themeColor === 'dark' ? 'container-dark' :  null }>
         
            <BrowserRouter>
         
                 <Navbar/>
             
                 <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/category/:idCategory" element={<ItemListContainer/>} />
                        <Route path="/item/:idItem" element={<ItemDetailContainer/>} />
                        <Route path="/cart" element={<CartContainer />}/>
                        <Route path="/ContactForm" element={<ContactForm />}/>
                 </Routes>
                 
                 <Footer/>
                
          
            </BrowserRouter>
         
                
     
    </div>
  )
}

export default App;