

import {useEffect, useState} from 'react'
import { Routes, Route, Link, Navigate } from "react-router-dom";

function Featured() {

    let [example, setExample] = useState([])
    let [example2, setExample2] = useState([])
    let [example3, setExample3] = useState([])

    let num = 0
    let [isActive, setIsActive] = useState(false)

    let reset = 0

    let style1 = {
        position: 'absolute',
        transition: '0.7.2s',


 
    }


    useEffect(()=>{
        fetch('https://api.tvmaze.com/shows')
          .then(response => response.json())
          .then(data => setExample(data))
      }, []) 


      const newList = []

      console.log()

      if(example[0]) {
        for(let i = 0; i < example.length; i++) {
            if(example[i].rating.average > 9) {
                newList.push(example[i].image.original)
            }
        }
    } 

    setExample2(newList)

    // setInterval(() => {
    //     if(!isActive) {
    //        setIsActive(true)
    //     } else {
    //         setIsActive(false)
    //     }
    // }, 3000)

    useEffect(()=>{
        setInterval(() => {
            if(!isActive) {
               setIsActive(true)
            } else {
                setIsActive(false)
            }
        }, 3000)
    }, [])
    

    return(
        <div className={isActive ? "featuredOn" : 'featuredOff'}>
            <img className='style1' style={style1} src={example2[num]}></img>
        </div>
    ) 

} 



export default Featured