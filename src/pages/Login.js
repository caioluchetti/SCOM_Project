import React, { useEffect, useState } from "react";
import './styles/login.css'
import Botao from "../components/Botao";
import requests from "../requests";
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState(String)
    const [senha, setSenha] = useState(String)
    const navigate = useNavigate();


    const navMenu = (name) => {
        navigate('/')
      }
    return (
        <div className="body">

        <div className="voltar" onClick={navMenu}>
            Voltar ao Menu
        </div>
        
 <div className='formulario'>
          <form>
            <span className='titulo'>Acesse sua Conta</span>
            <div className='input'>

              <div className='email'>
                <label>Email</label>
                <input type='email' placeholder='Email' onChange={(event) => setEmail(event.target.value)}></input>
              </div>
              <div className='password'>
                <label>Senha</label>
                <input type='password' placeholder='Senha' onChange={(event) => setSenha(event.target.value)}></input>
              </div>
              <div className='button' >
                <button  type = 'button'>ENTRAR</button>
              </div>

            </div>

          </form>
        </div>

        </div>
    )
}