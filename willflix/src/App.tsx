import React from 'react'
import { useState } from 'react'
import './App.css'
import Movie from './components/movie/Movie'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Movie />
    </div>
  )
}

export default App
