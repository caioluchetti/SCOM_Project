import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import Main from './pages/App'
function Rotas(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main/>} />
               
            </Routes>

        </Router>

);


}
export default Rotas;