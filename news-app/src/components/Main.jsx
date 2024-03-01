import React, { useEffect, useState } from "react";
import Reccomend from "./Reccomend";
import Popular from "./Popular/Popular";
import Weather from "./Weather/Weather";
import TopPosts from "./TopPosts/TopPosts";
import Football from "./Fooball/Football";
import NewPosts from "./NewPosts/NewPosts";
import { gsap } from "gsap";

const Main = () => {

  gsap.from(".Main", {
    y: 300,
    opacity: 0
  })
  gsap.to(".Main", {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: .5
  })

    // const POPULAR_NEWS = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=959df21719154e489073af771f4db767';
    // const POPULAR_NEWS = 'https://newsapi.org/v2/everything?q=Apple&from=2024-02-15&sortBy=popularity&apiKey=959df21719154e489073af771f4db767';
    const POPULAR_NEWS = 'https://newsapi.org/v2/top-headlines?country=us&sortBy=popularity&from=2024-02-14&apiKey=959df21719154e489073af771f4db767';
    const TOP_NEWS = 'https://newsapi.org/v2/top-headlines?q=top&apiKey=959df21719154e489073af771f4db767';
    const WEATHER = 'https://tomorrow-io1.p.rapidapi.com/v4/weather/forecast?location=42.15%2C%2082%2C1&timesteps=1h&units=metric';
    const [popularNews, setPopularNews] = useState([]);
    const [topNews, setTopNews] = useState([]);
    const [latestNews, setLatestNews] = useState([]);
    const [weather, setWeather] = useState([]);

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '6be32b6585msh739088a21dcd723p1cf50cjsn8c4f40ca3427',
        'X-RapidAPI-Host': 'tomorrow-io1.p.rapidapi.com'
      }
    };    

    const getPopularNews = () => {
        fetch(POPULAR_NEWS)
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    setPopularNews(data.articles);
                }
            });
    }
    // const getLatestNews = () => {
    //     fetch(TOP_NEWS)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             if (data) {
    //                 setTopNews(data.articles);
    //             }
    //         });
    // }
    const getTopNews = () => {
        fetch(TOP_NEWS)
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    setTopNews(data.articles);
                }
            });
    }
    
    const getWeather = () => {
          fetch(WEATHER, options)
              .then((res) => res.json())
              .then((data) => {
                  if (data) {
                    setWeather(data);
                    console.log(data)
                  }
              });
      }
  
    useEffect(() => {
        getPopularNews();
        getTopNews();
        // getLatestNews();
      getWeather();
    }, [])
  //news-key = 959df21719154e489073af771f4db767
  //    "token": "fd548af7-d29b-4f00-8007-8e3b077c24aa"

  return (
    <div className="Main">
      <div className="container">
        <Reccomend />
        <Popular  data={popularNews}/>
        <Football />
        <NewPosts data={latestNews}/>
      </div>
      <Weather data={weather} />
      <div className="container">
        <TopPosts data={topNews}/>
      </div>
    </div>
  );
};

export default Main;
