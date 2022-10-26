import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Mapa.css';

function Downstar() {
    const navigate = useNavigate();
    const homenav = () => {
        navigate('/');
      };

    return (
        <>
           <div className='Teste'>
            Oie
           </div>
        </>


    );
}

export default Downstar;