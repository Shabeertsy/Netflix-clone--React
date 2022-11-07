import React from 'react'
import { API_KEY, baseUrl, imageUrl } from '../constants';
import { useState, useEffect } from 'react';
import axios from '../axios'
import './component.css'


function Banner() {

  let [banner, setBanner] = useState([])

  //select a random number up to 20.
  let random = Math.floor(1 + (Math.random() * (20 - 1)))


  // get api from the tmdb for banner
  useEffect(

    () => {
      axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then((response) => {
        setBanner(response.data.results);
      })
    }
    , [])


  // select the random  banner image from the current array 
  return (
    <div>

      {
        banner.map((obj, index) => {
          if (index == random) {
            return (
              <div>

                <div>
                  <img className='banner' src={imageUrl + `${obj.backdrop_path}`} alt="" />
                </div>

                <div className="shadow">
                  <h1 className='banner-head'>{obj.original_name}</h1>
                  
                  <div className='banner-des'>
                    <p >{obj.overview}</p>
                  </div>

                </div>
              </div>
            )
          }
        })
      }
     

    </div>
  )
}

export default Banner;
