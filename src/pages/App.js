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

            <img  alt='a' width={'100%'} height={'100%'} src={map}/>



            </div>
           
        </>


    );
}

export default App;