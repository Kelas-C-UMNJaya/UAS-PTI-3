import './css/App.css';
import { Link } from "react-router-dom";
import HTP from './components/HTP';
import About from './components/About';
import Exit from './components/Exit';
import Header from './components/Header';


function App() {
  return (

    <div className="container-fluid">
      <div>
        <div>
          <Header />
        </div>

        <div id='tombol'>
          <div>
            <Link to="/MenuChar" id='link'>
              <button className="button-30">Start</button>
            </Link>
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
