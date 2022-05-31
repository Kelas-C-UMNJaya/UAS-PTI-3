import React from "react";
import "./css/Lulus.css";
import "./css/Button.css";
import { useNavigate } from 'react-router-dom';
import Exit from "./components/Exit";
import Header from "./components/Header";


function Lulus() {
    const navigate = useNavigate();
    return (
        <div>
            <div>
                <div>
                    <Header />
                </div>
                <div>
                    <h1 className="ml6">Anda Tidak Lulus</h1>
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <button className="button-30 " onClick={() => navigate('/UAS-PTI-3')}>Home</button>
                </div>
                <div>
                    <Exit />
                </div>
            </div>
        </div>
    );
}
export default Lulus;