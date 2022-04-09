import { useEffect, useState } from 'react';
import './App.css';
import Navbar_shorts from './components/Navbar_shorts';
import Newscontent from './components/newscontent/Newscontent';
import axios from 'axios';
import Footer from './components/footer/Footer';
import Topbtn from './components/buttonTop/Topbtn';

function App() {

  //To change the categories..
  const [category, setcategory] = useState("general")
  //To store the news in an array
  const [newsArray, setnewsArray] = useState([])
  //To store the number of result 
  const [newsResult, setnewsResult] = useState()
  //To load more news
  const [loadmore, setloadmore] = useState(20)

  // Api
  const newsApi = async () => {
    try {
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=d41c2991352041ebb5c6e9c2c4affbf2&category=${category}&pageSize=${loadmore}`)
      setnewsArray(news.data.articles)
      setnewsResult(news.data.totalResults)
    } catch (error) {
      console.log(error)
    }
  }
  //To reload the page when newsresult,category and loadmore will change.
  useEffect(() => {
    newsApi();
  }, [newsResult, category, loadmore]);

  return (
    
    <div className="App">

    {/* passing setcategory in navbar component */}
    <Navbar_shorts setcategory={setcategory} ></Navbar_shorts>

    {/* Popup window component  */}
    <Topbtn />

    {/* Newscontent componenet with all the props */}
    <Newscontent
    setloadmore={setloadmore}
    loadmore={loadmore}
    newsArray={newsArray}
    newsResult={newsResult} />

    {/* footer componenet  */}
    <Footer />

    </div>
  );
}

export default App;
