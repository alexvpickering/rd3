import React from 'react'
import Navbar from '../components/Navbar/Navbar.js'
import Hero from '../components/Hero/Hero.js'
import HeroActions from '../components/HeroActions/HeroActions.js'
import Page from '../components/Page/Page.js'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero>
        <Page>
          <div>
            This is a <b>blog</b>
          </div>
          <div>
            I will type stuff here and it will be <b>awesome.</b>
          </div>
        </Page>
      </Hero>
      <HeroActions/>
    </div>

  )
}

export default Home
