import Home from './Components/Home';
import './App.css';
import {useEffect, useState} from 'react'
import { Routes, Route, Link, Navigate } from "react-router-dom";

function App() {



  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;