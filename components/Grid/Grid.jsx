"use client";

import React, { useState } from "react";
import "./Grid.css";
import { motion } from "framer-motion";
import Link from "next/link";

// import { addToWatchlist } from "../../../functions/addToWatchlist";
// import { hasBeenAdded } from "../../../functions/hasBeenAdded";
// import { removeFromWatchlist } from "../../../functions/removeFromWatchlist";
// import { Toaster } from "react-hot-toast";

function Grid({ title, description, url, imgUrl }) {
  // const [added, setAdded] = useState(hasBeenAdded(coin.id));
  const encodedTitle = encodeURIComponent(title);
  return (
    <Link href={`/detail/${encodedTitle}`}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        // style={{ display: isWatchlistPage && !added && "none" }}
        className="motion-grid-div"
      >
        <div class="card-container">
          <div class="card">
            <div class="card-front">
              <img className="grid-img" src={imgUrl} alt="Image" />
              <h3 style={{ textAlign: "center" }}>{title}</h3>
            </div>
            <div class="card-back">
              <p>{description}</p>
            </div>
          </div>
        </div>

        {/* <IconButton
            onClick={(e) => {
              e.preventDefault();
              if (added) {
                removeFromWatchlist(coin.id);
                setAdded(false);
              } else {
                addToWatchlist(coin.id);
                setAdded(true);
              }
            }}
          >
            {added ? (
              <StarRoundedIcon
                className={`watchlist-icon ${
                  coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                } `}
                sx={{ fontSize: "2rem !important" }}
              />
            ) : (
              <StarBorderRoundedIcon
                className={`watchlist-icon ${
                  coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                } `}
                sx={{ fontSize: "2rem !important" }}
              />
            )}
          </IconButton> */}
      </motion.div>
    </Link>
  );
}

export default Grid;
