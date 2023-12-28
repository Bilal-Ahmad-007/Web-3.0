import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>home</h1>
        <ul>
  <li><Link to='/'>home</Link></li>
  <li><Link to='/about'>about</Link></li>
  <li><Link to='/contact'>contact</Link></li>
</ul>
    </div>
  )
}

export default Home
