import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import map from '../images/map.jpg'


function App() {
    const navigate = useNavigate();
    const Windhelmnav = () => {
        navigate('/Windhelm');
      };
      const Dawnstarnav = () => {
        navigate('/Dawnstar');
      };
      const Falkreathnav = () => {
        navigate('/Falkreath');
      };
      const Markarthnav = () => {
        navigate('/Markarth');
      };
      const Morthalnav = () => {
        navigate('/Morthal');
      };
      const Riftennav = () => {
        navigate('/Riften');
      };
      const Solitudenav = () => {
        navigate('/Solitude');
      };
      const Whiterunnav = () => {
        navigate('/Whiterun');
      };
      const Winterholdnav = () => {
        navigate('/Winterhold');
      };

    return (
        <>
            <div className='mapa'>
            <div className='Windhelm'>
                <div className='Windhelm-content' onClick={Windhelmnav}>
                    Clique para acessar a lore dessa Cidade
                </div>
            </div>
            <div className='Whiterun'>
                <div className='Whiterun-content' onClick={Whiterunnav}>
                Clique para acessar a lore dessa Cidade
                </div>
            </div>
            <div className='Solitude'>
                <div className='Solitude-content' onClick={Solitudenav}>
                Clique para acessar a lore dessa Cidade
                </div>
            </div>
            <div className='Morthal'>
                <div className='Morthal-content' onClick={Morthalnav}>
                Clique para acessar a lore dessa Cidade
                </div>
            </div>
            <div className='Dawnstar'>
                <div className='Dawnstar-content' onClick={Dawnstarnav}>
                Clique para acessar a lore dessa Cidade
                </div>
            </div>
            <div className='Winterhold'>
                <div className='Winterhold-content' onClick={Winterholdnav}>
                Clique para acessar a lore dessa Cidade
                </div>
            </div>
            <div className='Riften'>
                <div className='Riften-content' onClick={Riftennav}>
                Clique para acessar a lore dessa Cidade
                </div>
            </div>
            <div className='Markarth'>
                <div className='Markarth-content' onClick={Markarthnav}>
                Clique para acessar a lore dessa Cidade
                </div>
            </div>
            <div className='Falkreath'>
                <div className='Falkreath-content' onClick={Falkreathnav}>
                Clique para acessar a lore dessa Cidade
                </div>
            </div>

            <img  alt='a' width={'100%'} height={'100%'} src={map}/>
            </div>

            <div className='Undermap'>
                <div className='Title'>O que é Skyrim</div>
            </div>
           
        </>


    );
}

export default App;