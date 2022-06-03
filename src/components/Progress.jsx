import React, { useState } from "react";
import "../css/Progress.css";
import book from "../assets/book.png";
import happy1 from "../assets/happy.png";
import eat from "../assets/eat.png";
import sleep1 from "../assets/sleeep.png";
import { useNavigate } from 'react-router-dom';


const Range = (props) => {
  return <div className="range" style={{ width: `${props.percentRange}%` }} />;
};
const RangeHappy = (props) => {
  return <div className="range" style={{ width: `${props.happy}%` }} />;
};

const RangeFood = (props) => {
  return <div className="range" style={{ width: `${props.food}%` }} />;
};
const RangeSleep = (props) => {
  return <div className="range" style={{ width: `${props.sleep}%` }} />;
};

const ProgressBar = (props) => {
  return (
    <div className="progress-bar">
      <Range percentRange={props.percentRange} />
    </div>
  );
};
const ProgressBarHappy = (props) => {
  return (
    <div className="progress-bar">
      <RangeHappy happy={props.happy} />
    </div>
  );
};

const ProgressBarFood = (props) => {
  return (
    <div className="progress-bar">
      <RangeFood food={props.food} />
    </div>
  );
};
const ProgressBarSleep = (props) => {
  return (
    <div className="progress-bar">
      <RangeSleep sleep={props.sleep} />
    </div>
  );
};

export const ProgressBarContainer = () => {
  let [percentRange, setProgress] = useState(25);
  let [food, setFood] = useState(50);
  let [sleep, setSleep] = useState(50);
  let [happy, setHappy] = useState(25);
  const navigate = useNavigate();

  React.useEffect(() => {
    const tick = () => setProgress((i) => (i > 0 ? i - 1 : 0));

    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  React.useEffect(() => {
    const tick = () => setFood((i) => (i > 0 ? i - 1 : 0));

    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  React.useEffect(() => {
    const tick = () => setSleep((i) => (i > 0 ? i - 1 : 0));

    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  React.useEffect(() => {
    const tick = () => setHappy((i) => (i > 0 ? i - 1 : 0));

    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="lebar">
          <div className="col">
            <img src={book} alt="" width="40" />
            <ProgressBar percentRange={percentRange} />
          </div>
          <div className="col">
            <img src={happy1} alt="" width="40" />
            <ProgressBarHappy happy={happy} />
          </div>
        </div>
        <div className="lebar">
          <div className="col">
            <img src={eat} alt="" width="40" />
            <ProgressBarFood food={food} />
          </div>
          <div className="col">
            <img src={sleep1} alt="" width="40" />
            <ProgressBarSleep sleep={sleep} />
          </div>
        </div>
      </div>

      <div className="toggle-buttons">
        <button
          onClick={() => {
            if (food < 20 || sleep < 20) {
              alert("Energimu ga cukup untuk belajar,Silahkan Istirahat dulu!");
            } else if (food == 0){
              setProgress(percentRange < 100 ? percentRange + 20 : 100);
              setFood(food > 0 ? food - 10 : 0);
              setSleep(sleep > 0 ? sleep - 10 : 0);
            }
          }}
        >
          Belajar
        </button>
        <button
          onClick={() => {
            if (food < 20 || sleep < 20) {
              alert("Kamu butuh energi! Pastikan kamu sudah Makan dan Tidur");
            } 
            else {
              setHappy(happy < 100 ? happy + 20 : 100);
              setFood(food > 0 ? food - 10 : 0);
              setSleep(sleep > 0 ? sleep - 10 : 0);
            }
          }}
        >
          Main
        </button>
        <button
          onClick={() => {
            if (food < 10) {
              alert("Kamu mulai Lapar. Makan dulu yuk!");
            }
            else if (food == 0) {
              navigate('/Gagal')
            }
            setFood(food < 100 ? food + 20 : 100);
          }}

        >
          Makan
        </button>
        <button
          onClick={() => {
            if (sleep < 10) {
              alert("Tidur dulu yuk!");
            }
            if (sleep == 0) {
              navigate('/Gagal')
            }
            setSleep(sleep < 100 ? sleep + 20 : 100);
          }}
        >
          Tidur
        </button>
      </div>
    </div>
  );
};

export default ProgressBarContainer;


// navigate('/Gagal')