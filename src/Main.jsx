import React from 'react';
import "./css/Main.css";
import { ProgressBar } from 'react-bootstrap';

function Main() {
    return (
        <div>
            <div>
                <div className='border border-dark mx-5 mt-3'>
                    <h1 className="ml12">7 Days Student</h1>
                </div>
                <div className='mt-5'>
                    <ProgressBar now={50} />
                </div>



            </div>
        </div>
    )
}

export default Main