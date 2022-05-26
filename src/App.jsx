import { useState } from 'react';
import './css/App.css';
import { Modal } from 'react-bootstrap';


function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const exit = () => {
    // window.location.href = '/';
    window.close();
  };

  return (
    <div className="container-fluid">
      <div>
        <div>
          <h1 className="ml12">7 Days Student</h1>
        </div>

        <div id='tombol'>
          <div id='center'>
            <button className="button-30 btn">Start</button>
          </div>
          <div id='center'>
            <button className="button-30 btn" onClick={handleShow} >About us</button>
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

    </div>
  );
}

export default App;
