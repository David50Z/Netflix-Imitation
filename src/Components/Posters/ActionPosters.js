import {useEffect, useState} from 'react'
import { Routes, Route, Link, Navigate } from "react-router-dom";

function ActionPosters(props) {

    const setPosterName = props.setPosterName
    const posterName = props.posterName
  
    const setPosterImage = props.setPosterImage
    const posterImage = props.posterImage
  
    const setPosterGenre = props.setPosterGenre
    const posterGenre = props.posterGenre
  
    const setPosterSummary = props.setPosterSummary
    const posterSummary = props.setPosterSummary
  
    let [example, setExample] = useState([])
  
    
  
  
    useEffect(()=>{
      fetch('https://api.tvmaze.com/shows')
        .then(response => response.json())
        .then(data => setExample(data))
    }, [])

    let actionNum = []
    if(example[0]) {
      for(let i = 0; i < example.length; i++) {
        let random = Math.floor(Math.random() * 4)
          if(example[i].genres.includes('Action') && random === 3 && example[i].name !== 'The Legend of Korra'){
            actionNum.splice(0, 0, example[i])
        }
      }
    }
    if(window.innerWidth > 800) {
    for(let i = 0; actionNum.length > 6; i++) {
      actionNum.pop()
    }
  } else {
    for(let i = 0; actionNum.length > 4; i++) {
      actionNum.pop()
    }
  }
  
  let set = (item) => {
    setPosterName(item.name)
    setPosterImage(item.image.original)
    setPosterGenre(item.genres)
    setPosterSummary(item.summary)
  }
  
    let actionPosters = actionNum.map((item) => {
      return (
        <div className='movie-container'>
         <Link to='/Show'><img className='movie' onClick={()=>{set(item)}} src={item.image.original} /> </Link>
        </div>
      )
    })

    return(
        <div className='action-Posters'>
            {actionPosters.map((item) => {
                return item
            })}
        </div>
    )

}

export default ActionPosters