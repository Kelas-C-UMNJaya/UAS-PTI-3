import React from "react";
import "./css/Lulus.css"
import { Link } from "react-router-dom";
import Exit from "./components/Exit";


function Lulus() {
    return (
        <div>
            <div>
                <div>
                    <h1 className="ml12">7 Days Student</h1>
                </div>
                <div>
                    <h1 className="ml6">Anda Tidak Lulus</h1>
                </div>
                <div>
                    <Link to="/UAS-PTI-3" id='link'>
                        <button className="button-30 ">Home</button>
                    </Link>
                </div>
                <div>
                    <Exit />
                </div>
            </div>
        </div>
    );
}
export default Lulus;