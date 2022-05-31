import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';

function About() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
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


                        {/* KALO NAMA KALIAN INGIN DIMASUKIN KERJAIN TUGASNYA YANG BENER!!!!!!
                        <p className='mx-5'>- Stanislaus Vieri Halim (00000057445)</p>
                        <p className='mx-5'>- James Bernard William (00000059431)</p>
                        <p className='mx-5'>- Dhena Purnama (00000058902)</p> */}


                    </Modal.Body>
                    <Modal.Footer>
                        <p>version 16.15.0 LTS</p>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default About