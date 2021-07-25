import React, { useEffect, useState } from "react";

const News = () => {
  const [newsList, setNewsList] = useState();
  const fetchNews = async () => {
    const url =
      "https://newsapi.org/v2/everything?" +
      "q=Derecho%Colombia&" +
      "from=2021-07-24&" +
      "sortBy=popularity&" +
      "apiKey=f4d4a439ccf8421ca72123a74d7f05c2";

    const response = await fetch(url);
    const responseJSON = await response.json();
    setNewsList(responseJSON.articles);
    console.log(newsList);
  };

  useEffect(() => {
    fetchNews();
  });

  return (<div className="news-container">{!newsList? "Cargando..." : newsList.map((article) => {
    return(<div><p>{article.title}</p></div>);
})}</div>);
};

export default News;
