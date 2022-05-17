import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import { Routes, Route, Link, Navigate } from "react-router-dom";

function App() {

  let [example, setExample] = useState([])
  let [example2, setExample2] = useState([])
  let [example3, setExample3] = useState([])

  useEffect(()=>{
    fetch('https://api.tvmaze.com/shows')
      .then(response => response.json())
      .then(data => setExample(data))
      .then(()=> fetch('https://api.tvmaze.com/shows?page=1'))
      .then(response => response.json())
      .then(data2 => setExample2(data2))
  }, [])

  let posterNum = []
  if(example[0]) {
    for(let i = 0; i < 10; i++) {
        posterNum.splice(0, 0, example[i].image.medium)
      }
  }
  for(let i = 0; posterNum.length > 6; i++) {
    posterNum.pop()
  }

  console.log(posterNum)

  let posters = posterNum.map((item) => {
    return (
      <div className='Movie-container'>
        <img className='Movie' src={item} />
      </div>
    )
  })

  /*for(let i = 0; i < 250; i++) {
    console.log(example[i])
  }

  for(let i = 0; i < 250; i++) {
    console.log(example2[i])
  } */

  return (
    <div className="App">
      <div className='Posters'>
        {posters}
      </div>
    </div>
  );
}

export default App;


/*{array.map(function(item) {
  return <img src={item} />
})}*/