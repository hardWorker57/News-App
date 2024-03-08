import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Article = () => {


  const { title } = useParams();
  const News = `https://newsapi.org/v2/everything?q=${title.replaceAll('%20', ' ')}&apiKey=959df21719154e489073af771f4db767`;
  const [currentArticle, setArticle] = useState([]);
  // const [articlesNum, setArticlesNum] = useState(0);
  const pages = 0;
  useEffect(() => {
    getNews();
    window.scrollTo(0, 0)
  }, [])
  const getNews = () => {
    fetch(News)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          // let arr = data.articles;
          setArticle(data.articles[0]);
        }
    });
  }
  
  return (
    <div className='Article'>
      <div className="container"><br />
        <div className="section_title">Article</div> <br /><br /><br />
        <img src={currentArticle ? currentArticle.urlToImage : ""} alt="No image" />
        <h5>{currentArticle ? currentArticle.title : ''}</h5>
        <p>{currentArticle.content ? currentArticle.content : ''}</p>
      </div>
    </div>
  )
}

export default Article