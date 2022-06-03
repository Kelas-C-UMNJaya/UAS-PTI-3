import React, { useState, useEffect } from 'react';
import "./css/Lulus.css";
import "./css/Button.css";
import { useNavigate } from 'react-router-dom';
import Exit from "./components/Exit";
import Header from "./components/Header";


function Lulus() {
    const navigate = useNavigate();

    const [name, setName] = useState();
    const [jurusan, setJurusan] = useState();

    useEffect(() => {
        const prevName = localStorage.getItem('name');
        const prevJurusan = localStorage.getItem('jurusan');
        // const prevJurusan = JSON.parse(localStorage.getItem(jurusan) ?? "[]");
        setName(prevName);
        setJurusan(prevJurusan);
    }, []);

    return (
        <div className="container-fluid" id="BGGagal">
            <div>
                <div>
                    <Header />
                </div>
                <div>
                    <h1 className="ml6">Anda Tidak Lulus</h1>
                </div>

                <div className='d-grid justify-content-center mt-5' >
                    <div>
                        <h3 id='nama'>
                            {name}
                        </h3>
                    </div>
                    <div>
                        <h3 id='nama'>
                            {jurusan}
                        </h3>
                    </div>
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