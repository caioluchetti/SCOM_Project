import React from "react";
import './styles.css'
import json from '../databaseBestiario.json'
import Botao from "../components/Botao";

export default function Bestiario() {

console.log('json :>> ', json.titulo);

    return (
        <div className="body">
            <img src={json.foto}/>
        </div>
    )
}