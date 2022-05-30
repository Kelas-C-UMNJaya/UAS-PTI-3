import React from 'react';
import "./css/Main.css";
import Progress from "./components/Progress";
import Header from './components/Header';

function Main() {
    return (
        <div>
            <div>
                <div className='border border-dark mx-5 mt-3'>
                    <Header />
                </div>
                <div className='mt-5'>
                    <Progress />
                </div>



            </div>
        </div>
    )
}

export default Main