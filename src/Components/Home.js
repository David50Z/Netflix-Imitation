import ActionPosters from './Posters/ActionPosters'
import AdventurePosters from './Posters/AdventurePosters'
import FantasyPosters from './Posters/FantasyPosters'

import {useEffect, useState} from 'react'
import { Routes, Route, Link, Navigate } from "react-router-dom";


function Home(props){
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








  return (
    <div className="App">
      <div>
      <h1 id='action-Title'>Action</h1>
        <ActionPosters 
          setPosterName ={props.setPosterName}
          posterName ={props.posterName}

          setPosterImage={props.setPosterImage}
          posterImage={props.posterImage}

          setPosterGenre={props.setPosterGenre}
          posterGenre={props.posterGenre}

          setPosterSummary={props.setPosterSummary}
          posterSummary={props.setPosterSummary}
        />
        </div>
        
        <div>
        <h1 className='adventure-Title'>Adventure</h1>
        <AdventurePosters 
                    setPosterName ={props.setPosterName}
          posterName ={props.posterName}

          setPosterImage={props.setPosterImage}
          posterImage={props.posterImage}

          setPosterGenre={props.setPosterGenre}
          posterGenre={props.posterGenre}

          setPosterSummary={props.setPosterSummary}
          posterSummary={props.setPosterSummary}
        />
      </div>
      <div>
      <h1 className='fantasy-Title'>Fantasy</h1>
        <FantasyPosters 
                    setPosterName ={props.setPosterName}
          posterName ={props.posterName}

          setPosterImage={props.setPosterImage}
          posterImage={props.posterImage}

          setPosterGenre={props.setPosterGenre}
          posterGenre={props.posterGenre}

          setPosterSummary={props.setPosterSummary}
          posterSummary={props.setPosterSummary}
        />

      </div>
    </div>
  );
}

export default Home;