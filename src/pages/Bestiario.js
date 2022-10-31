import React, { useState, useEffect } from "react";
import './styles/Bestiario.css'
import json from '../databaseBestiario.json'
import Botao from "../components/Botao";
import Moldura from "../components/Moldura";
import BarraPesquisa from "../components/BarraPesquisa";
import requests from "../requests";
import { useNavigate, Link } from 'react-router-dom';

export default function Bestiario() {

    const [criaturas, setCriaturas] = useState();
    const [bestiario, setBestiario] = useState();

    async function getResponses() {
        const responseCriaturas = await requests.getCriaturas()
        const responseBestiario = await requests.getBestiario()
        setCriaturas(responseCriaturas)
        setBestiario(responseBestiario)
    }

    const navigate = useNavigate();

    useEffect(() => {
        getResponses()
    }, []);

    return (
        <div className="body">
            {/* Barra de pesquisa */}
            <div className="barraPesquisa">
                <BarraPesquisa conteudo={(res) => navigate(`/criatura?id=${res}`)} criaturas={criaturas} />
            </div>
            <div className="containerBestiario">
                <ul>
                    {bestiario?.map(grupo => {
                        return (
                            <li>
                                <h1>{grupo.grupo}</h1>
                                <ul>
                                    {grupo.criaturas.map(criatura => {
                                        return (
                                            <li>
                                                <Link style={{ textDecoration: 'none', color: 'black' }}>{criatura.nome}</Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </li>
                        )
                    })

                    }
                </ul>
            </div>
        </div>
    )
}