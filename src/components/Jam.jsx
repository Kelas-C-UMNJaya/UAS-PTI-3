import React, { useState, useEffect } from 'react';
import { addMinutes, format, startOfToday } from 'date-fns'
import Weather from './Weather';
import { useNavigate } from 'react-router-dom';

const tulisan = {
  background: "black",
  color: "white",
  borderRadius: "15px",
};

function Jam() {
  const [jam, setJam] = useState(startOfToday());
  const [salam, setSalam] = useState();
  const [name, setName] = useState();
  const [day, setDay] = useState(0);
  const navigate = useNavigate();
  // const [jurusan, setJurusan] = useState();



  // =========================== BENER =====================
  useEffect(() => {
    // setDay(day + 1);
    const interval = setInterval(() => {
      setDay(day + 1);
    }, 720000);
    return () => clearInterval(interval);

  }, [day])

  if (day > 7) {
    navigate('/Lulus');
  }


  useEffect(() => {
    const prevName = localStorage.getItem('name');
    // const prevJurusan = localStorage.getItem('jurusan');
    // const prevJurusan = JSON.parse(localStorage.getItem(jurusan) ?? "[]");
    setName(prevName);
    // setJurusan(prevJurusan);
  }, []);

  const updateTime = () => {
    setJam((time) => addMinutes(time, 1));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      updateTime();
    }, 500);
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
  });

  // console.log(format(jam, 'HH'));

  return (
    <div>

      <div className='p-2' style={tulisan}>
        <div className='d-flex justify-content-center'>

          <div className='d-grid'>
            <div className='d-flex'>
              <div>
                <h4>Day-{day} |</h4>
              </div>
              <div>
                <h4>| {format(jam, 'HH:mm')}</h4>
              </div>
            </div>

            <div className='d-flex justify-content-center'>
              <h4>{salam}</h4>
            </div>
            <div className='d-flex justify-content-center'>
              <h4>{name}</h4>
            </div>
            {/* <div>
              <h4>{jurusan}</h4>
            </div> */}
          </div>

          <div className='mx-2 mt-3'>
            <Weather />
          </div>
        </div>
      </div>

    </div>
  );
}
export default Jam;
