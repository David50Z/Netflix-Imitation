import {useEffect, useState} from 'react'
import { Routes, Route, Link, Navigate } from "react-router-dom";

function FantasyPosters(props) {

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

    let set = (item) => {
        setPosterName(item.name)
        setPosterImage(item.image.original)
        setPosterGenre(item.genres)
        setPosterSummary(item.summary)
      }

    let fantasyPosters = fantasyNum.map((item) => {
      return (
        <div className='movie-container'>
          <Link to='/Show'><img className='movie' onClick={()=>{set(item)}} src={item.image.original} /> </Link>
        </div>
      )
    })

    return(
        <div className='fantasy-Posters'>
        {fantasyPosters.map((item) => {
            return item
        })}
        </div>
    )

}

export default FantasyPosters