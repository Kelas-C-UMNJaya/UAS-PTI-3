import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lulus from "./Lulus";
import Gagal from "./Gagal";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/UAS-PTI-3' element={<App />} />
      <Route path='/Lulus' element={<Lulus />} />
      <Route path='/Gagal' element={<Gagal />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
