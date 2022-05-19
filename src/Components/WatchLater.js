import {useEffect, useState} from 'react'
import { Routes, Route, Link, Navigate } from "react-router-dom";

function WatchLater(props) {
    const watchLaterList = props.watchLaterList;

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