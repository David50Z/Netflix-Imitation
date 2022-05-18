import {useEffect, useState} from 'react'
import { Routes, Route, Link, Navigate } from "react-router-dom";

function Home() {

  let [example, setExample] = useState([])
  let [example2, setExample2] = useState([])
  let [example3, setExample3] = useState([])

  useEffect(()=>{
    fetch('https://api.tvmaze.com/shows')
      .then(response => response.json())
      .then(data => setExample(data))
      /*.then(()=> fetch('https://api.tvmaze.com/shows?page=1'))
      .then(response => response.json())
      .then(data2 => setExample2(data2))*/
  }, [])

  /*                   JHON WICK STUFF!!!                  */





  let actionNum = []
  if(example[0]) {
    for(let i = 0; i < example.length; i++) {
      let random = Math.floor(Math.random() * 4)
        if(example[i].genres.includes('Action') && random === 3 && example[i].name !== 'The Legend of Korra'){
          actionNum.splice(0, 0, example[i].image.original)
      }
    }
  }
  for(let i = 0; actionNum.length > 6; i++) {
    actionNum.pop()
  }
  let actionPosters = actionNum.map((item) => {
    return (
      <div className='Movie-container'>
        <img className='Movie' src={item} />
      </div>
    )
  })





  /*                    ADVENTURE AWAITS!!!                */





  let adventureNum = []
  if(example[0]) {
    for(let i = 0; i < example.length; i++) {
      let random = Math.floor(Math.random() * 2)
        if(example[i].genres.includes('Adventure') && random === 1 && example[i].name !== 'The Legend of Korra') {
          adventureNum.splice(0, 0, example[i].image.original)
      }
    }
  }



  for(let i = 0; adventureNum.length > 6; i++) {
    adventureNum.pop()
  }
  let adventurePosters = adventureNum.map((item) => {
    return (
      <div className='Movie-container'>
        <img className='Movie' src={item} />
      </div>
    )
  })

//console.log(adventureNum)
//console.log(actionNum)



  return (
    <div className="App">
      <div className='Action-Posters'>
      <h1>Action</h1>
        {actionPosters}
        </div>
        <h1>Adventure</h1>
        <div className='Adventure-Posters'>
        {adventurePosters}
      </div>
    </div>
  );
}

export default Home;