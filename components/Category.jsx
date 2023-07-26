"use client";

import { useState, useContext } from "react";
import { NewsContext } from "@newscontext/NewsContext";

const Category = ({ favourite }) => {
  const [selectedValues, setSelectedValues] = useState(new Set());
  const { setFavouriteCate } = useContext(NewsContext);

  const values = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const toggleSelection = (value) => {
    if (selectedValues.has(value)) {
      selectedValues.delete(value);
      favourite([...selectedValues]);
      setFavouriteCate([...selectedValues]);
    } else {
      selectedValues.add(value);
      favourite([...selectedValues]);
      setFavouriteCate([...selectedValues]);
    }
    setSelectedValues(new Set(selectedValues));
  };

  return (
    <div>
      <h1>Categories</h1>
      <div className="values-container">
        {values.map((value, index) => (
          <div
            key={index}
            className={`value ${selectedValues.has(value) ? "selected" : ""}`}
            onClick={() => toggleSelection(value)}
          >
            {value}
          </div>
        ))}
      </div>
      <p>
        Selected Values:{" "}
        {selectedValues.size > 0 ? [...selectedValues].join(", ") : "None"}
      </p>
    </div>
  );
};

export default Category;
