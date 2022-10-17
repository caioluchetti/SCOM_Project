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
            <div className='externo'>
                <div>
                    <img src='https://m.media-amazon.com/images/I/41LGaQ0c+7L._AC_SY580_.jpg'/>
                </div>
                <div className='titulo' id='whiterun'>
                  Whiterun
                </div>
            </div>
        </>


    );
}

export default Whiterun;