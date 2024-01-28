import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../About/About.scss";
import { images } from "../../constants";
const abouts = [
  {
    title: "Product Development",
    description: "I am a good product developer",
    imgUrl: images.about01,
  },
  {
    title: "Product Designer",
    description: "I am a good product designer",
    imgUrl: images.about02,
  },
  {
    title: "Product Researcher",
    description: "I am a good product researcher",
    imgUrl: images.about03,
  },
  {
    title: "Tech Manager",
    description:
      "I am a good tech manager, who can convert technical lingo into executable business commands",
    imgUrl: images.about04,
  },
];
const About = () => {
  return (
    <>
      <h2 className="head-text">
        I Know That
        <span>Good Problem Articulation</span>
        <br />
        &
        <br />
        <span>Good Solution Ideation</span>
        <br />
        &
        <br />
        <span>Good Design</span>
        means
        <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 10 }}>
              {about.description}
            </h2>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
