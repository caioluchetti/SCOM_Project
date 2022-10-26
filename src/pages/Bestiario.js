import React from "react";
import './styles.css'
import json from '../databaseBestiario.json'
import Botao from "../components/Botao";
import Moldura from "../components/Moldura";

export default function Bestiario() {

console.log('json :>> ', json.titulo);

    return (

        <div className="body">
            {/* foto da criatura */}
            <div className="ImgOnPage">
            <Moldura imagem={json.foto}/>
            </div>

            {/* nome da criatura */}
            <div className="nome">
                <p>
                {json.nome}
                </p>
            </div>

            {/* descrição da criatura */}
            <div className="descricao">
                <p>
                {json.descricao}
                </p>
            </div>

            <div className="combate">
                <p>
                {json.combate}
                </p>
            </div>
        
        </div>
    )
}