import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import Main from './pages/App'
import Bestiario from './pages/Bestiario'
import Criatura from './pages/Criatura'
import Cidade from './pages/Cidade'


function Rotas(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/bestiario" element={<Bestiario/>}/>
                <Route path="/criatura" element={<Criatura/>}/>
                <Route path="/cidade" element={<Cidade/>}/>
            </Routes>

        </Router>

);


}
export default Rotas;