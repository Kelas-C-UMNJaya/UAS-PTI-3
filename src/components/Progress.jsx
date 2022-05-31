import React, { useState, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';
import "../css/Progress.css";
import { Icon } from '@iconify/react';

function Progress() {
  const [bar, setBar] = useState(50);

  useEffect(() => {
    setInterval(() => {
      setBar(oldValue => {
        const newValue = oldValue - 1;

         if (newValue === 100) {
         //clearInterval(interval); //newvalue==100, gimana ngelimitnya?
         }

         if (newValue === 0) {
         //clearInterval(interval); //newvalue==0, gimana direct ke gagal.jsx?
         }

        console.log(newValue);

        return newValue;
      });
    }, 1000);
  }, []);



  console.log(bar);

  function increase() {
    setBar(bar + 10);
  }



  return (



    <div id="bar">
      <div className="mt-3 mb-2">
        <div className="container">
          <div className="row">
            <div className="row">
              <div className="col-md-1 d-grid justify-content-end">
                <Icon icon="fa:bed" width="50" height="50" />
              </div>
              <div className="col-md-3 ">
                <div id="Tidur">
                  <ProgressBar now={bar} min={0} max={100} />
                </div>
              </div>
              <div className="col-md-1 d-grid justify-content-end">
                <Icon icon="dashicons:book-alt" width="50" height="50" />
              </div>
              <div className="col-md-5 ">
                <div id="Main">
                  <ProgressBar now={bar} min={0} max={100} />
                </div>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-md-1 d-grid justify-content-end">
                <Icon icon="icon-park-outline:fork-spoon" width="50" height="50" />
              </div>
              <div className="col-md-3 ">
                <div id="Belajar">
                  <ProgressBar now={bar} min={0} max={100} />
                </div>
              </div>
              <div className="col-md-1 d-grid justify-content-end">
                <Icon icon="fa:gamepad" width="50" height="50" />
              </div>
              <div className="col-md-5 ">
                <div id="Makan">
                  <ProgressBar now={bar} min={0} max={100} />
                </div>
              </div>
            </div>
          </div>
        </div>







        <div className='mt-5 d-flex justify-content-center'>
          <button  className="Button-20" id="Main" onClick={increase}>Main</button>
          <button  className="Button-20" id="Tidur" onClick= {increase}>Tidur</button>
          <button  className="Button-20" id="Belajar" onClick={increase}>Belajar</button>
          <button  className="Button-20" id="Makan" onClick={increase}>Makan</button>
        </div>



      </div>
    </div>
  )
}

export default Progress