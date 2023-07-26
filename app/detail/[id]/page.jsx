"use client";

import React, { useContext } from "react";
import { NewsContext } from "@newscontext/NewsContext";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const DetailedView = () => {
  const title = usePathname();
  const router = useRouter();

  // Check if the query parameter exists and decode the title
  const decodedTitle = title ? decodeURIComponent(title) : "";
  console.log(decodedTitle);
  const { newsData } = useContext(NewsContext);
  const newsArr = newsData?.articles || []; // Null check for newsData
  const uniqueData = newsArr.find(
    (data) => `/detail/${data.title}` === decodedTitle
  );

  console.log("uniqueData", uniqueData);

  if (!uniqueData) {
    // If uniqueData is empty, handle the scenario here
    return <div>Data not found or loading...</div>;
  }
  return (
    <div className="detailed-card">
      <h1>{uniqueData.title}</h1>
      <img className="detailed-new-img" src={uniqueData.urlToImage} alt="" />
      <p className="detailed-description">{uniqueData.description}</p>
      <Link
        href={uniqueData.url}
        target="_blank"
        style={{
          color: "green",
          fontSize: "18px",
          cursor: "pointer",
          textDecoration: "none",
        }}
      >
        For more info
      </Link>
      <p className="detailed-author">{uniqueData.author}</p>
      <p>{uniqueData.publishedAt}</p>
    </div>
  );
};

export default DetailedView;

// author
// :
// "Ryan Woo, Yimou Lee"
// content
// :
// "BEIJING/TAIPEI, July 25 (Reuters) - China urged fishing boats to seek shelter and farmers to speed up their harvest while Taiwan suspended annual military drills as super typhoon Doksuri spiralled cl… [+3356 chars]"
// description
// :
// "China urged fishing boats to seek shelter and farmers to speed up their harvest while Taiwan suspended annual military drills as super typhoon Doksuri spiralled closer to East Asia, potentially reaching deep into China."
// publishedAt
// :
// "2023-07-25T07:39:00Z"
// source
// :
// {id: 'reuters', name: 'Reuters'}
// title
// :
// "China, Taiwan brace for their most powerful typhoon this year - Reuters"
// url
// :
// "https://www.reuters.com/world/asia-pacific/taiwan-cancels-military-drills-typ
