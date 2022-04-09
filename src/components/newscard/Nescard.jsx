import React from 'react'
import './newscard.css'

const Nescard = ({ newsItem }) => {
    
    //getting publishedDate
    const fulldate = new Date(newsItem.publishedAt);

    //converting full date to string and splitting it where there is a space
    var date = fulldate.toString().split(" ");

    // converting into int 
    const hour = parseInt(date[4].substring(0,2));

    const time = hour>12?true:false;
    
    return (
        <div className='newsCard'>

        {/* if image is exist show it otherwise default image show  */}
        <img src={newsItem.urlToImage?newsItem.urlToImage:"https://customercare.igloosoftware.com/.api2/api/v1/communities/10068556/previews/thumbnails/4fc20722-5368-e911-80d5-b82a72db46f2?width=680&height=680&crop=False"} alt={newsItem.title} className="newsImg"/>
        
        <div className="newsText">
        <div>
            {/* title  */}
            <span className='title'>{newsItem.title}</span>
            <span className='author'> 
            <br />
            {/* short  */}
            <a href={newsItem.url} target="_blank" style={{color:"black",textDecoration:"none"}}><b> short </b></a>
            {/* author name  */}
            <span className='muted'> by {newsItem.author?newsItem.author:"Unknown"} / {
                time?`${hour-12}:${date[4].substring(3,5)} pm`:`${hour}:${date[4].substring(3,5)} am` } on {date[2]} {date[1]} {date[3]} {date[0]}
                </span>
            </span>
        </div>
        <div className='lowernewstext'>
            <div className="desc">
                {newsItem.description}
            </div>
                <br />
                <div className='parentread'>
                <span className='readmore'>readmore at <a href={newsItem.url} target='_blank' style={{color:"grey",textDecoration:"none"}}><b>{newsItem.source.name}</b></a></span>
               
                </div>
        </div>
        </div>
        </div>
       
    )
}

export default Nescard
