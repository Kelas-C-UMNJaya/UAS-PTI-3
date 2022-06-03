import React, { useState } from 'react';
import "./css/Main.css";
import ProgressBarContainer from "./components/Progress";
import Jam from './components/Jam';
import News from "./components/News.jsx";

function Main() {
    const [bg, setBg] = useState("BGHome");
    const [char, setChar] = useState("https://media.discordapp.net/attachments/979742486807322705/981510594274422804/unknown.png");
    function home() {
        setBg("BGHome")
        setChar("https://media.discordapp.net/attachments/979742486807322705/981510594274422804/unknown.png")
    }
    function campus() {
        setBg("BGCampus")
        setChar("https://cdn.discordapp.com/attachments/946947787235414067/982226588697509938/unknown.png")
    }
    return (
        <div className='container-fluid ' id={bg}>
            <div className='mt-2'>
                <h2 id='judul'>7 Days Student</h2>
                <hr id='garis' />
            </div>
            <News />
            <div className='d-flex justify-content-center '>
                <div>
                    <Jam />
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <div>
                    <div id='CL'>
                        <div>
                            <h3>
                                <u>Change Location</u>
                            </h3>
                        </div>
                        <div className='d-flex gap-4 mt-3'>
                            <div>
                                <button className="PindahTempat" id='tambah' onClick={home} >Home</button>
                            </div>
                            <div>
                                <button className="PindahTempat" id='tambah' onClick={campus}>Campus</button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <ProgressBarContainer />
                    </div>
                </div>
                <div>
                    <div>
                        <img src={char} alt="" className="responsive mx-5" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Main;