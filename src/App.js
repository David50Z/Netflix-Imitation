import Home from './Components/Home';
import Show from './Components/Show';
import Search from './Components/Search'
import WatchLater from './Components/WatchLater'
import './App.css';
import {useEffect, useState} from 'react'
import { Routes, Route, Link, Navigate } from "react-router-dom";

function App() {

  let [posterName, setPosterName] = useState('')
  let [posterImage, setPosterImage] = useState('')
  let [posterGenre, setPosterGenre] = useState('')
  let [posterSummary, setPosterSummary] = useState('')
  let [watchLaterList, setWatchLaterList] = useState([])

  return (
    <div className="App">
    <div className='navBar'>
      <Link to='/' className='navBar'>
        <h1>Home</h1>
      </Link>

      <Link to='/Search' className='navBar'>
        <h1>Search</h1>
      </Link>

      <Link to='/WatchLater' className='navBar'>
        <h1>Watch Later</h1>
      </Link>

      </div>

      <Routes>
        <Route path='/'  element={<Home 
        posterName={posterName} 
        setPosterName={setPosterName}
        setPosterImage={setPosterImage}
        setPosterGenre={setPosterGenre}
        setPosterSummary={setPosterSummary}
        />} />

        <Route path='/Show' element={<Show
          posterName={posterName}
          posterImage={posterImage} 
          posterGenre={posterGenre} 
          posterSummary={posterSummary}  

          setWatchLaterList={setWatchLaterList}
          watchLaterList={watchLaterList}
          />} />

          <Route path='/Search' element={<Search 
          watchLaterList={watchLaterList}
          setPosterName={setPosterName}
          setPosterImage={setPosterImage}
          setPosterGenre={setPosterGenre}
          setPosterSummary={setPosterSummary}
          />} />

          <Route path='/WatchLater' element={<WatchLater
          watchLaterList={watchLaterList}
          setPosterName={setPosterName}
          setPosterImage={setPosterImage}
          setPosterGenre={setPosterGenre}
          setPosterSummary={setPosterSummary}
           />} />

      </Routes>
    </div>
  );
}

export default App;