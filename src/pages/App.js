import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import map from '../images/map.jpg'


function App() {
    const navigate = useNavigate();
    const Windhelmnav = () => {
        navigate('/Windhelm');
      };

    return (
        <>
            <div className='mapa'>
            <div className='Windhelm'>
                <div className='Windhelm-content' onClick={Windhelmnav}>
                    Clique para acessar a Lore dessa Cidade
                </div>
            </div>
            <div className='Whiterun'>
                <div className='Whiterun-content' onClick={Windhelmnav}>
                    Clique para acessar a Lore dessa Cidade
                </div>
            </div>
            <div className='Solitude'>
                <div className='Solitude-content' onClick={Windhelmnav}>
                    Clique para acessar a Lore dessa Cidade
                </div>
            </div>
            <div className='Morthal'>
                <div className='Morthal-content' onClick={Windhelmnav}>
                    Clique para acessar a Lore dessa Cidade
                </div>
            </div>
            <div className='Downstar'>
                <div className='Downstar-content' onClick={Windhelmnav}>
                    Clique para acessar a Lore dessa Cidade
                </div>
            </div>
            <div className='Winterhold'>
                <div className='Winterhold-content' onClick={Windhelmnav}>
                    Clique para acessar a Lore dessa Cidade
                </div>
            </div>
            <div className='Riften'>
                <div className='Riften-content' onClick={Windhelmnav}>
                    Clique para acessar a Lore dessa Cidade
                </div>
            </div>
            <div className='Markarth'>
                <div className='Markarth-content' onClick={Windhelmnav}>
                    Clique para acessar a Lore dessa Cidade
                </div>
            </div>
            <div className='Falkreath'>
                <div className='Falkreath-content' onClick={Windhelmnav}>
                    Clique para acessar a Lore dessa Cidade
                </div>
            </div>

            <img  alt='a' width={'100%'} height={'100%'} src={map}/>



            </div>
           
        </>


    );
}

export default App;