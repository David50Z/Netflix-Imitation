import Home from './Components/Home';
import Show from './Components/Show';
import './App.css';
import {useEffect, useState} from 'react'
import { Routes, Route, Link, Navigate } from "react-router-dom";

function App() {

  let [posterName, setPosterName] = useState('')
  let [posterImage, setPosterImage] = useState('')
  let [posterGenre, setPosterGenre] = useState('')

  return (
    <div className="App">
      <Link to='/'>
        <h1>Home</h1>
      </Link>
      <Routes>
        <Route path='/'  element={<Home 
        posterName={posterName} 
        setPosterName={setPosterName}
        setPosterImage={setPosterImage}
        setPosterGenre={setPosterGenre}
        />} />

        <Route path='/Show' element={<Show
          posterName={posterName}
          posterImage={posterImage} 
          posterGenre={posterGenre} />} />
      </Routes>
    </div>
  );
}

export default App;