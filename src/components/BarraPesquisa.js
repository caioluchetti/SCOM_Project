import React from "react";
import "./BarraPesquisa.css"

export default function BarraPesquisa(props) {
    const imagensPesquisa = props.imagens
    console.log('imagensPesquisa :>> ', imagensPesquisa);

    return (
        <>
            <div>
                <div className="containerInput">
                    <div className="containerTrianguloE">
                        <div className="bordaTrianguloE">
                            <div className="trianguloE">
                            </div>
                        </div>
                    </div>
                    <input className="inputBusca" />
                    <div className="trianguloD"></div>
                    <div className="containerTrianguloD">
                        <div className="bordaTrianguloD">
                            <div className="trianguloD">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}