import React from "react";
import "./BarraPesquisa.css"

export default function BarraPesquisa(props) {
    return (
        <>
            <div className="containerInput">
                <div className="trianguloE">
                </div>
                <div className="bordaTrianguloE">
                </div>
                <input
                    className="inputBusca"
                    onChange={(element) => props.conteudo(element.target.value)}
                    placeholder="Pesquisar Criatura..."
                    list="criaturas"
                />
                <datalist id='criaturas'>
                    {
                        props.criaturas?.map(criatura => {
                            return (
                                <option>{criatura.nome}</option>
                            )
                        })
                    }
                </datalist>
                <div className="trianguloD">
                </div>
                <div className="bordaTrianguloD">
                </div>
            </div>
        </>
    )
}