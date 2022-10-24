import React from "react";
import './styles.css'
import json from '../databaseBestiario.json'
import BarraPesquisa from "../components/BarraPesquisa";

export default function Bestiario() {

console.log('json :>> ', json);

    return (
        <div className="body">
            <BarraPesquisa/>
        </div>
    )
}