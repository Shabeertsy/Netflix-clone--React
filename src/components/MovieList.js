import React from 'react'
import { imageUrl } from '../constants';
import { useEffect, useState } from 'react';
import axios from '../axios';
import './component.css'

function MovieList(props) {
  let [list, setList] = useState([])


  //fething the netflix originals data
  useEffect(() => {
    axios.get(props.url).then((response) => {
      setList(response.data.results)
    })
  })



  return (
    <div className='row'>
<h2 className='list-title'>{props.title}</h2>
      <div className='list-div'>
        {
          list.map((obj, index) => {
            return (
              list ? <img className={props.isSmall ? 'down-list' : 'list-image'} src={imageUrl + `${obj.backdrop_path}`} alt="img" /> : ""

            )
          })
        }
      </div>
    </div>
  )
}

export default MovieList
