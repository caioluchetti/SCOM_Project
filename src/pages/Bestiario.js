import React from "react";
import './styles/Bestiario.css'
import json from '../databaseBestiario.json'
import Botao from "../components/Botao";
import Moldura from "../components/Moldura";
import BarraPesquisa from "../components/BarraPesquisa";
// import MusicaCombate from "../components/MusicaCombate";
// import combate from '../audio/soundtrack.mp3';

export default function Bestiario() {

    return (

        <div className="body">
            {/* Barra de pesquisa */}
            <div className="barraPesquisa">
                <BarraPesquisa conteudo={(res) => console.log(res)} criaturas={json.criaturas}/>
            </div>
            <div className="criaturaContainer">
                {/* foto da criatura */}
                <div className="ImgOnPage">
                    <Moldura imagem={json.foto} />
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
        </div>
    )
}