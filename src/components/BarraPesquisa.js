import React from "react";
import "./BarraPesquisa.css"

export default function BarraPesquisa(props) {
    const imagensPesquisa = props.imagens
    console.log('imagensPesquisa :>> ', imagensPesquisa);

    return (
        <>
            <div>
                <div className="containerInput">
                    <div className="trianguloE">
                    </div>
                    <div className="bordaTrianguloE">
                    </div>
                    <div className="containerTrianguloE">
                    </div>
                    <input className="inputBusca" />
                    <div className="trianguloD">
                    </div>
                    <div className="bordaTrianguloD">
                    </div>
                    <div className="containerTrianguloD">
                    </div>
                    
                </div>
            </div>
        </>
    )
}