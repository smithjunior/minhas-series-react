import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const Home = () => {
  return <h1>Home</h1>
}

const Generos = () => {
  return <h1>Genêros</h1>
}

function App() {

  const [data, setData] = useState({})

  useEffect(() => {
    axios.get('/api/genres').then( res => {
      setData(res.data.data)
    })
  },[])

  return (
    <Router>
      <div>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/generos' component={Generos} />
      </div>
      <pre>{JSON.stringify(data)}</pre>
    </Router>
  )
} 

export default App
