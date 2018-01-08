import React from 'react'
import Navbar from '../components/Navbar/Navbar.js'
import Footer from '../components/Footer/Footer.js'
import Article from '../components/Article/Article'
import ArticleParagraph from '../components/Article/ArticleParagraph.js'
import ArticleHeading from '../components/Article/ArticleHeading.js'
import ArticleByline from '../components/Article/ArticleByline.js'

const Example = () => {
  return (
    <div>
      <Navbar/>
      <Article>
        <ArticleHeading>The Importance of Headings</ArticleHeading>
        <ArticleByline>
          <div>Alex Pickering</div>
          <div>January 8 2017</div>
        </ArticleByline>
        <ArticleParagraph>
          Fusce vestibulum enim ac ipsum vehicula ullamcorper. Quisque velit
          nibh, cursus suscipit metus quis, blandit luctus odio. Nulla feugiat
           posuere sapien, at placerat diam imperdiet a. Suspendisse vel
           rhoncus sapien, ac scelerisque nisl. Phasellus lectus odio,
           fermentum non ante vitae, euismod pretium leo. Duis suscipit purus
           vestibulum imperdiet fringilla. Donec ultrices bibendum justo,
            id gravida arcu commodo vitae.
        </ArticleParagraph>
        <hr/>
      </Article>
      <Footer/>
    </div>

  )
}

export default Example
