import React from "react";
import './styles.css'
import json from '../databaseBestiario.json'
import Botao from "../components/Botao";
import Moldura from "../components/Moldura";

export default function Bestiario() {

console.log('json :>> ', json.titulo);

    return (
        <div className="body">
            <Moldura imagem={json.foto} />
        </div>
    )
}