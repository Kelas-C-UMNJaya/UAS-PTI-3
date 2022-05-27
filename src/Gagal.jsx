import React from "react";
import "./css/Lulus.css"

function Lulus() {

    const exit = () => {
        // window.location.href = '/';
        window.close();
    };


    return (
        <div>
            <div>
                <div>
                    <h1 className="ml12">7 Days Student</h1>
                </div>
                <div>
                    <h1 className="ml6">Anda Tidak Lulus</h1>
                </div>
                <div id='center'>
                    <button className="button-30 ">Home</button>
                    <button className="button-30 " onClick={exit}>Exit</button>
                </div>
            </div>
        </div>
    );
}
export default Lulus;