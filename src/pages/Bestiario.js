import React from "react";
import './styles.css'
import json from '../databaseBestiario.json'
import BarraPesquisa from "../components/BarraPesquisa";

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
            <BarraPesquisa imagens={imagens} />
        </div>
    )
}
