import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import map from '../images/map.jpg'

function App() {

  const [texto, setTexto] = useState('Aperte na tela para acordar!');


  function sumir() {

    document.getElementById('capa').style.opacity = 0;
    document.getElementById('capa').style.zIndex = -2;
    setTexto("Hey, you, finally awake!")
  }

  const start = () => {
    const audio = document.getElementById('soundtrack')
    const audio2 = document.getElementById('finallyawake')
    audio.play()
    audio2.play()
  }

  const stop = () => {
    const audio = document.getElementById('soundtrack')
    const audio2 = document.getElementById('finallyawake')
    audio2.stop();

  }

  function dois() {
    sumir();
    start();
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
      <audio src="https://rr1---sn-5ualdnsl.googlevideo.com/videoplayback?expire=1666063744&ei=IMlNY4GjNb240_wPj-OJ8AY&ip=64.145.67.242&id=o-AOkMYg7eOtbshLTdFa5HfOcRiCPsi7rHr_ghcV5vm7jz&itag=140&source=youtube&requiressl=yes&mh=_E&mm=31%2C29&mn=sn-5ualdnsl%2Csn-5uaeznl6&ms=au%2Crdu&mv=m&mvi=1&pl=24&initcwndbps=1437500&spc=yR2vp2sQvkJNJ7493nmn7hbXB4xRfc8&vprv=1&mime=audio%2Fmp4&ns=f_YkaEE99MKev1zBsH_3z0sI&gir=yes&clen=55605&otfp=1&dur=3.390&lmt=1646885343444265&mt=1666041915&fvip=4&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=6211224&n=DjIN6uRUkwyXng&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cotfp%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAPPMcM9eATL4fohffvJW7Fnp1kZ2x6LvB2mHp7g7atCrAiEA8xzvgTk-Q09CEOaRfrMMcYzhb6j1m8bFMxofQMeELgQ%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgF5QDetxlrvJKgCODFCSWNdnskdUppEHWAj6qTa6z84MCIQCWFITYGriM-SE9ajpq2JnEipHH947yH9R-nlfjWwcT0g%3D%3D" id="finallyawake" preload='auto'></audio>
      <audio src="https://rr2---sn-q4flrnez.googlevideo.com/videoplayback?expire=1666050251&ei=apRNY5WEO4XTkAO-4b_gDg&ip=216.131.107.77&id=o-AKF04cqRhP26ncbqKqxGWwjIh_QiyDSGbDDbG5ofLOgC&itag=140&source=youtube&requiressl=yes&mh=Kn&mm=31%2C26&mn=sn-q4flrnez%2Csn-vgqsrnzz&ms=au%2Conr&mv=m&mvi=2&pl=26&initcwndbps=821250&spc=yR2vp8e0jdYkgMQD8fq-784pAFmkoXo&vprv=1&mime=audio%2Fmp4&ns=2l7ZPvkMPbBPl_-UF9Yo4e4I&gir=yes&clen=58263799&dur=3600.068&lmt=1613113116202152&mt=1666028488&fvip=5&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5431432&n=iPQWvqQPruZHVA&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgA3r673HoaYxhxaZr6IeMqRcqb-6vzBLadRa1-Rv7jDgCIGmZp8K2RJXZTUbqiBWRUJrWoUA-JAUWF-508Zvs75RK&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAIrtBs5HAdmj-lDmmia5LdD0AaUKoVTtC8LIkuS_oebdAiEA3YAkLCnftxv_8Xlyx1eG2ZNgVbeOpBT-vOmHwH0sfW4%3D" id="soundtrack" preload='auto'></audio>
      <div className='Capa' id='capa' onClick={dois}>
        <div className='glow'>
          {texto}
        </div>
      </div>
      <div className='MainContainer'>


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