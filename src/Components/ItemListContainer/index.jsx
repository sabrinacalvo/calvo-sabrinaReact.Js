import React from "react";
import './styles.css';

//declaracion del componente

 export default function ItemListContainer ({greeting}) {
    return (
        <div className="Item-list-container">
            <h2>{greeting}</h2>
        </div>
    )
}

