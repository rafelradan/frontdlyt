import axios from 'axios';
import './App.css';
import cross from 'cross';
import { useState } from 'react';

function App() {
  const [urlYT, setUrlYT] = useState('')

    const UrlObj = {
      urlYT : urlYT
    }
   function getUrlYT(e) {
    e.preventDefault()
    if (urlYT === '') {
      alert('É necessário uma URL de vídeo do YouTube!')
    } else{
      //axios.post('https://backdlty.herokuapp.com/', UrlObj)
      //https://backdlty.herokuapp.com/
      axios.post('http://localhost:3333/', UrlObj)
      console.log(UrlObj);
      
    }
  }

  function clearUrlYT() {
    setUrlYT('')
  }

  return (
    <div className="App">
      <header className="App-header">
        <form method='get'>
          <h1>Baixar vídeos do YouTube</h1>
          
          <div className='container'>
            <h2>Cole a URL do vídeo</h2>
            <input className='inpUrl' placeholder='url do vídeo' value={urlYT} onChange={e => setUrlYT(e.target.value)} />
            <button className='download' onClick={getUrlYT}>Download</button>
          </div>

        </form>
      </header>
    </div>
  );
}

export default App;
