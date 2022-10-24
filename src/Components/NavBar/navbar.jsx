import React from 'react';
import CardWidget from '../CartWidget';
import './style.css';


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container" id="top">
            <a className="navbar-brand navBar__Logo">AYFRAN BIKE</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center col-md-3" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="./index.html"><u>INICIO</u></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./paginas/skills.html">BICICLETAS</a>
                    </li>                                    
                    <li className="nav-item">
                        <a className="nav-link" href="./paginas/contact.html">CONTACT0</a>
                    </li>
                    <CardWidget />
                </ul>
            </div>
        </div>
    </nav>
    );
};

export default NavBar;


