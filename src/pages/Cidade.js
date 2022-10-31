import React, { useEffect, useState } from "react";
import './styles/Bestiario.css'
import Moldura from "../components/Moldura";
import BarraPesquisa from "../components/BarraPesquisa";
import requests from "../requests";
import { useNavigate } from 'react-router-dom';

import Markarth from '../images/markarth.png'
import Morthal from '../images/morthal.png'
import Riften from '../images/riften.png'
import Solitude from '../images/solitude.png'
import Whiterun from '../images/whiterunlogo.png'
import Windhelm from '../images/windhelm.png'
import Winterhold from '../images/winterhold.png'
import Falkreath from '../images/falkreath.png'
import Dawnstar from '../images/dawnstar.png'

export default function Bestiario() {
    const [cidade, setCidade] = useState();

    const brasoes = {
        Markarth: Markarth,
        Morthal: Morthal,
        Riften: Riften,
        Solitude: Solitude,
        Whiterun: Whiterun,
        Windhelm: Windhelm,
        Winterhold: Winterhold,
        Falkreath: Falkreath,
        Dawnstar: Dawnstar
    }

    const navigate = useNavigate();

    function getParamUrl(param) {
        const urlString = window.location.href
        const url = new URL(urlString)
        return url.searchParams.get(param)
    }

    async function getResponses() {
        const nome = getParamUrl('nome')
        const responseCidade = await requests.getCidade(nome)
        setCidade(responseCidade)
    }

    useEffect(() => {
        getResponses()
    }, [window.location.href]);

    return (

        <div className="body">
            {/* Barra de pesquisa */}
            <div className="barraPesquisa">
                <button className="botaoBestiario" onClick={() => navigate('/')}>Mapa</button>
            </div>
            <div className="criaturaContainer">
                {/* foto da criatura */}
                <div className="ImgOnPage">
                    <img src={brasoes[cidade?.nome]} width={500} />
                </div>

                {/* descrição da criatura */}
                <div className="containerDescricao">
                    <div className="nome">
                        <p>
                            {cidade?.nome}
                        </p>
                    </div>

                    <div className="descricao1">
                        <p>
                            {cidade?.descricao}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}