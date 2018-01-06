import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero>
        <div>
        This is a <b>blog</b>
        </div>
        <div>
          I will type stuff here and it will be <b>awesome.</b>
        </div>


      </Hero>
    </div>

  )
}

export default Home
