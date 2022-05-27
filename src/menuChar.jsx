import React from 'react';
import Form from 'react-bootstrap/Form';
import "./css/menuChar.css"

function menuChar() {
    return (
        <div className='container-fluid'>
            <div>
                <h1>7 Days student</h1>
            </div>
            <hr />
            <div>
                {/* TODO:  Carousel Karakter*/}
            </div>
            <div>
                <input type="text" placeholder='Enter Your Name Here' />
            </div>
            <div className='mt-3'>
                <Form.Select id="PS">
                    <option>Program Studi</option>
                    <option value="1">Informatika</option>
                    <option value="2">Teknik Komputer</option>
                    <option value="3">Teknik Fisika</option>
                    <option value="4">Sistem Informasi</option>
                </Form.Select>
            </div>
            <div className='mt-3'>
                <button>Start</button>
            </div>
        </div>
    );
}


export default menuChar
