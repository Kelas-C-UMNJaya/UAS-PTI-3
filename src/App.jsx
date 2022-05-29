import './css/App.css';
import { Link } from "react-router-dom";
import HTP from './components/HTP';
import About from './components/About';
import Exit from './components/Exit';


function App() {
  return (

    <div className="container-fluid">
      <div>
        <div>
          <h1 className="ml12">7 Days Student</h1>
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
