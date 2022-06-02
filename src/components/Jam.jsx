import React, { useState, useEffect } from 'react';
import { addMinutes, format, startOfToday, } from 'date-fns'

const tulisan = {
  background: "black",
  color: "white",
};

function Jam() {
  const [jam, setJam] = useState(startOfToday());
  const [salam, setSalam] = useState();

  const updateTime = () => {
    setJam((prevVal) => addMinutes(prevVal, 1));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      updateTime();
    }, 250);
    return () => clearInterval(interval);
  }, []);


  // ================== Salam ===================

  const updateSalam = () => {
    if (format(jam, 'HH') >= '05' && format(jam, 'HH') <= '10') {
      setSalam('Selamat Pagi');
    } else if (format(jam, 'HH') >= '10' && format(jam, 'HH') <= '15') {
      setSalam('Selamat Siang');
    } else if (format(jam, 'HH') >= '15' && format(jam, 'HH') <= '18') {
      setSalam('Selamat Sore');
    } else if (format(jam, 'HH') >= '18' && format(jam, 'HH') <= '22') {
      setSalam('Selamat Malam');
    } else if (format(jam, 'HH') >= '22' && format(jam, 'HH') <= '24') {
      setSalam('Selamat Tidur');
    } else {
      setSalam('Selamat Tidur');
    }
  }
  // console.log(salam);

  useEffect(() => {
    updateSalam();
  }, [jam]);

  // console.log(format(jam, 'HH'));

  return (
    <div>
      <div className='p-2' style={tulisan}>
        <div className='d-grid justify-content-center'>
          <h4>{format(jam, 'HH:mm')}</h4>
        </div>
        <div className='d-grid justify-content-center'>
          <h4>{salam}</h4>
        </div>
      </div>
    </div>
  );
}
export default Jam;
