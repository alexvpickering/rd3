import React from 'react'
import Navbar from '../../shared/Navbar/Navbar'
import Footer from '../../shared/Footer/Footer'
import Article from '../../shared/Article.js'

import List from './List'
import Preview from './Preview'
import Wrapper from './Wrapper'
import Meta from './Meta'
import Date from './Date'
import Tags from './Tags'

import Page from '../../shared/Page'


const Archive = () => {
  return (
    <div>
      <Navbar/>
      <Wrapper>
        <Page>
          <Article>
            <List>
              <Preview href="/article">
              <Meta>
                <Date>February 7 2018</Date>
                <Tags></Tags>

              </Meta>
            </Preview>
            <Preview href="/article">
            <div>
              blah blah blah blah
            </div>
          </Preview>

        </List>
      </Article>
    </Page>
  </Wrapper>
  <Footer/>
</div>

)
}

export default Archive
