import React, { useEffect, useState } from "react";
import Reccomend from "./Reccomend";
import Popular from "./Popular/Popular";
import Weather from "./Weather/Weather";
import TopPosts from "./TopPosts/TopPosts";
import Football from "./Fooball/Football";
import NewPosts from "./NewPosts/NewPosts";

const Main = () => {

    // const POPULAR_NEWS = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=959df21719154e489073af771f4db767';
    // const POPULAR_NEWS = 'https://newsapi.org/v2/everything?q=Apple&from=2024-02-15&sortBy=popularity&apiKey=959df21719154e489073af771f4db767';
    const POPULAR_NEWS = 'https://newsapi.org/v2/top-headlines?country=us&sortBy=popularity&from=2024-02-14&apiKey=959df21719154e489073af771f4db767';
    const TOP_NEWS = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=959df21719154e489073af771f4db767';
    const [popularNews, setPopularNews] = useState([]);
    const [topNews, setTopNews] = useState([]);
    const [latestNews, setLatestNews] = useState([]);


    // const getPopularNews = () => {
    //     fetch(POPULAR_NEWS)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             if (data) {
    //                 setPopularNews(data.articles);
    //             }
    //         });
    // }
    // const getLatestNews = () => {
    //     fetch(TOP_NEWS)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             if (data) {
    //                 setTopNews(data.articles);
    //             }
    //         });
    // }
    // const getTopNews = () => {
    //     fetch(TOP_NEWS)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             if (data) {
    //                 setTopNews(data.articles);
    //             }
    //         });
    // }
    // useEffect(() => {
    //     getPopularNews();
    //     getTopNews();
    //     getLatestNews();
    // }, [])
    //news-key = 959df21719154e489073af771f4db767

  return (
    <div className="Main">
      <div className="container">
        <Reccomend />
        <Popular  data={popularNews}/>
        <Football />
        <NewPosts data={latestNews}/>
        <Weather />
        <TopPosts data={topNews}/>
      </div>
    </div>
  );
};

export default Main;
