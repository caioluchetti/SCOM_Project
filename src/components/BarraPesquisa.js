import React from "react";
import { ReactDOM } from "react";
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
                    placeholder="Pesquisar Criatura..."
                    list="criaturas"
                    onKeyUp={(event) => {
                        if (event.key === "Enter") {
                            const criatura = props.criaturas.find(el => el.nome === event.target.value)
                            console.log('object :>> ', event.target.key);
                            if (criatura) props.conteudo(criatura.idCriatura)
                        }
                    }}
                />
                <datalist id='criaturas' >
                    {
                        props.criaturas?.map(criatura => {
                            return (
                                <option
                                    key={criatura.idCriatura}
                                >
                                    {criatura.nome}
                                </option>
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