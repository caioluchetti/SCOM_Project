import React, { useEffect, useState } from "react";
import './styles/login.css'
import Botao from "../components/Botao";
import requests from "../requests";
import { useNavigate } from 'react-router-dom';

export default function Cadastro() {
  const [email, setEmail] = useState(String)
  const [usuario, setUsuario] = useState(String)
  const navigate = useNavigate();


  const navMenu = (name) => {
    navigate('/')
  }

  async function Enviar() {

    if (!usuario || !email) alert("Preencha ambos os campos")
    else {
      const body = {
        email: email,
        usuario: usuario
      }
      try {
        await requests.postCadastro(body)
        alert('Cadastro efetuado!\nVerifique a caixa de entrada de seu e-mail')
        navigate('/')
      }
      catch (err) {
        if (err.response.data) alert(err.response.data.error)
        else alert(err.message)
      }
    }
  }

  return (
    <div className="body">

      <div className="voltar" onClick={navMenu}>
        Voltar ao Menu
      </div>

      <div className='formulario'>
        <form>
          <span className='titulo'>Faça seu Cadastro</span>
          <div className='input'>

            <div className='email'>
              <label>Email</label>
              <input type='email' placeholder='Email' onChange={(event) => setEmail(event.target.value)}></input>
            </div>
            <div className='email'>
              <label>Usuário</label>
              <input type='text' placeholder='Usuário' onChange={(event) => setUsuario(event.target.value)}></input>
            </div>
            <div className='button' >
              <button type='button' onClick={() => Enviar()}>ENVIAR</button>
            </div>
          </div>

        </form>
      </div>

    </div>
  )
}