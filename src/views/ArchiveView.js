import React from 'react'
import Navbar from '../components/Navbar/Navbar.js'
import Footer from '../components/Footer/Footer.js'
import Article from '../components/Article/Article'
import ArticleParagraph from '../components/Article/ArticleParagraph.js'
import ArticleHeading from '../components/Article/ArticleHeading.js'
import ArticleByline from '../components/Article/ArticleByline.js'

import PostList from '../components/Archive/PostList'
import PostPreview from '../components/Archive/PostPreview'
import Archive from '../components/Archive/Archive.js'
import PreviewMeta from '../components/Archive/PreviewMeta.js'
import PreviewDate from '../components/Archive/PreviewDate.js'
import PreviewTags from '../components/Archive/PreviewTags.js'

import Page from '../components/Page/Page.js'


const ArchiveView = () => {
  return (
    <div>
      <Navbar/>
      <Archive>
        <Page>
          <Article>
            <PostList>
              <PostPreview href="/article">
              <PreviewMeta>
                <PreviewDate>February 7 2018</PreviewDate>
                <PreviewTags></PreviewTags>

              </PreviewMeta>
            </PostPreview>
            <PostPreview href="/article">
            <div>
              blah blah blah blah
            </div>
          </PostPreview>

        </PostList>
      </Article>
    </Page>
  </Archive>
  <Footer/>
</div>

)
}

export default ArchiveView
