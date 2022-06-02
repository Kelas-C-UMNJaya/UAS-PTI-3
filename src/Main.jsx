import React, { useState } from 'react';
import "./css/Main.css";
import Progress from "./components/Progress";
// import News from "./components/News";
import Jam from './components/Jam';
// import Weather from './components/Weather';


function Main() {
    const [bg, setBg] = useState("BGHome");

    function home() {
        setBg("BGHome")
    }


    function campus() {
        setBg("BGCampus")
    }

    return (
        <div className='container-fluid ' id={bg}>
            <div className='mt-3'>
                <h2 id='judul'>7 Days Student</h2>
                <hr id='garis' />
            </div>

            <div className='d-flex justify-content-center '>
                <div>
                    <Jam />
                </div>
                {/* <div>
                    <Weather />
                </div> */}
            </div>

            <div className='d-flex justify-content-center'>

                <div>
                    <div id='CL'>
                        <div>
                            <h3>
                                <u>Change Location</u>
                            </h3>
                        </div>
                        <div className='d-flex gap-3 mt-3'>
                            <div>
                                <button id='tambah' onClick={home} >Home</button>
                            </div>
                            <div>
                                <button id='tambah' onClick={campus}>Campus</button>
                            </div>
                        </div>
                    </div>

                    <div className='mt-5'>
                        <Progress />
                    </div>
                </div>
                <div>
                    <div>
                        <img src="https://media.discordapp.net/attachments/979742486807322705/981510594274422804/unknown.png" alt="" className="responsive mx-5" />
                    </div>
                </div>
            </div>

            {/* <div>
                <News />
            </div> */}
        </div>
    );
}



export default Main;