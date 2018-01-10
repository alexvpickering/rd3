import React from 'react'
import Navbar from '../components/Navbar/Navbar.js'
import Hero from '../components/Hero/Hero.js'
import HeroActions from '../components/Hero/HeroActions/HeroActions'
import Page from '../components/Page/Page.js'
import Section from '../components/Section/Section.js'
import SectionFigure from '../components/Section/SectionFigure'
import SectionImage from '../components/Section/SectionImage'
import SectionDescription from '../components/Section/SectionDescription'
import Columns from '../components/Section/SectionColumns'
import Footer from '../components/Footer/Footer.js'
import ReturnedAbcs from '../components/Alphabet/ReturnedAbcs.js'

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
      <Section>
        <Page>
          <Columns>
            <SectionDescription>
              <h2>This will be great</h2>
              <hr/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat, eros a aliquet auctor, augue tortor gravida mauris, facilisis ultrices massa urna eget urna. Ut eget tempor ipsum. Curabitur id metus rhoncus urna volutpat semper. Nam faucibus rhoncus odio. Suspendisse nec massa nisl. Curabitur scelerisque magna sit amet rutrum scelerisque. </p>
            </SectionDescription>
            <SectionFigure>
              <SectionImage src="https://cdn.rcsb.org/pdb101/motm/images/217-Opioid_Receptors-4dkl.jpg"></SectionImage>
            </SectionFigure>
          </Columns>
        </Page>
      </Section>
      <Section>
        <Page>
          <Columns>
            <SectionDescription>
              <h2>This will be great</h2>
              <hr/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat, eros a aliquet auctor, augue tortor gravida mauris, facilisis ultrices massa urna eget urna. Ut eget tempor ipsum. Curabitur id metus rhoncus urna volutpat semper. Nam faucibus rhoncus odio. Suspendisse nec massa nisl. Curabitur scelerisque magna sit amet rutrum scelerisque. </p>
            </SectionDescription>
            <SectionFigure>
              <ReturnedAbcs/>
            </SectionFigure>
          </Columns>
      </Page>
      </Section>
      <Footer></Footer>
    </div>

  )
}

export default Home
