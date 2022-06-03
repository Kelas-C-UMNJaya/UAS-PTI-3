import React, { useState, useEffect } from 'react';
import "./css/Main.css";
import ProgressBarContainer from "./components/Progress";
// import News from "./components/News";
import Jam from './components/Jam';
// import Weather from './components/Weather';



function Main() {
    const [bg, setBg] = useState("BGHome");
    const [char, setChar] = useState("https://cdn.discordapp.com/attachments/946947787235414067/982279402563969024/avatar_b1-removebg-preview.png");

    function home() {

        setBg("BGHome")
        setChar("https://cdn.discordapp.com/attachments/946947787235414067/982279402563969024/avatar_b1-removebg-preview.png")
    }


    function campus() {
        setBg("BGCampus")
        setChar("https://cdn.discordapp.com/attachments/946947787235414067/982328717235875950/avatar_sekolah-removebg-preview.png")
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

            {/* <div>
                <News />
            </div> */}
        </div>
    );
}



export default Main;