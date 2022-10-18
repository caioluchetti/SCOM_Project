import React, { useState, useContext, useEffect,useRef  } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import map from '../images/map.jpg'
import sound from '../audio/soundtrack.mp3'
import sound2 from '../audio/finallyawake.mp3'

function App() {
  const audio = new Audio(sound);
  const audio2 = new Audio(sound2);
  const [texto, setTexto] = useState('Aperte na tela para acordar!');
  const [textobot, setTextobot] = useState('')
  const [condicao, setCondicao] = useState(0)


  const myRef = useRef();
  const myRef2 = useRef();
  function sumir() {

    document.getElementById('capa').style.opacity = 0;
    document.getElementById('capa').style.zIndex = -2;
    document.getElementById('capa').style.backgroundColor = 'white'
    setTexto("Hey, you, finally awake!")
  }

  function tocar(){

    myRef.current.play();
    myRef2.current.play();
    setTextobot("Parar Música")
    setCondicao(1);
  }
  function pararcontinuar(){
    if(condicao == 1){
      myRef.current.pause();
      setTextobot("Voltar Música")
      setCondicao(0)
    }else{
      myRef.current.play();
      setTextobot("Pausar Música")
      setCondicao(1)
    }
    

  }

  function dois() {
    sumir();
    tocar();
  }

  const navigate = useNavigate();
  const Windhelmnav = () => {
    navigate('/Windhelm');
  };
  const Dawnstarnav = () => {
    navigate('/Dawnstar');
  };
  const Falkreathnav = () => {
    navigate('/Falkreath');
  };
  const Markarthnav = () => {
    navigate('/Markarth');
  };
  const Morthalnav = () => {
    navigate('/Morthal');
  };
  const Riftennav = () => {
    navigate('/Riften');
  };
  const Solitudenav = () => {
    navigate('/Solitude');
  };
  const Whiterunnav = () => {
    navigate('/Whiterun');
  };
  const Winterholdnav = () => {
    navigate('/Winterhold');
  };

  return (
    <>
    <audio
        ref={myRef}
        src={sound}
      />
    <audio
        ref={myRef2}
        src={sound2}
      />
      <div className='Capa' id='capa' onClick={dois}>
        <div className='glow'>
          {texto}
        </div>
      </div>
      <div className='MainContainer'>

        <div className='stop' onClick={pararcontinuar}>
          {textobot}
        </div>
        <div className='mapa'>
          <div className='Windhelm'>
            <div className='Windhelm-content' onClick={Windhelmnav}>
              Clique para acessar a lore dessa Cidade
            </div>
          </div>
          <div className='Whiterun'>
            <div className='Whiterun-content' onClick={Whiterunnav}>
              Clique para acessar a lore dessa Cidade
            </div>
          </div>
          <div className='Solitude'>
            <div className='Solitude-content' onClick={Solitudenav}>
              Clique para acessar a lore dessa Cidade
            </div>
          </div>
          <div className='Morthal'>
            <div className='Morthal-content' onClick={Morthalnav}>
              Clique para acessar a lore dessa Cidade
            </div>
          </div>
          <div className='Dawnstar'>
            <div className='Dawnstar-content' onClick={Dawnstarnav}>
              Clique para acessar a lore dessa Cidade
            </div>
          </div>
          <div className='Winterhold'>
            <div className='Winterhold-content' onClick={Winterholdnav}>
              Clique para acessar a lore dessa Cidade
            </div>
          </div>
          <div className='Riften'>
            <div className='Riften-content' onClick={Riftennav}>
              Clique para acessar a lore dessa Cidade
            </div>
          </div>
          <div className='Markarth'>
            <div className='Markarth-content' onClick={Markarthnav}>
              Clique para acessar a lore dessa Cidade
            </div>
          </div>
          <div className='Falkreath'>
            <div className='Falkreath-content' onClick={Falkreathnav}>
              Clique para acessar a lore dessa Cidade
            </div>
          </div>

          <img alt='a' width={'100%'} height={'100%'} src={map} />
        </div>


        <div className='Undermap'>
          <div className='Title'>O que é Skyrim</div>
        </div>
      </div>


    </>


  );
}

export default App;