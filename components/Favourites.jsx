"use client";

import { useState } from "react";

const Favourites = () => {
  const [favourite, setFavourite] = useState(false);
  return (
    <div>
      {!favourite ? (
        <img src="/heart-svgrepo-com.svg" alt="heart-outlined" />
      ) : (
        <img src="/public/heart-fill-svgrepo-com.svg" alt="heart-outlined" />
      )}
    </div>
  );
};

export default Favourites;
