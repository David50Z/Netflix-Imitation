import Show from './Show';

import {useEffect, useState} from 'react'
import { Routes, Route, Link, Navigate } from "react-router-dom";


function Home(props){
  const setPosterName = props.setPosterName
  const posterName = props.posterName

  const setPosterImage = props.setPosterImage
  const posterImage = props.posterImage

  const setPosterGenre = props.setPosterGenre
  const posterGenre = props.posterGenre

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

  /*if(example[0] && example2[0]) {
    const combineArray =(example, example2) => {
      example2.map(x =>{example.push(x)})
      return example
    }
    console.log(combineArray)
  }*/



  /*                   JHON WICK STUFF!!!                  */





  let actionNum = []
  if(example[0]) {
    for(let i = 0; i < example.length; i++) {
      let random = Math.floor(Math.random() * 4)
        if(example[i].genres.includes('Action') && random === 3 && example[i].name !== 'The Legend of Korra'){
          actionNum.splice(0, 0, example[i])
      }
    }
  }
  for(let i = 0; actionNum.length > 6; i++) {
    actionNum.pop()
  }

let set = (item) => {
  setPosterName(item.name)
  setPosterImage(item.image.original)
  setPosterGenre(item.genres)
}

  let actionPosters = actionNum.map((item) => {
    return (
      <div className='Movie-container'>
       <Link to='/Show'><img className='Movie' onClick={()=>{set(item)}} src={item.image.original} /> </Link>
      </div>
    )
  })





  /*                    ADVENTURE AWAITS!!!                */





  let adventureNum = []
  if(example[0]) {
    for(let i = 0; i < example.length; i++) {
      let random = Math.floor(Math.random() * 2)
        if(example[i].genres.includes('Adventure') && random === 1 && example[i].name !== 'The Legend of Korra') {
          adventureNum.splice(0, 0, example[i])
      }
    }
  }



  for(let i = 0; adventureNum.length > 6; i++) {
    adventureNum.pop()
  }
  let adventurePosters = adventureNum.map((item) => {
    return (
      <div className='Movie-container'>
        <Link to='/Show'><img /*onClick={() => {setPosterName()}}*/ className='Movie' src={item.image.original} /> </Link>
      </div>
    )
  })


  /*                  HARRY POTTER STUFF!!!                */



  let fantasyNum = []
  if(example[0]) {
    for(let i = 0; i < example.length; i++) {
      let random = Math.floor(Math.random() * 2)
        if(example[i].genres.includes('Fantasy') && random === 1 && example[i].name !== 'The Legend of Korra') {
          fantasyNum.splice(0, 0, example[i])
      }
    }
  }



  for(let i = 0; fantasyNum.length > 6; i++) {
    fantasyNum.pop()
  }
  let fantasyPosters = fantasyNum.map((item) => {
    return (
      <div className='Movie-container'>
        <img className='Movie' src={item.image.original} />
      </div>
    )
  })





  return (
    <div className="App">
        <h1 className='Action-Title'>Action</h1>
      <div className='Action-Posters'>
        {actionPosters}
        </div>
        <h1 className='Adventure-Title'>Adventure</h1>
        <div className='Adventure-Posters'>
        {adventurePosters}
      </div>
      <h1 className='Fantasy-Title'>Fantasy</h1>
      <div className='Fantasy-Posters'>
        {fantasyPosters}

      </div>
    </div>
  );
}

export default Home;