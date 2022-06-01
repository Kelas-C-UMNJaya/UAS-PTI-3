import React, { useState, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';
import "../css/Progress.css";
import { Icon } from '@iconify/react';
// import { useNavigate } from 'react-router-dom';


function Progress() {
  // const [bar, setBar] = useState(50);
  // const navigate = useNavigate();

  const [tidur, setTidur] = useState(50);
  const [makan, setMakan] = useState(50);
  const [belajar, setBelajar] = useState(50);
  const [main, setMain] = useState(50);

  useEffect(() => {
    const interval = setInterval(() => {
      setTidur(oldValue => {
        const newValue = oldValue - 1;

        if (newValue === 100) {
          clearInterval(interval); //newvalue==100, gimana ngelimitnya?
        }

        // if (newValue === 0) {
        // navigate('/Gagal');
        // }

        // console.log(newValue);

        return newValue;
      });
      setMakan(oldValue => {
        const newValue = oldValue - 1;

        if (newValue === 100) {
          clearInterval(interval); //newvalue==100, gimana ngelimitnya?
        }

        // if (newValue === 0) {
        // navigate('/Gagal');
        // }

        // console.log(newValue);

        return newValue;
      });
      setBelajar(oldValue => {
        const newValue = oldValue - 1;

        if (newValue === 100) {
          clearInterval(interval); //newvalue==100, gimana ngelimitnya?
        }

        // if (newValue === 0) {
        // navigate('/Gagal');
        // }

        // console.log(newValue);

        return newValue;
      });
      setMain(oldValue => {
        const newValue = oldValue - 1;

        if (newValue === 100) {
          clearInterval(interval); //newvalue==100, gimana ngelimitnya?
        }

        // if (newValue === 0) {
        // navigate('/Gagal');
        // }

        // console.log(newValue);

        return newValue;
      });
    }, 2000);
  }, []);

  // console.log(tidur);

  function increase_tidur() {
    setTidur(tidur + 10);
  }

  function increase_makan() {
    setMakan(tidur + 10);
  }

  function increase_belajar() {
    setBelajar(tidur + 10);
  }

  function increase_main() {
    setMain(tidur + 10);
  }

  return (
    <div id="bar">
      <div className="mt-3 mb-2">
        <div className="container">
          <div className="row gap-3">
            <div className="row">
              <div className="col-md-1 d-grid justify-content-end">
                <Icon icon="fa:bed" width="50" height="50" />
              </div>
              <div className="col-md-3 ">
                <div id="Tidur">
                  <ProgressBar now={tidur} min={0} max={100} />
                </div>
              </div>
              <div className="col-md-1 d-grid justify-content-end">
                <Icon icon="dashicons:book-alt" width="50" height="50" />
              </div>
              <div className="col-md-5 ">
                <div id="Belajar">
                  <ProgressBar now={belajar} min={0} max={100} />
                </div>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-md-1 d-grid justify-content-end">
                <Icon icon="icon-park-outline:fork-spoon" width="50" height="50" />
              </div>
              <div className="col-md-3 ">
                <div id="Makan">
                  <ProgressBar now={makan} min={0} max={100} />
                </div>
              </div>
              <div className="col-md-1 d-grid justify-content-end">
                <Icon icon="fa:gamepad" width="50" height="50" />
              </div>
              <div className="col-md-5 ">
                <div id="Main">
                  <ProgressBar now={main} min={0} max={100} />
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className='mt-5 d-flex gap-2' >
          <button id="tambah" onClick={increase_tidur}>Tidur</button>
          <button id="tambah" onClick={increase_makan}>Makan</button>
          <button id="tambah" onClick={increase_belajar}>Belajar</button>
          <button id="tambah" onClick={increase_main}>Main</button>
        </div>



      </div>
    </div>
  )
}

export default Progress