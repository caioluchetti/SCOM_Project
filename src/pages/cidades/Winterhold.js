import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Mapa.css';

function Winterhold() {
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

export default Winterhold;