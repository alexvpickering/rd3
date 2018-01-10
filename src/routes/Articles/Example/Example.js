import React from 'react'
import Navbar from '../../../shared/Navbar/Navbar.js'
import Footer from '../../../shared/Footer/Footer.js'
import Article from '../../../shared/Article.js'
import Paragraph from '../Paragraph'
import Heading from '../Heading'
import Byline from '../Byline'

const Example = () => {
  return (
    <div>
      <Navbar/>
      <Article>
        <Heading>The Importance of Headings</Heading>
        <Byline>
          <div>Alex Pickering</div>
          <div>January 8 2017</div>
        </Byline>
        <Paragraph>
          Fusce vestibulum enim ac ipsum vehicula ullamcorper. Quisque velit
          nibh, cursus suscipit metus quis, blandit luctus odio. Nulla feugiat
           posuere sapien, at placerat diam imperdiet a. Suspendisse vel
           rhoncus sapien, ac scelerisque nisl. Phasellus lectus odio,
           fermentum non ante vitae, euismod pretium leo. Duis suscipit purus
           vestibulum imperdiet fringilla. Donec ultrices bibendum justo,
            id gravida arcu commodo vitae.
        </Paragraph>
        <hr/>
      </Article>
      <Footer/>
    </div>

  )
}

export default Example
