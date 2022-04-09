import { Container } from '@material-ui/core'
import React from 'react'
import './nescontent.css'
import Nescard from '../newscard/Nescard'


const Newscontent = ({ newsArray, newsResult, loadmore, setloadmore }) => {
  return (
    <>
      <Container maxWidth='md'>
        <div className='content'>
          <div className="downloadMessae">
          {/* Code for download app message at top */}
            <span className="downloadText">For the best experience use <b>inshorts</b> app on your smartphone</span>
            <img src="https://assets.inshorts.com/website_assets/images/appstore.png" alt="appstore" height="80%" className='downloadimg' />
            <img src="https://assets.inshorts.com/website_assets/images/playstore.png" alt="playstore" height="80%" className='downloadimg' />
          </div>

          {/* Here we are getting each bundle of a news in newsitem with its title,urltoimage,sourcelink etc  */}
          {newsArray.map((newsItem, indx) => {
            return <Nescard newsItem={newsItem} key={newsItem.title} />
          })}

          {/* If the value of loadmore is less than the result then onclick we increase the value of loadmore to loadmore+20  */}
          {
            loadmore <= newsResult && (
              <>
                <hr />
                <button className='loadmore' onClick={()=> setloadmore(loadmore+20)}>
                  Load More
                </button>
              </>
            )}
        </div>
      </Container>
    </>
  )
}

export default Newscontent;
