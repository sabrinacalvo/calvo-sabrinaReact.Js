import React from "react";
import './styles.css';
import  imagen1 from '../../imagenes/BICI1.JPG';

function Card() {
    return (
        <div className="card">
        <img src={imagen1} alt="bici1"/>    
            <div className="card-body"></div>
            <h4 className="card-title">CUBE AIM 2022</h4>
            <p className="card-text text-secondary"><b>CUADRO</b>	Modelo	Aluminium Lite, AMF, Enrutamiento Interno, Tubo de dirección Tapered <br></br>
                                    Juego de dirección	CUBE FPH868, Top 1 1/8", Bottom 1 1/2", Semi-Integrated 
                                    Caja de centros	Feimin FP-B902N, 73mm BSA
                                    Caño de asiento	CUBE Performance Post, 27.2mm
                                    Abrazadera	CUBE Varioclose, 31.8mm <br></br>
                                    <b>SUSPENSIÓN</b>	Horquilla	SR Suntour XCE, 100mm<br></br>
                                    Amortiguador	<br></br>
                                    <b>TRANSMISIÓN</b>	Cadena	KMC Z8.3  <br></br>
                                    Descarrilador Trasero	Shimano Altus M324, 8-Speed <br></br>
                                    Descarrilador Delantero	Shimano FD-TY710-2-TS3, 8-Speed, Top Swing, 31.8mm Clamp<br></br>
                                    Shifters	Shimano SL-M315, Rapidfire-Plus<br></br>
                                    Plato palanca	Shimano FC-M315, 36x22T, 170mm<br></br>
                                    Piñon	Shimano CS-HG200, 8-Speed, 12-32T<br></br>
                                <b>FRENOS</b>	Freno 	Hydr. Disc Brake<br></br>
                                    Rotores	(160mm/160mm)<br></br>
                                        
                                <b>COMPONENTES</b>	Asiento	Natural Fit Venec Lite<br></br>
                                    Avance	CUBE Performance, 31.8mm<br></br>
                                    Puños	Natural Fit Performance<br></br>
                                    Manillar	CUBE Rise Trail Bar, 680mm<br></br>
                                <b>RUEDAS</b>	Maza delantera	CUBE Alloy Light, QR, 6-Bolt<br></br>
                                    Maza trasera	CUBE Alloy Light, QR, 6-Bolt<br></br>
                                    Rayos	Double Butted 32<br></br>
                                    Aros	CUBE ZX20, 32H, Disc<br></br>
                                    Cubiertas Trasera	CUBE IMPAC Smartpac, 2.25<br></br>
                                    Cubierta Delantera	CUBE IMPAC Smartpac, 2.25<br></br>
                                <b>ACCESORIOS</b>	Pedales	CUBE PP MTB<br></br>
                                PESO	14,8 kg	 
 </p>
 <a href="#!" className="btn btn-outline-secondary rounded-0">
    COMPRAR
 </a>
            
        </div>
    );
}

export default Card;
