import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Header from './components/Header';
import { useNavigate } from 'react-router-dom';
import Select from "react-select";
import "./css/menuChar.css";
import "./css/Button.css";

const SELECT_VALUE_KEY = "jurusan";
const options = [
    { value: 'Informatika', label: 'Informatika' },
    { value: 'Teknik Komputer', label: 'Teknik Komputer' },
    { value: 'Teknik Fisika', label: 'Teknik Fisika' },
    { value: 'Sistem Informasi', label: 'Sistem Informasi' },

]


function MenuChar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();

    // ==========================================================================

    const [name, setName] = useState();

    useEffect(() => {
        localStorage.setItem('name', name);
    }, [name]);


    const [jurusan, setJurusan] = useState("");
    const handleChange = (s) => {
        localStorage.setItem(SELECT_VALUE_KEY, JSON.stringify(s));
        setJurusan(s);
    };



    return (
        <div id='BGChar'>
            <div id='head'>
                <Header />
            </div>

            <hr id="garis" />
            <hr id="garis" />

            <div>
                <h5 className='d-grid justify-content-center mt-3 ' id='head'>Pilih Karakter</h5>
            </div>

            <div id='center'>
                <div className='d-flex justify-content-center gap-3 mt-5'>
                    <button onClick={handleShow} id="avatar">
                        <img src="https://cdn.discordapp.com/attachments/979742486807322705/979746440052105236/unknown.png" alt="" className="responsive" width="300" height="300" />
                    </button>
                    <button onClick={handleShow} id="avatar" >
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
                        <div id="IN">
                            <div className='d-flex justify-content-center mt-auto'>
                                <div className='mt-2'>
                                    <input type="text" placeholder="Enter Your Name Here" onChange={(e) => setName(e.target.value)} />
                                    {/* placeholder='Enter Your Name Here'
                                        value={name}
                                    /> */}
                                </div>
                            </div>
                            <div className='d-flex justify-content-center mt-3'>
                                <Select
                                    value={jurusan}
                                    onChange={handleChange}
                                    options={options}
                                    placeholder="Program Studi"
                                    id="FS"
                                />
                            </div>
                            <div className='d-flex justify-content-center mt-4 mb-auto'>
                                <div className='mb-1'>
                                    <button id="button-1" onClick={() => navigate('/Main')}>Start</button>
                                </div>
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


export default MenuChar;
