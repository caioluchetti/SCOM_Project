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

        if (vivo == false) {
            document.getElementById("ball").style.display = "none";
            document.getElementById("fim").style.display = "block";
        }
    
    function reset(){
        setVivo(true);
        document.getElementById("ball").style.display = "block";
        document.getElementById("fim").style.display = "none";
    }


    return (

        <div className="body">
            <div className="voltar" onClick={navMenu}>
                Voltar ao Menu
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
                <p><img className="fritinho" src={frito} height="60vh"></img></p>
                <button className="botaozinho" onClick={reset}>RESET</button>
            </div>

        </div>
    )
}