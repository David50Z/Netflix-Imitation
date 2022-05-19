import {useEffect, useState} from 'react'
import { Routes, Route, Link, Navigate } from "react-router-dom";

function WatchLater(props) {
    const watchLaterList = props.watchLaterList;

    const setPosterName = props.setPosterName
    const posterName = props.posterName
  
    const setPosterImage = props.setPosterImage
    const posterImage = props.posterImage
  
    const setPosterGenre = props.setPosterGenre
    const posterGenre = props.posterGenre
  
    const setPosterSummary = props.setPosterSummary
    const posterSummary = props.setPosterSummary

    let set = (item) => {
      setPosterName(item.name)
      setPosterImage(item.image.original)
      setPosterGenre(item.genres)
      setPosterSummary(item.summary)
    }

    let list = watchLaterList.map((item) => {
        return (
          <div className='movie-container'>
           <Link to='/Show'><img className='movie' onClick={()=>{set(item)}} src={item} /> </Link>
          </div>
        )
      })


    return(
        <div>
            {list}
        </div>
    )

}

export default WatchLater