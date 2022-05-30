import React from "react";
import "./css/Lulus.css"
import { Link } from "react-router-dom";
import Exit from "./components/Exit";
import Header from "./components/Header";

function Lulus() {
    return (
        <div>
            <div>
                <div>
                    <Header />
                </div>
                <div>
                    <h1 className="ml6">Selamat Anda Telah Lulus</h1>
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