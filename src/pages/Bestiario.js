import React, { useState, useEffect } from "react";
import './styles/Bestiario.css'
import json from '../databaseBestiario.json'
import Botao from "../components/Botao";
import Moldura from "../components/Moldura";
import BarraPesquisa from "../components/BarraPesquisa";
import requests from "../requests";
import { useNavigate, Link } from 'react-router-dom';
import logo from '../images/Skyrim-Symbol.png'

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
                <button className="botaoBestiario" onClick={() => navigate('/')}>Mapa</button>
                <BarraPesquisa conteudo={(res) => navigate(`/criatura?id=${res}`)} criaturas={criaturas} />
            </div>
            <div className="containerBestiario">
                <ul className="listaGrupos">
                    {bestiario?.map((grupo, index) => {
                        return (
                            <li key={index}>
                                <h1>{grupo.grupo}</h1>
                                <ul className="listaCriaturas">
                                    {grupo.criaturas.map(criatura => {
                                        return (
                                            <li key={criatura.idCriatura}>
                                                <Link style={{ textDecoration: 'none', color: 'black' }} to={`/criatura?id=${criatura.idCriatura}`}>{criatura.nome}</Link>
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
            <img className="logo" src={logo} />
        </div>
    )
}