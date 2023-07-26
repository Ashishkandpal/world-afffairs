"use client";

import React, { useState, useContext } from "react";
import Grid from "./Grid/Grid";
import List from "./List/List";
import { NewsContext } from "@newscontext/NewsContext";

const Feed = () => {
  const [viewList, setViewList] = useState(true);
  const { newsData } = useContext(NewsContext);
  const newsArr = newsData?.articles || []; // Null check for newsData

  return (
    <section>
      <h3 style={{ marginLeft: "15px" }}>Top Stories</h3>
      <div className="slider">{/* <Grid /> */}</div>
      <button className="toggle" onClick={() => setViewList((prev) => !prev)}>
        {viewList ? "Grid" : "List"}
      </button>
      <div className="list">
        {!newsData ? (
          <p>Loading...</p>
        ) : (
          viewList &&
          newsArr.map((news, i) => (
            <React.Fragment key={i}>
              <List
                title={news.title}
                description={news.description}
                url={news.url}
                imgUrl={news.urlToImage}
              />
            </React.Fragment>
          ))
        )}
      </div>
      <div className="grid-container">
        {!newsData ? (
          <p>Loading...</p>
        ) : (
          !viewList &&
          newsArr.map((news, i) => (
            <React.Fragment key={i}>
              <Grid
                title={news.title}
                description={news.description}
                url={news.url}
                imgUrl={news.urlToImage}
              />
            </React.Fragment>
          ))
        )}
      </div>
    </section>
  );
};

export default Feed;
