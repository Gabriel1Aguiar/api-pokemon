import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { Home } from './pages/Home/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Pokemons } from './pages/Details/index';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route element= { <Home/> } path="/" exact/>
      <Route element= { <Pokemons/> } path="/pokemons/:id"/>
    </Routes>
  </BrowserRouter>
);
