import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import Main from './pages/App'
import Windhelm from './pages/cidades/Windhelm'
import Dawnstar from './pages/cidades/Dawnstar'
import Falkreath from './pages/cidades/Falkreath'
import Markarth from './pages/cidades/Markarth'
import Morthal from './pages/cidades/Morthal'
import Riften from './pages/cidades/Riften'
import Solitude from './pages/cidades/Solitude'
import Whiterun from './pages/cidades/Whiterun'
import Winterhold from './pages/cidades/Winterhold'
import Bestiario from './pages/Bestiario'


function Rotas(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/Windhelm" element={<Windhelm/>}/>
                <Route path="/Dawnstar" element={<Dawnstar/>}/>
                <Route path="/Falkreath" element={<Falkreath/>}/>
                <Route path="/Markarth" element={<Markarth/>}/>
                <Route path="/Morthal" element={<Morthal/>}/>
                <Route path="/Riften" element={<Riften/>}/>
                <Route path="/Solitude" element={<Solitude/>}/>
                <Route path="/Whiterun" element={<Whiterun/>}/>
                <Route path="/Winterhold" element={<Winterhold/>}/>
                <Route path="/Bestiario" element={<Bestiario/>}/>

            </Routes>

        </Router>

);


}
export default Rotas;