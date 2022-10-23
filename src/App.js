import './App.css';
import React from 'react';
import NavBar from './Components/NavBar/index';
import ItemListContainer from './Components/ItemListContainer';
import Cards from './Components/Producto/cards';
import Footer  from './Components/Footer/index';

function App() {

       return (
        <div className='App'>
             <NavBar /> 
             <ItemListContainer  greeting={"Bienvenidos"}/> 
             <Cards />
             <Footer />
              
        </div>
            
                    

       );

    }


export default App;


      

