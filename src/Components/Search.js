import Show from './Show';

import {useEffect, useState} from 'react'
import { Routes, Route, Link, Navigate } from "react-router-dom";

function Search(props) {

    let [example, setExample] = useState([])
    let [example2, setExample2] = useState([])

    const [filteredData, setFilteredData] = useState([])
    const [list, setList] = useState([])

    const watchLaterList = props.watchLaterList;

    const setPosterName = props.setPosterName
    const posterName = props.posterName
  
    const setPosterImage = props.setPosterImage
    const posterImage = props.posterImage
  
    const setPosterGenre = props.setPosterGenre
    const posterGenre = props.posterGenre
  
    const setPosterSummary = props.setPosterSummary
    const posterSummary = props.setPosterSummary

    const set = (item) => {
      console.log(item)
      setPosterName(item.name)
      setPosterImage(item.image.original)
      setPosterGenre(item.genres)
      setPosterSummary(item.summary)
    }


    useEffect(()=>{
        fetch('https://api.tvmaze.com/shows')
          .then(response => response.json())
          .then(data => setExample(data))
          /*.then(()=> fetch('https://api.tvmaze.com/shows?page=1'))
          .then(response => response.json())
          .then(data2 => setExample2(data2))*/
      }, [])




    const handleFilter = (event) => {
        const searchWord = event.target.value.toLowerCase();
        let searchList = []
        if(searchWord === '') {
            window.location.reload()
        }
        if(example[0]) {
          for(let i = 0; i < example.length; i++) {
              if(example[i].name.toLowerCase().includes(searchWord) && example[i].name !== 'The Legend of Korra') {
                searchList.splice(0, 0, example[i])
            }
          }
          setFilteredData(searchList)
        }
      }

      let posters = filteredData.map((item) => {
        return (
          <div className='searchPosterContainer'>
           <Link to='/Show'><img className='searchPoster' onClick={()=>{set(item)}} src={item.image.original} /> </Link>
          </div>
        )
      })
    
    



    return(
        <div className='search'>
            <div className='searchInputs'>
                    <input type='text' placeholder='Enter Show Title' onChange={handleFilter} ></input>
                {posters}
            </div>
        </div>
    )
}

export default Search