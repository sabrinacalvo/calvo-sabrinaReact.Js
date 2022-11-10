import {BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";

const App = () => {
  return(
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:idCategory" element={<ItemListContainer/>} />
        <Route path="/item/:idItem" element={<ItemDetailContainer/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;