import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { Grid } from "@material-ui/core";
import LandingPage from "./LandingPage";

const API_KEY = "[YOUR_API_KEY_PROVIDED_BY_NEWS_API]";

const Home = () => {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=${API_KEY}`
    );
    const data = await response.json();
    setNews(data.articles);
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <LandingPage news={news} />
      <Grid container spacing={2}>
        {news.map((data, index) => (
          <Grid key={index} item xs={3}>
            <NewsCard data={data} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
