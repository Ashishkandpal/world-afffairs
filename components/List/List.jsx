"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import "./List.css";
import Image from "next/image";

const List = ({ title, description, url, imgUrl }) => {
  const encodedTitle = encodeURIComponent(title);
  return (
    <motion.div
      className="gradient-wrapper news-wrapper"
      style={{ padding: "1rem 2rem" }}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <Link
        href={`/detail/${encodedTitle}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="title-desc-img-list">
          <div className="title-desc-list">
            <h3 className="news-heading">{title}</h3>
            <div className="new-more-info">
              <p className="news-desc">{description}</p>
              <p style={{ color: "green" }}>For more info</p>
            </div>
          </div>
          <div className="img-list">
            <img src={imgUrl} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default List;
