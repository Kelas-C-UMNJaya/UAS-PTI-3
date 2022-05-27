import React from 'react';
import "./css/menuChar.css";
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';


function menuChar() {
    return (
        <div className='container-fluid'>
            <div>
                <h1>7 Days student</h1>
            </div>
            <hr />
            <div>
                {/* TODO: Kurang Gambar */}

                <Carousel fade id='char'>
                    <Carousel.Item>
                        <img

                            className="d-block w-100"
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

                            className="d-block w-100"
                            src="https://cdn.discordapp.com/attachments/979742486807322705/979748604761735168/unknown.png"
                            alt="Second slide"
                        />

                        {/* <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    {/* <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Third slide&bg=20232a"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item> */}
                </Carousel>


            </div>
            <div className='mt-4'>
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
