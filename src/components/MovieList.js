import React from 'react'
import { imageUrl,baseUrl,API_KEY } from '../constants';
import {useEffect,useState} from 'react';
import axios from '../axios';
import './component.css'

function MovieList() {
  let [list,setList]=useState([])
    
  
//fething the netflix originals data
useEffect(()=>{
axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then((response)=>
{
setList(response.data.results)
})
})



  return (
    <div>
      <h2 className='list-title'>Netflix oringinals</h2>
      {
        list.map((obj,index)=>{
          return(
           list ? <img className='list-image' src={imageUrl + `${obj.backdrop_path}`} alt="img" /> : ""
          )
  })
      }
    </div>
  )
}

export default MovieList
