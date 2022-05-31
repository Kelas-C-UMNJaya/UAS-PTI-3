import React from 'react';
import "./css/menuChar.css";
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import Header from './components/Header';


function menuChar() {

    return (
        <div className='container-fluid'>
            <div>
                <Header />
            </div>
            <hr id="garis" />
            <hr id="garis" />

            <div id='center' className='mt-3'>
                {/* TODO: Kurang Gambar */}
                <Carousel touch >
                    <Carousel.Item >
                        <img
                            id='char'
                            // className="d-block w-100"
                            src="https://cdn.discordapp.com/attachments/979742486807322705/979746440052105236/unknown.png"
                            alt="First slide"
                        />
                        {/* <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            id='char'
                            // className="d-block w-100"
                            src="https://cdn.discordapp.com/attachments/979742486807322705/979748604761735168/unknown.png"
                            alt="Second slide"
                        />

                        {/* <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>
            </div>


            <div className='mt-4' id='center'>
                <input type="text" placeholder='Enter Your Name Here' />
            </div>
            <div className='mt-3' id='center' >
                <Form.Select id="FS">
                    <option>Program Studi</option>
                    <option value="1">Informatika</option>
                    <option value="2">Teknik Komputer</option>
                    <option value="3">Teknik Fisika</option>
                    <option value="4">Sistem Informasi</option>
                </Form.Select>
            </div>
            <div>
                <Link to='/menu'>
                <button className="button-30" >Start</button>
                </Link>
            </div>
        </div>
    );
}


export default menuChar
