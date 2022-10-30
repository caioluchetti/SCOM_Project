import React, { useEffect, useState } from "react";
import './styles/Bestiario.css'
import json from '../databaseBestiario.json'
import Botao from "../components/Botao";
import Moldura from "../components/Moldura";
import BarraPesquisa from "../components/BarraPesquisa";
import requests from "../requests";
import { useNavigate } from 'react-router-dom';

export default function Bestiario() {
    const [criaturas, setCriaturas] = useState();
    const [criaturaId, setCriaturaId] = useState();

    const navigate = useNavigate();

    function getParamUrl(param) {
        const urlString = window.location.href
        const url = new URL(urlString)
        return url.searchParams.get(param)
    }

    async function getResponses() {
        const id = getParamUrl('id')
        const responseCriaturas = await requests.getCriaturas()
        const responseCriaturaId = await requests.getCriaturaId(id)
        setCriaturas(responseCriaturas)
        setCriaturaId(responseCriaturaId)
    }

    useEffect(() => {
        getResponses()
    }, [window.location.href]);

    return (

        <div className="body">
            {/* Barra de pesquisa */}
            <div className="barraPesquisa">
                <BarraPesquisa conteudo={(res) => navigate(`/criatura?id=${res}`)} criaturas={criaturas} />
            </div>
            <div className="criaturaContainer">
                {/* foto da criatura */}
                <div className="ImgOnPage">
                    <Moldura imagem={json.foto} />
                </div>

                {/* nome da criatura */}
                <div className="nome">
                    <p>
                        {criaturaId?.nome}
                    </p>
                </div>

                {/* descrição da criatura */}
                <div className="descricao">
                    <p>
                        {criaturaId?.descricao1}
                    </p>
                </div>

                <div className="combate">
                    <p>
                        {criaturaId?.descricao2}
                    </p>
                </div>
            </div>
        </div>
    )
}