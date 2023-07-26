"use client";

import React, { createContext, useState, useEffect } from "react";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [newsData, setNewsData] = useState([]);
  const [favouriteCate, setFavouriteCate] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=9fee024676304f6fa01a60eee032df4c"
        );
        const data = await response.json();
        setNewsData(data);

        localStorage.setItem("news", JSON.stringify(data));
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNewsData();

    if (newsData.length === 0) {
      const storedNews = localStorage.getItem("news");
      if (storedNews) {
        setNewsData(JSON.parse(storedNews));
      }
    }
  }, [newsData]);

  return (
    <NewsContext.Provider
      value={{
        newsData,
        setNewsData,
        favouriteCate,
        setFavouriteCate,
        user,
        setUser,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
