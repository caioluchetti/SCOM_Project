import React from "react";

export default function Botao(props) {
    return (
        <button onClick={() => props.funcao()}>{props.texto}</button>
    )
}