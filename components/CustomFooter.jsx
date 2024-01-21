import React from "react";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const CustomFooter = () => {
  return (
    <div className="footer-container">
      <a
        href="https://www.instagram.com/bodja.podcast/"
        target="_blank"
        className="icon-links"
      >
        <AiFillInstagram size={"2.5em"} />
      </a>
      <a
        href="https://www.youtube.com/@BodjaPodcast"
        target="_blank"
        className="icon-links"
      >
        <AiFillYoutube size={"2.5em"} />
      </a>
    </div>
  );
};

export default CustomFooter;
