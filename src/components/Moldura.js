import React from "react";
import "./Moldura.css"


export default function Moldura(props) {
    return (
        <div className="Moldura">
            <img src={props.imagem} className="CenterImg"/>
        </div>
    )
}