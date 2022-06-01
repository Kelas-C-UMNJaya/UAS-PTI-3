import React, { useState, useEffect } from 'react';

function Jam() {

  const [detik, setDetik] = useState(0);
  const [jam, setJam] = useState(0);
  const [salam, setSalam] = useState('');

  // ================== Salam ===================
  const jamSalam = () => {
    if (jam >= 0 && jam <= 11) {
      setSalam('Selamat Pagi');
    } else if (jam >= 12 && jam <= 15) {
      setSalam('Selamat Siang');
    } else if (jam >= 16 && jam <= 18) {
      setSalam('Selamat Sore');
    } else if (jam >= 19 && jam <= 23) {
      setSalam('Selamat Malam');
    }
  }





  // ================== Jam ===================


  useEffect(() => {
    setInterval(() => {

      for (let i = 0; i < 24; i++) {
        setTimeout(function timer() {
          console.log(i);
          setJam(i);
        }, i * 30000);
      }
    }, 30000);
  }, []);



  // ================== Detik ===================

  useEffect(() => {
    setInterval(() => {

      for (let j = 0; j < 60; j++) {
        setTimeout(function timer() {
          console.log(j);
          setDetik(j);
        }, j * 500);
      }
    }, 30000)
  }, []);




  // ================= Bener ==================
  // useEffect(() => {
  //   for (let j = 0; j < 60; j++) {
  //     setTimeout(function timer() {
  //       console.log(j);
  //       setDetik(j);
  //     }, j * 500);
  //   }
  // }, []);

  return (
    <div>
      <div>
        <h2>{jam}:{detik}</h2>
      </div>
      <div>
        <h2>{salam}</h2>  
      </div>
    </div>
  )
}

export default Jam;