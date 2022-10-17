import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

function Whiterun() {
    const navigate = useNavigate();
    const homenav = () => {
        navigate('/');
      };

    return (
        <>
           <div className='Teste'>
            Oie teste
           </div>
        </>


    );
}

export default Whiterun;