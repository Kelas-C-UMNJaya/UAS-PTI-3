import React from 'react';
import "./css/Main.css";
import Progress from "./components/Progress";

function Main() {
    return (
        <div>
            <div>
                <div className='mt-3'>
                    <h2 id='judul'>7 Days Student</h2>
                </div>
                <div className='mt-5'>
                    <Progress />
                </div>



            </div>
        </div>
    )
}

export default Main;