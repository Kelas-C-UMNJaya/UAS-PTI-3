import { useState } from 'react';
import './css/App.css';
import { Modal } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Lulus from "./Lulus";


function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const exit = () => {
    // window.location.href = '/';
    window.close();
  };

  return (
    <Router>

      <div className="container-fluid">
        <div>
          <div>
            <h1 className="ml12">7 Days Student</h1>
          </div>

          <div id='tombol'>
            <div id='center'>
              <button className="button-30">Start</button>

              {/* <button lassName="button-30">
                <Link to="/src/Lulus.jsx">start</Link>
              </button> */}

            </div>
            <div id='center'>
              <button className="button-30" onClick={handleShow} >About us</button>
              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                id="modal"
              >
                <Modal.Header closeButton id="modalHeader">
                  <Modal.Title>LOGO KITA</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p className='container-fluid'>Kelompok 3</p>
                  <p className='mx-5'>- Christian Ivan Wibowo (00000058450)</p>
                  <p className='mx-5'>- Stanislaus Vieri Halim (00000057445)</p>
                  <p className='mx-5'>- James Bernard William (00000059431)</p>
                  <p className='mx-5'>- Dhena Purnama (00000058902)</p>
                </Modal.Body>
                <Modal.Footer>
                  <p>version 16.15.0 LTS</p>
                </Modal.Footer>
              </Modal>
            </div>
            <div id='center'>
              <button className="button-30" onClick={exit}>Exit</button>
            </div>
          </div>


        </div>

        {/* <Route path='/Lulus' component={Lulus} /> */}

      </div>
    </Router>

  );
}

export default App;
