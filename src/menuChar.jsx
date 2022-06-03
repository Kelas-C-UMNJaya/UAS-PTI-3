import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
// import Form from 'react-bootstrap/Form';
import Header from './components/Header';
import { useNavigate } from 'react-router-dom';
import Select from "react-select";
import "./css/menuChar.css";
import "./css/Button.css";

// const SELECT_VALUE_KEY = "jurusan";
const options = [
    { value: 'Informatika', label: 'Informatika' },
    { value: 'Teknik Komputer', label: 'Teknik Komputer' },
    { value: 'Teknik Fisika', label: 'Teknik Fisika' },
    { value: 'Sistem Informasi', label: 'Sistem Informasi' },
]


function MenuChar() {
    const [showA, setShowA] = useState(false);
    const handleCloseA = () => setShowA(false);
    const handleShowA = () => setShowA(true);

    const [showB, setShowB] = useState(false);
    const handleCloseB = () => setShowB(false);
    const handleShowB = () => setShowB(true);




    const navigate = useNavigate();

    // ==========================================================================
    const [name, setName] = useState();
    useEffect(() => {
        localStorage.setItem('name', name);
    }, [name]);


    const [jurusan, setJurusan] = useState("");
    useEffect(() => {
        localStorage.setItem('jurusan', jurusan);
    }, [jurusan]);
    // =====================================================================


    const [chara, setChar] = useState();
    useEffect(() => {
        localStorage.setItem('chara', chara);
    }, [chara]);



    // ========================================================================
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
                    <button onClick={handleShowA} id="avatar">
                        <img src="https://cdn.discordapp.com/attachments/979742486807322705/979746440052105236/unknown.png" alt="avatarA" className="responsive" width="300" height="300" onClick={e => setChar(e.target.alt)} />
                    </button>
                    <button onClick={handleShowB} id="avatarcewe" >
                        <img src="https://cdn.discordapp.com/attachments/979742486807322705/979748604761735168/unknown.png" alt="avatarB" className="responsive" width="300" height="300" onClick={e => setChar(e.target.alt)} />
                    </button>
                </div>

                <Modal
                    show={showA}
                    onHide={handleCloseA}
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
                                    // onChange={handleChange}
                                    onChange={e => setJurusan(e.value)}
                                    options={options}
                                    placeholder="Program Studi"
                                    id="FS"
                                />
                            </div>

                            <div className='d-flex justify-content-center mt-4 mb-auto'>
                                <div className='mb-1'>
                                    <button id="button-1" onClick={() => navigate('/MainA')}>Start</button>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className='d-flex justify-content-center'>
                        <p>Selamat Bermain</p>
                    </Modal.Footer>
                </Modal>



                <Modal
                    show={showB}
                    onHide={handleCloseB}
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
                                    // onChange={handleChange}
                                    onChange={e => setJurusan(e.value)}
                                    options={options}
                                    placeholder="Program Studi"
                                    id="FS"
                                />
                            </div>

                            <div className='d-flex justify-content-center mt-4 mb-auto'>
                                <div className='mb-1'>
                                    <button id="button-1" onClick={() => navigate('/MainB')}>Start</button>
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
