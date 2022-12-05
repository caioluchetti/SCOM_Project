import React, { useEffect, useState } from "react";
import './styles/galinha.css'
import Botao from "../components/Botao";
import Moldura from "../components/Moldura";
import BarraPesquisa from "../components/BarraPesquisa";
import requests from "../requests";
import { useNavigate } from 'react-router-dom';
import galinha from '../images/chickencrop.gif'
import frito from '../images/frangofrito.png'

export default function MiniGalinha() {
    const navigate = useNavigate();


    const [imagem, setImagem] = useState(galinha)
    const navMenu = (name) => {
        navigate('/')
    }


    const [vivo, setVivo] = useState(true);
    const [fase, setFase] = useState(1)

    if (vivo == false) {
        document.getElementById("ball").style.display = "none";
        document.getElementById("fim").style.display = "block";
    }

    function reset() {
        setVivo(true);
        setFase(fase + 1)
        document.getElementById("ball").style.animationDuration = (4 / (fase * 0.8)).toString() + 's';
        document.getElementById("ball").style.display = "block";
        document.getElementById("fim").style.display = "none";
    }


    return (

        <div className="body" id="mouse-espada">
            <div className="voltar" onClick={navMenu}>
                Voltar ao Menu
            </div>
            <div style={{ display: "flex", width: "100%", alignItems: 'center', justifyContent: "center" }}>
                <h1 style={{color:'white'}}>
                    Fase {fase}
                </h1>
            </div>
            <div id="ball" >
                <img
                    className="mode-switch ml-auto"
                    onClick={() => setVivo(prevMode => !prevMode)}
                    src={vivo ? galinha : frito}
                    alt="lightning-bolt"
                    height="50%"
                    key={'tatu'}
                />
            </div>
            <div id="fim">
                <p>Você matou a galinha</p>
                <p>Você será preso imediatamente!</p>
                <p>Recompensa pela sua cabeça: {(fase*1000).toFixed(0)} moedas de ouro</p>
                <p><img className="fritinho" src={frito} style={{height:"15vh"}}></img></p>
                <button className="botaozinho" onClick={reset}>RESET</button>
            </div>

        </div>
    )
}