import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Header from './components/Header';
import "./css/menuChar.css";

function MenuChar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div>
                <Header />
            </div>

            <hr id="garis" />
            <hr id="garis" />

            <div>
                <h5 className='d-grid justify-content-center mt-3 '>Pilih Karakter</h5>
            </div>



            <div id='center'>
                <div className='d-flex justify-content-center gap-3 mt-5'>
                    <button onClick={handleShow} >
                        <img src="https://cdn.discordapp.com/attachments/979742486807322705/979746440052105236/unknown.png" alt="" className="responsive" width="300" height="300" />
                    </button>
                    <button onClick={handleShow} >
                        <img src="https://cdn.discordapp.com/attachments/979742486807322705/979748604761735168/unknown.png" alt="" className="responsive" width="300" height="300" />
                    </button>
                </div>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    id="modal"
                >
                    {/* <Modal.Header closeButton id="modalHeader">
              <Modal.Title>How To Play</Modal.Title>
            </Modal.Header> */}
                    <Modal.Body>
                        <div>
                            <div className='d-flex justify-content-center mt-3'>
                                <input type="text" placeholder='Enter Your Name Here' />
                            </div>
                            <div className='d-flex justify-content-center mt-3'>
                                <Form.Select id="FS">
                                    <option>Program Studi</option>
                                    <option value="1">Informatika</option>
                                    <option value="2">Teknik Komputer</option>
                                    <option value="3">Teknik Fisika</option>
                                    <option value="4">Sistem Informasi</option>
                                </Form.Select>
                            </div>
                            <div className='d-flex justify-content-center mt-4'>
                                <button>Start</button>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className='d-flex justify-content-center'>
                        <p>Selamat Bermain</p>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}


export default MenuChar
