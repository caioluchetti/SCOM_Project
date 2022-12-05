import React, { useEffect, useState } from "react";
import './styles/galinha.css'
import Botao from "../components/Botao";
import Moldura from "../components/Moldura";
import BarraPesquisa from "../components/BarraPesquisa";
import requests from "../requests";
import { useNavigate } from 'react-router-dom';
import galinha from '../images/chickencrop.gif'
import frito from '../images/frangofrito2.gif'

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
        document.getElementById("desistir").style.display = "none";
        document.getElementById("fase").style.display = "none";

    }


    function reset() {
        setVivo(true);
        setFase(fase + 1)
        document.getElementById("ball").style.animationDuration = (4 / (fase * 0.8)).toString() + 's';
        document.getElementById("ball").style.display = "block";
        document.getElementById("fim").style.display = "none";
        document.getElementById("fim2").style.display="none";
        document.getElementById("desistir").style.display = "block";
        document.getElementById("fase").style.display = "block";


    }
    function reset2() {
        setVivo(true);
        setFase(1)
        document.getElementById("ball").style.animationDuration = (4 / (1 * 0.8)).toString() + 's';
        document.getElementById("ball").style.display = "block";
        document.getElementById("fim").style.display = "none";
        document.getElementById("fim2").style.display="none";
        document.getElementById("desistir").style.display = "block";
        document.getElementById("fase").style.display = "block";

    }

    function desistir(){
        document.getElementById("ball").style.display = "none";
        document.getElementById("fim2").style.display = "block";
        document.getElementById("desistir").style.display = "none";
        document.getElementById("fase").style.display = "none";


    }

    return (

        <div className="body" id="mouse-espada">
            <div className="voltar" onClick={navMenu}>
                Voltar ao Menu
            </div>
            <div style={{ display: "flex", width: "100%", alignItems: 'center', justifyContent: "center", flexDirection: "column" }}>
                <h1 id="fase" style={{ color: 'white' }}>
                    Fase {fase}
                </h1>
                <div id="desistir" onClick={desistir}>
                    Eu me rendo...
                </div>
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
                <p>Mate mais enquanto os guardas não aparecem!</p>
                <p>Recompensa pela sua cabeça: {(fase * 1000).toFixed(0)} moedas de ouro</p>
                <p><img className="fritinho" src={frito} style={{ height: "20vh" }}></img></p>
                <button className="botaozinho" onClick={reset}>PROXIMO NIVEL</button>
            </div>
            <div id="fim2">
                <p>Você se entregou à guarda</p>
                <p>Você será preso imediatamente!</p>
                <p>Galinhas mortas: {fase-1}</p>
                <p><img className="fritinho" src={frito} style={{ height: "20vh" }}></img></p>
                <button className="botaozinho" onClick={reset2}>RESET</button>
            </div>
        </div>
    )
}