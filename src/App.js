import Home from './Components/Home';
import Show from './Components/Show';
import './App.css';
import {useEffect, useState} from 'react'
import { Routes, Route, Link, Navigate } from "react-router-dom";

function App() {



  return (
    <div className="App">
      <Link to='/'>
        <h1>Home</h1>
      </Link>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Show' element={<Show /*name={posterName} genre={posterGenre}*/ />} />
      </Routes>
    </div>
  );
}

export default App;