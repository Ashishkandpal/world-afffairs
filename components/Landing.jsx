"use client";

import { useState } from "react";
import Grid from "./Grid/Grid";
import List from "./List/List";

const Landing = () => {
  const [viewList, setViewList] = useState(true);
  return (
    <section>
      <h3>Top Stories</h3>
      <div className="slider">
        <Grid />
      </div>
      <button className="toggle" onClick={() => setViewList((prev) => !prev)}>
        {viewList ? "Grid" : "List"}
      </button>
      <div className="list-grid">{viewList ? <List /> : <Grid />}</div>
    </section>
  );
};

export default Landing;
