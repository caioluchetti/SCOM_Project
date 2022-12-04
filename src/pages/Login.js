import React, { useEffect, useState } from "react";
import './styles/login.css'
import Botao from "../components/Botao";
import requests from "../requests";
import { Link, useNavigate } from 'react-router-dom';


export default function Login() {
  const [emailRedefinir, setEmailRedefinir] = useState(String)
  const [email, setEmail] = useState(String)
  const [senha, setSenha] = useState(String)
  const [show, setShow] = useState(false)
  const navigate = useNavigate();


  const navMenu = (name) => {
    navigate('/')
  }

  async function redefinir() {
    if (!emailRedefinir) alert("Digite um e-mail")
    else {
      const body = {
        email: emailRedefinir
      }
      try {
        await requests.postEsqueciSenha(body)
        alert('E-mail de recuperação enviado!\nVerifique sua caixa de entrada')
        setEmailRedefinir('')
        setShow(false)
      }
      catch (err) {
        if (err.response.data) alert(err.response.data.error)
        else alert(err.message)
      }
    }
  }

  async function login() {
    if (!email || !senha) alert("Digite o e-mail e senha de acesso")
    else {
      const body = {
        email: email,
        senha: senha
      }
      try {
        const usuario = await requests.postLogin(body)
        const stringfyUsuario = JSON.stringify(usuario)
        await localStorage.setItem("usuario", stringfyUsuario)
        navigate('/')
      }
      catch (err) {
        if (err.response.data) alert(err.response.data.error)
        else alert(err.message)
      }
    }
  }


  return (
    <>
      <div className="body" style={{ backgroundColor: 'gray' }}>

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
                <button type='button' onClick={() => login()}>ENTRAR</button>
              </div>
              <div className="novaConta">
                <div>
                  Ainda não tem conta? &ensp; <Link to="/cadastro">Cadastre-se</Link>
                </div>
                <Link onClick={() => setShow(true)}>Esqueci Minha Senha</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      {show ?
        <>
          <div className="overlay" onClick={() => setShow(false)}></div>
          <div className="modal">
            <div className="box">
              <h1>Redefinir Senha</h1>
              <div className='email'>
                <label>Insira o e-mail da sua conta</label>
                <input type='email' placeholder='Email' onChange={(event) => setEmailRedefinir(event.target.value)} value={emailRedefinir}></input>
              </div>
              <div className='button' >
                <button type='button' style={{ marginLeft: '0px' }} onClick={() => redefinir()}>Redefinir</button>
              </div>
            </div>

          </div>
        </>
        : null
      }
    </>

  )
}