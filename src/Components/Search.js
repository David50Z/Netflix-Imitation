import {useEffect, useState} from 'react'
import { Routes, Route, Link, Navigate } from "react-router-dom";

function Search() {

    let [example, setExample] = useState([])
    let [example2, setExample2] = useState([])

    const [filteredData, setFilteredData] = useState([])
    const [list, setList] = useState([])


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
                searchList.splice(0, 0, example[i].image.original)
            }
          }
          setFilteredData(searchList)
        }
      }

      let posters = filteredData.map((item) => {
        return (
          <div className='movie-container'>
           <Link to='/Show'><img className='movie' onClick={()=>{set(item)}} src={item} /> </Link>
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