import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import NavBar from './components/navBar/navBar';
import Header from './components/Header/header';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <NavBar />
    <Header />
  </React.StrictMode>
);
