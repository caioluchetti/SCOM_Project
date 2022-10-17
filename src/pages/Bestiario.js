import React from "react";
import './styles.css'
import json from '../databaseBestiario.json'
import Botao from "../components/Botao";

export default function Bestiario() {

console.log('json :>> ', json);

    return (
        <div className="body">
            <Botao texto="sadsdsdasda"/>
            <Botao texto="teste2" funcao={() => alert("funcao ativa")}/>
        </div>
    )
}