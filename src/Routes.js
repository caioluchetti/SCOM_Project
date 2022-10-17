import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import Main from './pages/App'
import Windhelm from './pages/cidades/Windhelm'

function Rotas(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/Windhelm" element={<Windhelm/>}/>
               
            </Routes>

        </Router>

);


}
export default Rotas;