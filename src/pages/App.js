import React, { useState, useContext, useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
import { useNavigate } from 'react-router-dom';
import './styles/Mapa.css';
import map from '../images/map.jpg'
import sound from '../audio/soundtrack.mp3'
import sound2 from '../audio/finallyawake.mp3'
import sound3 from '../audio/in2.mp3'
import sound4 from '../audio/out2.mp3'

function App() {

  const [start, setStart] = useState('');

  useEffect(() => {
   
    setStart(localStorage.getItem("condicao"))
    if(start == "sim"){
      setTexto("Loading...")
      document.getElementById('capa').style.opacity = 0;
      document.getElementById('capa').style.zIndex = -2;
      document.getElementById('capa').style.backgroundColor = 'white'
    }else{
      setTexto("Aperte na tela para acordar!")
    }

  },[start]);

  const audio = new Audio(sound);
  const audio2 = new Audio(sound2);
  const audio3 = new Audio(sound3);
  const audio4 = new Audio(sound4);

  const [texto, setTexto] = useState('Loading...');
  const [textobot, setTextobot] = useState('Tocar Música')
  const [condicao, setCondicao] = useState(0)


  const myRef = useRef();
  const myRef2 = useRef();
  const myRef3 = useRef();
  const myRef4 = useRef();

  function sumir() {

    document.getElementById('capa').style.opacity = 0;
    document.getElementById('capa').style.zIndex = -2;
    document.getElementById('capa').style.backgroundColor = 'white'
    setTexto("Hey, you, finally awake!")
  }

  function tocar() {

    myRef.current.play();
    myRef2.current.play();
    setTextobot("Parar Música")
    setCondicao(1);
  }
  function Playin() {
    myRef3.current.play();
  }
  function Playout() {
    myRef4.current.play();
  }
  function pararcontinuar() {
    if (condicao == 1) {
      myRef.current.pause();
      setTextobot("Voltar Música")
      setCondicao(0)
    } else {
      myRef.current.play();
      setTextobot("Pausar Música")
      setCondicao(1)
    }


  }

async function dois() {

    await sumir();
    await tocar();
    localStorage.setItem("condicao","sim")
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
  const Beastiarynav = () => {
    navigate('/Bestiario');
  }
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
      <audio
        ref={myRef3}
        src={sound3}
      />
      <audio
        ref={myRef4}
        src={sound4}
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
        <div className='box'>
        <div className='Title3'>
          Mapa de Skyrim
        </div>
        </div>
        
        <div className='mapa'>

          <div className='paiWindhelm'>
          <div className='logoWindhelm' onMouseEnter={Playin} onMouseLeave={Playout} onClick={Windhelmnav}>
            <div className='Windhelm-content' onMouseEnter={Playin} onMouseLeave={Playout} onClick={Windhelmnav}>
              Clique para acessar a lore dessa Cidade
            </div>
          </div>
          </div>
          <div className='paiWhiterun'>
            <div className='logoWhiterun' onMouseEnter={Playin} onMouseLeave={Playout} onClick={Whiterunnav}>
            <div className='Whiterun-content' >
                Clique para acessar a lore dessa Cidade
              </div>
            </div>
            
          </div>
          <div className='paiSolitude'>
          <div className='logoSolitude' onMouseEnter={Playin} onMouseLeave={Playout} onClick={Solitudenav}>

            <div className='Solitude-content' onMouseEnter={Playin} onMouseLeave={Playout} onClick={Solitudenav}>
              Clique para acessar a lore dessa Cidade
            </div>
          </div>
          </div>
          <div className='paiMorthal'>
          <div className='logoMorthal' onMouseEnter={Playin} onMouseLeave={Playout} onClick={Morthalnav}>

            <div className='Morthal-content' onMouseEnter={Playin} onMouseLeave={Playout} onClick={Morthalnav}>
              Clique para acessar a lore dessa Cidade
            </div>
          </div>
          </div>
          <div className='paiDawnstar'>
          <div className='logoDawnstar' onMouseEnter={Playin} onMouseLeave={Playout} onClick={Dawnstarnav}>

            <div className='Dawnstar-content' onMouseEnter={Playin} onMouseLeave={Playout} onClick={Dawnstarnav}>
              Clique para acessar a lore dessa Cidade
            </div>
          </div>
          </div>
          <div className='paiWinterhold'>
          <div className='logoWinterhold' onMouseEnter={Playin} onMouseLeave={Playout} onClick={Winterholdnav}>

            <div className='Winterhold-content' onMouseEnter={Playin} onMouseLeave={Playout} onClick={Winterholdnav}>
              Clique para acessar a lore dessa Cidade
            </div>
          </div>
          </div>
          <div className='paiRiften'>
          <div className='logoRiften' onMouseEnter={Playin} onMouseLeave={Playout} onClick={Riftennav}>
            <div className='Riften-content' onMouseEnter={Playin} onMouseLeave={Playout} onClick={Riftennav}>
              Clique para acessar a lore dessa Cidade
            </div>
          </div>
          </div>
          <div className='paiMarkarth'>
          <div className='logoMarkarth' onMouseEnter={Playin} onMouseLeave={Playout} onClick={Markarthnav}>

            <div className='Markarth-content' onMouseEnter={Playin} onMouseLeave={Playout} onClick={Markarthnav}>
              Clique para acessar a lore dessa Cidade
            </div>
          </div>
          </div>
          <div className='paiFalkreath'>
          <div className='logoFalkreath' onMouseEnter={Playin} onMouseLeave={Playout} onClick={Falkreathnav}>

            <div className='Falkreath-content' onMouseEnter={Playin} onMouseLeave={Playout} onClick={Falkreathnav}>
              Clique para acessar a lore dessa Cidade
            </div>
          </div>
          </div>
          <img alt='a' style={{zIndex:-20}}width={'100%'} height={'100%'} src={map} />
        </div>


        <div className='Undermap'>
          <div className='Title'>Conheça o mundo de Skyrim!</div>
          <div className='texto'>
          <YouTube videoId="JSRtYpNRoN0"/>
          </div>
          <div className='Title2' onClick={Beastiarynav}>Conheça o Bestiário!</div>
          </div>
      </div>


    </>


  );
}

export default App;