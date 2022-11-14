import React from 'react'
import Banner from './components/Banner'
import MovieList from './components/MovieList'
import Navbar from './components/Navbar'
import {action,originals} from './urls'

function App() {
  return (
    <div>
      <Navbar/>
   <Banner/>
   <MovieList title='Netflix Originals' url={originals}/>
   <MovieList title='Action' isSmall url={action}/>
    </div>
  )
}

export default App
