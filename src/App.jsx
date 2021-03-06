import './css/App.css';
import './css/Button.css';
import HTP from './components/HTP';
import About from './components/About';
import Exit from './components/Exit';
import Header from './components/Header';
import { useNavigate } from 'react-router-dom';


function App() {
  const navigate = useNavigate();

  return (

    <div className="container-fluid" id='BGAtap'>
      <div>
        <div>
          <Header />
        </div>

        <div id='tombol'>
          <div className='d-flex justify-content-center '>
            <button className="button-30" onClick={() => navigate('/MenuChar')}>Start</button>
          </div>
          <div>
            <HTP />
          </div>
          <div>
            <About />
          </div>
          <div>
            <Exit />
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
