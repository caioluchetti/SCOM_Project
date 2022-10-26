import React from "react";
import './styles.css'
import json from '../databaseBestiario.json'
import Botao from "../components/Botao";
import Moldura from "../components/Moldura";
// import MusicaCombate from "../components/MusicaCombate";
// import combate from '../audio/soundtrack.mp3';

export default function Bestiario() {

    console.log('json :>> ', json.titulo);

    const imagens = [
            {
                img: "imagem 1"
            },
            {
                img: "imagem 2"
            },
            {
                img: "imagem 3"
            }
        ]


    return (

        <div className="body">
            <img src={json.foto}/>
        </div>
    )
}
