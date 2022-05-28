import React, { useState, useEffect } from 'react';

function Jam() {

  const [detik, setDetik] = useState(0);
  const [jam, setJam] = useState(0);

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
        <h1>{jam}:{detik}</h1>
      </div>
    </div>
  )
}

export default Jam;