import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lulus from "./Lulus";
import Gagal from "./Gagal";
import MenuChar from "./MenuChar";
import Jam from "./components/Jam";
import News from './components/News.jsx';
import MainA from "./MainA";
import MainB from "./MainB";
import Progress from './components/Progress';
import Weather from './components/Weather';
import HTP from "./components/HTP";
import About from "./components/About";
import Exit from "./components/Exit";
import Header from './components/Header';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/UAS-PTI-3' element={<App />} />
      <Route path='MenuChar' element={<MenuChar />} />
      <Route path='Lulus' element={<Lulus />} />
      <Route path='Gagal' element={<Gagal />} />
      <Route path='Jam' element={<Jam />} />
      <Route path='News' element={<News/>} />
      <Route path='MainA' element={<MainA/>} />
      <Route path='MainB' element={<MainB/>} />
      <Route path='Progress' element={<Progress/>} />
      <Route path='Weather' element={<Weather/>} />
      <Route path='HTP' element={<HTP/>} />
      <Route path='About' element={<About/>} />
      <Route path='Exit' element={<Exit/>} />
      <Route path='Header' element={<Header/>} />



    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
